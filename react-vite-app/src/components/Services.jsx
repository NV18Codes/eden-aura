import React from 'react';

function Services() {
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
    <>
      <style>{`
        .service-item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .service-img {
          animation: fadeUp 1s ease forwards;
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }
        .service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }
        .service-item:hover .service-img img {
          transform: translateY(-20px);
        }
        .service-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(25, 135, 84, 0.85);
          color: white;
          opacity: 0;
          visibility: hidden;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }
        .service-item:hover .service-text {
          opacity: 1;
          visibility: visible;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '500px' }}>
            <p className="text-success fs-5 fw-bold text-primary">Our Services</p>
            <h1 className="display-5 mb-5">Services That We Offer For You</h1>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 + index * 0.2}s`}
              >
                <div className="service-item rounded shadow-sm">
                  <div className="service-img rounded">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="service-text rounded">
                    <h4 className="mb-3">{service.title}</h4>
                    <p className="mb-4">{service.description}</p>
                    <a
                      className="text-success btn btn-sm btn-light"
                      href="#"
                      style={{
                        color: '#fff',
                        fontWeight: '600',
                        textDecoration: 'none',
                      }}
                    >
                      <i className="text-success fa fa-plus me-2"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
