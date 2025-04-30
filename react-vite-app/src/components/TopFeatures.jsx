import React from 'react';

function TopFeatures() {
  return (
    <div className="container-fluid top-feature py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {/* Feature 1 */}
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-white shadow d-flex align-items-center h-100 px-5 rounded-4" style={{ minHeight: '160px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light d-flex align-items-center justify-content-center" aria-hidden="true" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-times text-primary fs-3"></i>
                </div>
                <div className="ps-3">
                  <h4 className="fw-bold">No Hidden Costs</h4>
                  <span className="text-muted">What you see is what you get—transparent pricing with no surprise fees.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
            <div className="bg-white shadow d-flex align-items-center h-100 px-5 rounded-4" style={{ minHeight: '160px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light d-flex align-items-center justify-content-center" aria-hidden="true" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-users text-primary fs-3"></i>
                </div>
                <div className="ps-3">
                  <h4 className="fw-bold">Dedicated Team</h4>
                  <span className="text-muted">Work with passionate professionals committed to your project’s success.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
            <div className="bg-white shadow d-flex align-items-center h-100 px-5 rounded-4" style={{ minHeight: '160px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
              <div className="d-flex">
                <div className="flex-shrink-0 btn-lg-square rounded-circle bg-light d-flex align-items-center justify-content-center" aria-hidden="true" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-phone text-primary fs-3"></i>
                </div>
                <div className="ps-3">
                  <h4 className="fw-bold">Available 24/7</h4>
                  <span className="text-muted">Our support team is here for you around the clock, every day of the week.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .top-feature .bg-white:hover {
            transform: translateY(-10px);
            box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
}

export default TopFeatures;

