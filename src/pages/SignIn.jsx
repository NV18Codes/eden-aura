import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInIdentifier, setSignInIdentifier] = useState(''); // mobile or email
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpAddress, setSignUpAddress] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const [signUpError, setSignUpError] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSignInError('');
    setSignUpError('');
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setSignInError('');
    if (!signInIdentifier || !signInPassword) {
      setSignInError('Please enter email/mobile and password');
      return;
    }
    try {
      const { data } = await axios.post('/api/v1/auth/login', {
        identifier: signInIdentifier,
        password: signInPassword,
      });
      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        toast.success('Signed in successfully!');
        setSignInIdentifier('');
        setSignInPassword('');
        // Additional logic to allow checkout can be added here
      } else {
        setSignInError(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setSignInError(error.response?.data?.message || 'Login failed');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setSignUpError('');
    if (
      !signUpName ||
      !signUpEmail ||
      !signUpMobile ||
      !signUpAddress ||
      !signUpPassword ||
      signUpPassword !== signUpConfirmPassword
    ) {
      setSignUpError('Please fill all fields correctly and ensure passwords match.');
      return;
    }
    try {
      const { data } = await axios.post('/api/v1/auth/register', {
        name: signUpName,
        email: signUpEmail,
        mobile: signUpMobile,
        address: signUpAddress,
        password: signUpPassword,
      });
      if (data.success) {
        toast.success('Account created successfully!');
        toggleForm();
        setSignUpName('');
        setSignUpEmail('');
        setSignUpMobile('');
        setSignUpAddress('');
        setSignUpPassword('');
        setSignUpConfirmPassword('');
      } else {
        setSignUpError(data.message || 'Registration failed');
      }
    } catch (error) {
      setSignUpError(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
      {!isSignUp ? (
        <form onSubmit={handleSignInSubmit}>
          <div className="mb-3">
            <label htmlFor="signInIdentifier" className="form-label">Email or Mobile Number</label>
            <input
              type="text"
              className="form-control"
              id="signInIdentifier"
              placeholder="Enter email or mobile number"
              value={signInIdentifier}
              onChange={(e) => setSignInIdentifier(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signInPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="signInPassword"
              value={signInPassword}
              onChange={(e) => setSignInPassword(e.target.value)}
              required
            />
          </div>
          {signInError && <div className="text-danger mb-3">{signInError}</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="mt-3 text-center">
            <span>New user? <button type="button" className="btn btn-link p-0" onClick={toggleForm}>Create account</button></span>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignUpSubmit}>
          <div className="mb-3">
            <label htmlFor="signUpName" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="signUpName"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpEmail" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="signUpEmail"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpMobile" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="signUpMobile"
              pattern="[0-9]{10}"
              maxLength="10"
              value={signUpMobile}
              onChange={(e) => setSignUpMobile(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpAddress" className="form-label">Address</label>
            <textarea
              className="form-control"
              id="signUpAddress"
              value={signUpAddress}
              onChange={(e) => setSignUpAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpPassword" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="signUpPassword"
              value={signUpPassword}
              onChange={(e) => setSignUpPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="signUpConfirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="signUpConfirmPassword"
              value={signUpConfirmPassword}
              onChange={(e) => setSignUpConfirmPassword(e.target.value)}
              required
            />
          </div>
          {signUpError && <div className="text-danger mb-3">{signUpError}</div>}
          <button type="submit" className="btn btn-primary w-100">Create Account</button>
          <div className="mt-3 text-center">
            <span>Already have an account? <button type="button" className="btn btn-link p-0" onClick={toggleForm}>Sign in</button></span>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
