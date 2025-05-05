import React, { useState } from 'react';

function UserAuthModal() {
  const [activeForm, setActiveForm] = useState('signIn'); // 'signIn' or 'signUp'

  return (
    <div className="modal fade" id="userAuthModal" tabIndex="-1" aria-labelledby="userAuthModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userAuthModalLabel">
              {activeForm === 'signIn' ? 'Sign In' : 'Create Account'}
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {activeForm === 'signIn' && (
              <div id="loginFormContainer">
                <form id="signInForm">
                  <div className="mb-3">
                    <label htmlFor="signInEmailOrContact" className="form-label">Email or Contact Number</label>
                    <input type="text" className="form-control" id="signInEmailOrContact" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signInPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signInPassword" required />
                  </div>
                  <div id="signInError" className="text-danger mb-3" style={{ display: 'none' }}>
                    Invalid email or password.
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="mt-3 text-center">
                  <span>New user? <a href="#" onClick={() => setActiveForm('signUp')}>Create account</a></span>
                </div>
              </div>
            )}
            {activeForm === 'signUp' && (
              <div id="signUpFormContainer">
                <form id="signUpForm">
                  <div className="mb-3">
                    <label htmlFor="signUpUsername" className="form-label">Username</label>
                    <input type="text" className="form-control" id="signUpUsername" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signUpEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="signUpEmail" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="securityQuestion" className="form-label">Security Question</label>
                    <input type="text" className="form-control" id="securityQuestion" value="What is your favorite color?" readOnly />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="securityAnswer" className="form-label">Your Answer</label>
                    <input type="text" className="form-control" id="securityAnswer" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signUpPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="signUpPassword" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="signUpConfirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="signUpConfirmPassword" required />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Create Account</button>
                </form>
                <div className="mt-3 text-center">
                  <span>Already have an account? <a href="#" onClick={() => setActiveForm('signIn')}>Sign in</a></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuthModal;
