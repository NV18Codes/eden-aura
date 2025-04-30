import React, { useState } from 'react';

function SignIn() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signInMobile, setSignInMobile] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpMobile, setSignUpMobile] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('');
  const [signInError, setSignInError] = useState(false);
  const [signUpError, setSignUpError] = useState('');

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
    setSignInError(false);
    setSignUpError('');
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (signInMobile && signInPassword) {
      // For demo, assume success
      localStorage.setItem('isLoggedIn', 'true');
      alert('Signed in successfully!');
      setSignInMobile('');
      setSignInPassword('');
    } else {
      setSignInError(true);
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    if (
      signUpUsername &&
      signUpEmail &&
      signUpMobile &&
      signUpPassword &&
      signUpPassword === signUpConfirmPassword
    ) {
      // For demo, assume success
      alert('Account created successfully!');
      toggleForm();
      setSignUpUsername('');
      setSignUpEmail('');
      setSignUpMobile('');
      setSignUpPassword('');
      setSignUpConfirmPassword('');
    } else {
      setSignUpError('Please fill all fields correctly and ensure passwords match.');
    }
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">{isSignUp ? 'Create Account' : 'Sign In'}</h1>
      {!isSignUp ? (
        <form onSubmit={handleSignInSubmit}>
          <div className="mb-3">
            <label htmlFor="signInMobile" className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              id="signInMobile"
              pattern="[0-9]{10}"
              maxLength="10"
              placeholder="e.g. 9876543210"
              value={signInMobile}
              onChange={(e) => setSignInMobile(e.target.value)}
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
          {signInError && <div className="text-danger mb-3">Invalid mobile number or password.</div>}
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <div className="mt-3 text-center">
            <span>New user? <button type="button" className="btn btn-link p-0" onClick={toggleForm}>Create account</button></span>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignUpSubmit}>
          <div className="mb-3">
            <label htmlFor="signUpUsername" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="signUpUsername"
              value={signUpUsername}
              onChange={(e) => setSignUpUsername(e.target.value)}
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
