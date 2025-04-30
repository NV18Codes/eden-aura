import React from 'react';
import Carousel from '../components/Carousel';
import TopFeatures from '../components/TopFeatures';
import About from '../components/About';
import Facts from '../components/Facts';
import Features from '../components/Features';
import Services from '../components/Services';
import QuoteForm from '../components/QuoteForm';
import Team from '../components/Team';
import Testimonial from '../components/Testimonial';

function Home() {
  return (
    <div>
      <div>
        <Carousel />
      </div>
      <TopFeatures />
      <About />
      <Facts />
      <Features />
      <Services />
      <QuoteForm />
      <Team />
      <Testimonial />
      {/* Other sections to be added here later */}
    </div>
  );
}

export default Home;
