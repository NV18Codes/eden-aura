import React from 'react';

function UserAuthModal() {
  return (
    <div className="modal fade" id="userAuthModal" tabIndex="-1" aria-labelledby="userAuthModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="userAuthModalLabel">Sign In</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
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
                <span>New user? <a href="#" id="showSignUpForm">Create account</a></span>
              </div>
            </div>
            <div id="signUpFormContainer" style={{ display: 'none' }}>
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
                <span>Already have an account? <a href="#" id="showSignInForm">Sign in</a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAuthModal;
