import React from 'react';

function Features() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <p className="fs-5 fw-bold text-primary">Why Choosing Us!</p>
            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <a className="btn btn-primary py-3 px-4" href="#">Explore More</a>
          </div>
          <div className="col-lg-6">
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <div className="row g-4">
                  <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                    <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                      <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                        <i className="fa fa-check fa-3x text-primary"></i>
                      </div>
                      <h4 className="mb-0">100% Satisfaction</h4>
                    </div>
                  </div>
                  <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                    <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                      <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                        <i className="fa fa-users fa-3x text-primary"></i>
                      </div>
                      <h4 className="mb-0">Dedicated Team</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                <div className="text-center rounded py-5 px-4" style={{ boxShadow: '0 0 45px rgba(0,0,0,.08)' }}>
                  <div className="btn-square bg-light rounded-circle mx-auto mb-4" style={{ width: '90px', height: '90px' }}>
                    <i className="fa fa-tools fa-3x text-primary"></i>
                  </div>
                  <h4 className="mb-0">Modern Equipment</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
