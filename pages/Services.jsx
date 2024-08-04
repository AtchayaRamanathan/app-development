import React from 'react';
import './Services.css'; // Ensure you have corresponding CSS for styling

const Services = () => {
  return (
    <div className="services">
      <h1><center>Our Services</center></h1>

      <section className="intro">
        <p>Welcome to our services page! We offer a range of fitness solutions tailored to meet your individual goals. Whether you're looking to build muscle, lose weight, or simply stay fit, we have the perfect plan for you. Explore our diverse services designed to cater to all fitness levels and preferences..</p>
      </section>

      <div className="services-grid">
        <section className="price-packages">
          <h2>Price Packages</h2>
          <div className="package">
            <h3>Basic Plan</h3>
            <p><strong>Price:</strong> $29/month</p>
            <p>Includes:</p>
            <ul>
              <li>Access to basic workout routines</li>
              <li>Monthly progress check-ins</li>
              <li>Standard customer support</li>
            </ul>
            <button className="signup-button">Pay Now</button>
          </div>
          <div className="package">
            <h3>Premium Plan</h3>
            <p><strong>Price:</strong> $49/month</p>
            <p>Includes:</p>
            <ul>
              <li>All features of Basic Plan</li>
              <li>Personalized workout plans</li>
              <li>Weekly progress reports</li>
              <li>Priority customer support</li>
            </ul>
            <button className="signup-button">Pay Now</button>
          </div>
          <div className="package">
            <h3>Ultimate Plan</h3>
            <p><strong>Price:</strong> $99/month</p>
            <p>Includes:</p>
            <ul>
              <li>All features of Premium Plan</li>
              <li>One-on-one training sessions</li>
              <li>Custom diet and nutrition plan</li>
              <li>24/7 customer support</li>
            </ul>
            <button className="signup-button">Pay Now</button>
          </div>
        </section>

        <section className="special-offers">
          <h2>Special Offers</h2>
          <div className="offer">
            <h3>Summer Fitness Bootcamp</h3>
            <p><strong>Offer:</strong> Get 20% off on the Summer Fitness Bootcamp!</p>
            <p>Join our 6-week intensive program designed to help you achieve your fitness goals. Includes daily workouts, meal plans, and group support.</p>
            <button className="signup-button">Join Now</button>
          </div>
          <div className="offer">
            <h3>Refer a Friend</h3>
            <p><strong>Offer:</strong> Refer a friend and get a free month!</p>
            <p>Share the fitness journey with your friends and enjoy a free month of our Premium Plan when they sign up.</p>
            <button className="signup-button">Refer Now</button>
          </div>
        </section>

        <section className="special-training">
          <h2>Special Training Offers</h2>
          <div className="training">
            <h3>Personal Training Sessions</h3>
            <p><strong>Price:</strong> $60/session</p>
            <p>Work one-on-one with our expert trainers to create a custom workout plan and achieve your fitness goals faster.</p>
            <button className="signup-button">Book a Session</button>
          </div>
          <div className="training">
            <h3>Group Fitness Classes</h3>
            <p><strong>Price:</strong> $15/class</p>
            <p>Join our energetic group classes including HIIT, yoga, and strength training. Perfect for motivation and social interaction.</p>
            <button className="signup-button">Join a Class</button>
          </div>
        </section>

        <section className="fitness-diet-planner">
          <h2>Fitness Diet Planner</h2>
          <p>Our fitness diet planner helps you stay on track with your nutrition goals. Whether you're aiming to lose weight, build muscle, or just maintain a healthy lifestyle, our diet planner provides customized meal plans that fit your budget.</p>
          <div className="diet-plans">
            <div className="plan">
              <h3>Basic Diet Plan</h3>
              <p><strong>Price:</strong> $19/month</p>
              <p>Includes:</p>
              <ul>
                <li>Basic meal plan</li>
                <li>Weekly nutrition tips</li>
                <li>Access to recipe database</li>
              </ul>
              <button className="signup-button">Subscribe</button>
            </div>
            <div className="plan">
              <h3>Advanced Diet Plan</h3>
              <p><strong>Price:</strong> $39/month</p>
              <p>Includes:</p>
              <ul>
                <li>Personalized meal plan</li>
                <li>Weekly diet consultations</li>
                <li>Custom grocery lists</li>
              </ul>
              <button className="signup-button">Subscribe</button>
            </div>
            <div className="plan">
              <h3>Vegan Diet Plan</h3>
              <p><strong>Price:</strong> $29/month</p>
              <p>Includes:</p>
              <ul>
                <li>Plant-based meal plan</li>
                <li>Weekly vegan nutrition tips</li>
                <li>Vegan recipe database</li>
              </ul>
              <button className="signup-button">Subscribe</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
