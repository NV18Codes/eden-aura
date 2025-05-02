import React, { useState } from 'react';

const testimonials = [
  {
    img: '/img/testimonial-1.jpg',
    text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
    name: 'Client Name',
    profession: 'Profession',
  },
  {
    img: '/img/testimonial-2.jpg',
    text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.',
    name: 'Client Name',
    profession: 'Profession',
  },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { img, text, name, profession } = testimonials[currentIndex];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <p className="text-success fs-5 fw-bold text-primary">Testimonial</p>
            <h1 className="display-5 mb-5">What Our Clients Say About Us!</h1>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
              eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo.
            </p>
            <a className="btn btn-primary py-3 px-4" href="#">See More</a>
          </div>
          <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
            <div className="testimonial-carousel">
              <div className="testimonial-item text-center">
                <img className="img-fluid rounded mb-3" src={img} alt="" />
                <p className="fs-5">{text}</p>
                <h4>{name}</h4>
                <span>{profession}</span>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-outline-primary me-2" onClick={prevTestimonial}>
                  Previous
                </button>
                <button className="btn btn-outline-primary" onClick={nextTestimonial}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
