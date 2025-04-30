import React, { useState } from 'react';

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Landscaping',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-3.png',
      image: '/img/service-1.jpg',
    },
    {
      title: 'Pruning plants',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-6.png',
      image: '/img/service-2.jpg',
    },
    {
      title: 'Irrigation & Drainage',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-5.png',
      image: '/img/service-3.jpg',
    },
    {
      title: 'Garden Maintenance',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-4.png',
      image: '/img/service-4.jpg',
    },
    {
      title: 'Green Technology',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-8.png',
      image: '/img/service-5.jpg',
    },
    {
      title: 'Urban Gardening',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      icon: '/img/icon/icon-2.png',
      image: '/img/service-6.jpg',
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
          <p className="fs-5 fw-bold text-primary">Our Services</p>
          <h1 className="display-5 mb-5">Services That We Offer For You</h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${0.1 + index * 0.2}s`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="service-item rounded d-flex h-100 position-relative overflow-hidden shadow-sm"
                style={{
                  backgroundColor: hoveredIndex === index ? '#198754' : 'white',
                  color: hoveredIndex === index ? 'white' : '#212529',
                  transition: 'background-color 0.3s ease, color 0.3s ease, transform 0.3s ease',
                  transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                  cursor: 'pointer',
                }}
              >
                <div className="service-img rounded position-relative" style={{ flex: '0 0 150px', overflow: 'hidden' }}>
                  <img
                    className="img-fluid position-absolute top-0 start-0 w-100 h-100"
                    src={service.image}
                    alt={service.title}
                    style={{
                      objectFit: 'cover',
                      opacity: hoveredIndex === index ? 0.7 : 0,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0,
                    }}
                  />
                  <img
                    className="img-fluid position-relative"
                    src={service.icon}
                    alt={`${service.title} icon`}
                    style={{
                      width: '90px',
                      height: '90px',
                      margin: '1rem',
                      zIndex: 1,
                      filter: hoveredIndex === index ? 'brightness(0) invert(1)' : 'none',
                      transition: 'filter 0.3s ease',
                    }}
                  />
                </div>
                <div className="service-text rounded p-5" style={{ flex: 1, zIndex: 2 }}>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.description}</p>
                  <a
                    className="btn btn-sm btn-light"
                    href="#"
                    style={{
                      color: hoveredIndex === index ? '#198754' : '#000',
                      fontWeight: '600',
                      textDecoration: 'none',
                    }}
                  >
                    <i className="fa fa-plus text-success me-2"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
