import React from 'react';

function About() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end">
          {/* Image */}
          <div className="col-lg-3 col-md-5 wow fadeInUp" data-wow-delay="0.1s">
            <img className="img-fluid rounded" src='/img/about.jpg' alt="About Us Image" />
          </div>

          {/* Main About Text */}
          <div className="col-lg-6 col-md-7 wow fadeInUp" data-wow-delay="0.3s">
            <h1 className="text-success display-1 text-primary mb-0" >25</h1>
            <p className="text-success text-primary mb-4">Years of Great Experience</p>
            <h1 className="display-5 mb-4">Transforming Homes Into Green Sanctuaries</h1>
            <p className="mb-4">
              With over two decades of experience, we've been helping clients reimagine their outdoor spaces
              into beautiful, relaxing gardens. Our team combines creativity with practical expertise to
              deliver sustainable and stylish results that last.
            </p>
            <a className="btn btn-primary py-3 px-4" href="#">Explore More</a>
          </div>

          {/* Key Highlights */}
          <div className="col-lg-3 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-5">
              {/* Award Winning */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="text-success fa fa-award fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Award Winning</h4>
                  <span>
                    Recognized for our innovation and design excellence in landscaping and outdoor
                    living.
                  </span>
                </div>
              </div>

              {/* Dedicated Team */}
              <div className="col-12 col-sm-6 col-lg-12">
                <div className="border-start ps-4">
                  <i className="text-success fa fa-users fa-3x text-primary mb-3"></i>
                  <h4 className="mb-3">Dedicated Team</h4>
                  <span>
                    A skilled team of professionals who are passionate about turning your vision into
                    reality.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
