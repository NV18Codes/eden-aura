import React from 'react';

function Carousel() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ height: '100vh', width: '100%' }}>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner" style={{ height: '100vh' }}>
        <div className="carousel-item active" style={{ height: '100vh', backgroundImage: 'url(/img/carousel-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-1">Welcome to EdenAura</h1>
            <p className="lead">Experience the beauty of nature with our expert landscaping services.</p>
          </div>
        </div>
        <div className="carousel-item" style={{ height: '100vh', backgroundImage: 'url(/img/carousel-2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-1">Creative Workshops</h1>
            <p className="lead">Join our workshops to learn and create amazing projects towards nature.</p>
          </div>
        </div>
        <div className="carousel-item" style={{ height: '100vh', backgroundImage: 'url(/img/carousel-3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h1 className="display-1">Unique Gifting Ideas</h1>
            <p className="lead">Discover perfect gifts for your loved ones.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
