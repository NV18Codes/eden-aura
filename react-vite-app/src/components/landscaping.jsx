import React from 'react'

function landscaping() {
  const services = [
    {
      title: "Terrace Gardens",
      front: "Your Green Escape",
      back: "Transform your terrace into a luxurious green escape. Every sunrise feels closer to nature.",
    },
    {
      title: "Vertical Gardens",
      front: "Greenery That Grows Up",
      back: "Turn any wall into a lush living masterpiece. Let's grow together!",
    },
    {
      title: "Balcony Gardening",
      front: "Small Space, Big Dreams",
      back: "Even the smallest balcony can bloom. Style, sustainability, and serenity in one breath.",
    },
    {
      title: "Rooftop Gardens",
      front: "Your Elevated Oasis",
      back: "Create a serene rooftop retreat that brings you closer to nature above the city hustle.",
    },
    {
      title: "Lawn Making",
      front: "Lush Green Spaces",
      back: "Premium lawns crafted with care. Let nature welcome you home.",
    },
    {
      title: "Landscape Maintenance",
      front: "Care Beyond Beauty",
      back: "We maintain landscapes to thrive with beauty, health, and sustainability.",
    },
    {
      title: "Villa Landscaping",
      front: "Green Sanctuaries at Home",
      back: "Crafting bespoke landscapes that transform homes into nature-rich havens.",
    }
  ];
  return (
    <div className="landscaping-container">
    <style>{`
      .landscaping-container {
        padding: 3rem 1rem;
        max-width: 1200px;
        margin: 0 auto;
        font-family: sans-serif;
      }
      .main-heading {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 2rem;
        font-weight: bold;
        color:rgb(0, 0, 0);
      }
      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 2rem;
      }
      .flip-card {
        background-color: transparent;
        perspective: 1000px;
        height: 260px;
      }
      .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
      .flip-card:hover .flip-card-inner {
        transform: rotateY(180deg);
      }
      .flip-card-front, .flip-card-back {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 15px;
        padding: 1.5rem;
        box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        backface-visibility: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #e8f5e9;
        color:rgb(0, 0, 0);
      }
      .flip-card-back {
        transform: rotateY(180deg);
        background-color: #c8e6c9;
      }
      .flip-card-front h2 {
        margin-bottom: 0.5rem;
      }
    `}</style>

    <p className="main-heading">Landscaping is the art of turning spaces into stories that blend nature's beauty and life into one perfect scene. It's where greenery meets creativity, making every outdoor space a place to breathe, relax, and dream.</p>
    <div className="cards-grid">
      {services.map((service, idx) => (
        <div key={idx} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2>{service.title}</h2>
              <p>{service.front}</p>
            </div>
            <div className="flip-card-back">
              <p>{service.back}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default landscaping