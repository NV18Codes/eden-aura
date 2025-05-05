import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const POSTMAN_API_LOGIN_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/auth/login';
const POSTMAN_API_REGISTER_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/auth/register';
const POSTMAN_API_FORGOT_PASSWORD_URL = 'https://apiedenaura-production-b3d4.up.railway.app/api/v1/auth/forgot-password';

function SignIn() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(() => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  });

  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const [signInIdentifier, setSignInIdentifier] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpAddress, setSignUpAddress] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signUpSecurityAnswer, setSignUpSecurityAnswer] = useState('');

  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSecurityAnswer, setForgotSecurityAnswer] = useState('');
  const [forgotNewPassword, setForgotNewPassword] = useState('');
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState('');

  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const [forgotError, setForgotError] = useState('');

  const SECURITY_QUESTION = 'What is your favorite color?';

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setIsForgotPassword(false);
    resetErrors();
  };

  const toggleForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
    setIsSignUp(false);
    resetErrors();
  };

  const resetErrors = () => {
    setSignInError('');
    setSignUpError('');
    setForgotError('');
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setSignInError('');
    if (!signInIdentifier || !signInPassword) {
      setSignInError('Please enter email/mobile and password');
      return;
    }
    try {
      const { data } = await axios.post(POSTMAN_API_LOGIN_URL, {
        email: signInIdentifier,
        password: signInPassword,
      });
      if (data.success) {
        if (keepSignedIn) {
          localStorage.setItem('user', JSON.stringify(data.user));
        } else {
          sessionStorage.setItem('user', JSON.stringify(data.user));
        }
        setCurrentUser(data.user);
        toast.success("Login successful! Welcome back.");
        setSignInIdentifier('');
        setSignInPassword('');
        navigate(data.user.role?.toLowerCase() === 'admin' ? '/admin-dashboard' : '/products');
      } else {
        setSignInError('Incorrect email or password');
      }
    } catch (error) {
      setSignInError('Incorrect email or password');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setSignUpError('');
    if (!signUpName || !signUpEmail || !signUpMobile || !signUpAddress || !signUpPassword || signUpPassword !== signUpConfirmPassword || !signUpSecurityAnswer) {
      setSignUpError('Please fill all fields correctly and ensure passwords match.');
      return;
    }
    try {
      const { data } = await axios.post(POSTMAN_API_REGISTER_URL, {
        name: signUpName,
        email: signUpEmail,
        phone: signUpMobile,
        address: signUpAddress,
        password: signUpPassword,
        securityQuestion: SECURITY_QUESTION,
        answer: signUpSecurityAnswer,
      });
      if (data.success) {
        toast.success('Account created successfully!');
        toggleForm();
      } else {
        setSignUpError('Account already exists. Please log in.');
      }
    } catch (error) {
      setSignUpError('Registration failed');
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    setForgotError('');
    if (!forgotEmail || !forgotSecurityAnswer || !forgotNewPassword || forgotNewPassword !== forgotConfirmPassword) {
      setForgotError('Please fill all fields correctly and ensure passwords match.');
      return;
    }
    try {
      const { data } = await axios.post(POSTMAN_API_FORGOT_PASSWORD_URL, {
        email: forgotEmail,
        answer: forgotSecurityAnswer,
        newPassword: forgotNewPassword,
      });
      if (data.success) {
        toast.success('Password reset successful! Please sign in with your new password.');
        toggleForm();
      } else {
        setForgotError('Incorrect answer or unable to reset password.');
      }
    } catch (error) {
      setForgotError('Incorrect answer or unable to reset password.');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    sessionStorage.removeItem('user');
    setCurrentUser(null);
    resetErrors();
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">
        {currentUser ? `Welcome, ${currentUser.name}!` : isSignUp ? 'Create Account' : isForgotPassword ? 'Reset Password' : 'Sign In'}
      </h1>

      {currentUser ? (
        <>
          <button className="btn btn-success me-2" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
          <button className="btn btn-outline-secondary" onClick={handleSignOut}>Sign Out</button>
        </>
      ) : isSignUp ? (
        <form onSubmit={handleSignUpSubmit}>
          <input className="form-control mb-3" placeholder="Name" value={signUpName} onChange={(e) => setSignUpName(e.target.value)} required />
          <input type="email" className="form-control mb-3" placeholder="Email" value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} required />
          <input type="tel" className="form-control mb-3" placeholder="Mobile" maxLength={10} value={signUpMobile} onChange={(e) => setSignUpMobile(e.target.value)} required />
          <textarea className="form-control mb-3" placeholder="Address" value={signUpAddress} onChange={(e) => setSignUpAddress(e.target.value)} required />
          <div className="mb-3">
            <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} required />
          </div>
          <div className="mb-3">
            <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Confirm Password" value={signUpConfirmPassword} onChange={(e) => setSignUpConfirmPassword(e.target.value)} required />
          </div>
          <input className="form-control mb-3" placeholder="Favorite color (Security Answer)" value={signUpSecurityAnswer} onChange={(e) => setSignUpSecurityAnswer(e.target.value)} required />
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" checked={showPassword} onChange={() => setShowPassword(!showPassword)} id="toggleSignUpPassword" />
            <label className="form-check-label" htmlFor="toggleSignUpPassword">Show Password</label>
          </div>
          {signUpError && <div className="text-danger mb-3">{signUpError}</div>}
          <button type="submit" className="btn btn-primary w-100">Create Account</button>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-link" onClick={toggleForm}>Already have an account? Sign In</button>
          </div>
        </form>
      ) : isForgotPassword ? (
        <form onSubmit={handleForgotPasswordSubmit}>
          <input className="form-control mb-3" placeholder="Email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required />
          <input className="form-control mb-3" placeholder="Favorite color (Security Answer)" value={forgotSecurityAnswer} onChange={(e) => setForgotSecurityAnswer(e.target.value)} required />
          <input type={showPassword ? "text" : "password"} className="form-control mb-3" placeholder="New Password" value={forgotNewPassword} onChange={(e) => setForgotNewPassword(e.target.value)} required />
          <input type={showPassword ? "text" : "password"} className="form-control mb-3" placeholder="Confirm Password" value={forgotConfirmPassword} onChange={(e) => setForgotConfirmPassword(e.target.value)} required />
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" checked={showPassword} onChange={() => setShowPassword(!showPassword)} id="toggleForgotPassword" />
            <label className="form-check-label" htmlFor="toggleForgotPassword">Show Password</label>
          </div>
          {forgotError && <div className="text-danger mb-3">{forgotError}</div>}
          <button type="submit" className="btn btn-primary w-100">Reset Password</button>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-link" onClick={toggleForgotPassword}>Back to Sign In</button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignInSubmit}>
          <input className="form-control mb-3" placeholder="Email or Mobile" value={signInIdentifier} onChange={(e) => setSignInIdentifier(e.target.value)} required />
          <input type={showPassword ? "text" : "password"} className="form-control mb-3" placeholder="Password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)} required />
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" checked={showPassword} onChange={() => setShowPassword(!showPassword)} id="toggleLoginPassword" />
            <label className="form-check-label" htmlFor="toggleLoginPassword">Show Password</label>
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="keepSignedIn" checked={keepSignedIn} onChange={(e) => setKeepSignedIn(e.target.checked)} />
            <label className="form-check-label" htmlFor="keepSignedIn">Keep me signed in</label>
          </div>
          {signInError && <div className="text-danger mb-3">{signInError}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="text-center mt-3">
            <button type="button" className="btn btn-link" onClick={toggleForgotPassword}>Forgot Password?</button>
            <button type="button" className="btn btn-link" onClick={toggleForm}>Create Account</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
