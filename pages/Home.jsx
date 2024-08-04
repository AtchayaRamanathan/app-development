import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [slideDirection, setSlideDirection] = useState('left');
  const [scrollIndex, setScrollIndex] = useState(0);

  const features = [
    {
      title: 'Personalized Workout Plans',
      description: 'Get tailored workout plans based on your goals, fitness level, and available equipment.',
      icon: '🏋️',
      background: 'https://via.placeholder.com/800x400?text=Personalized+Workout+Plans'
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your workouts, track your weight and body metrics, and visualize your progress with interactive charts.',
      icon: '📈',
      background: 'https://via.placeholder.com/800x400?text=Track+Your+Progress'
    },
    {
      title: 'Nutrition Integration',
      description: 'Log your meals and track your calorie and macronutrient intake to complement your workout routine.',
      icon: '🍎',
      background: 'https://via.placeholder.com/800x400?text=Nutrition+Integration'
    },
    {
      title: 'Community Support',
      description: 'Join our community to connect with other fitness enthusiasts and share your progress.',
      icon: '🌐',
      background: 'https://via.placeholder.com/800x400?text=Community+Support'
    },
    {
      title: 'Expert Guidance',
      description: 'Receive guidance from fitness experts to optimize your workout and nutrition plans.',
      icon: '🧑‍🏫',
      background: 'https://via.placeholder.com/800x400?text=Expert+Guidance'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Plan your workouts around your schedule with our flexible workout plans.',
      icon: '📅',
      background: 'https://via.placeholder.com/800x400?text=Flexible+Scheduling'
    },
    {
      title: 'Progressive Overload',
      description: 'Increase your strength and muscle mass with our progressive overload programs.',
      icon: '🏋️‍♂️',
      background: 'https://via.placeholder.com/800x400?text=Progressive+Overload'
    },
    {
      title: 'Recovery and Wellness',
      description: 'Ensure your body recovers properly with our recovery and wellness tips.',
      icon: '💆‍♂️',
      background: 'https://via.placeholder.com/800x400?text=Recovery+and+Wellness'
    }
  ];

  const openSlideOver = (feature, direction) => {
    setSlideDirection(direction);
    setSelectedFeature(feature);
  };

  const closeSlideOver = () => {
    setSelectedFeature(null);
  };

  const handlePrev = () => {
    setScrollIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setScrollIndex(prevIndex => Math.min(prevIndex + 1, features.length - 1));
  };

  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Gym Trainer & Progress Tracker</h2>
        <p>Achieve your fitness goals with personalized workout plans, progress tracking, and expert guidance.</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section className="features">
        <h2 className="features-heading">Explore Our Features</h2>
        <div className="feature-cards-container">
          <button className="arrow prev-arrow" onClick={handlePrev}>◀</button>
          <div className="feature-cards-wrapper">
            <div className="feature-cards" style={{ transform: `translateX(-${scrollIndex * 100}%)` }}>
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-card-bg" style={{ backgroundImage: `url(${feature.background})` }}></div>
                  <div className="feature-content">
                    <span className="feature-icon">{feature.icon}</span>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                    <button className="feature-button" onClick={() => openSlideOver(feature, index % 2 === 0 ? 'left' : 'right')}>Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="arrow next-arrow" onClick={handleNext}>▶</button>
        </div>
      </section>
      <section className="cta">
        <h2>Join the Community</h2>
        <p>Connect with fitness enthusiasts, share your achievements, and stay motivated.</p>
        <button className="cta-button">Join Now</button>
      </section>

      {selectedFeature && (
        <div className={`slide-over ${slideDirection} show`}>
          <div className="slide-over-content">
            <button className="close-button" onClick={closeSlideOver}>X</button>
            <h3>{selectedFeature.title}</h3>
            <p>{selectedFeature.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
