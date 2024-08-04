import React, { useState } from 'react';
import './Workout.css';

const Workout = () => {
  const [activeRoutine, setActiveRoutine] = useState(null);

  const handleViewRoutine = (routine) => {
    setActiveRoutine(routine);
  };

  return (
    <div className="workout">
      <h1><center>Workout Routines</center></h1>

      <section className="intro">
        <p>Welcome to our workout routines page! We offer a variety of workouts to help you reach your fitness goals. Whether you're looking to build muscle, improve cardiovascular health, increase flexibility, or train for a specific sport, we have something for everyone. Explore our comprehensive routines designed by expert trainers to suit all fitness levels. Each workout is crafted to maximize results and keep you motivated along your fitness journey..</p>
      </section>

      <div className="workout-grid">
        {/* Strength Training */}
        <section className="strength-training">
          <h2>Strength Training</h2>
          <div className="routine">
            <h3>Upper Body Strength</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Push-ups</li>
              <li>Dumbbell Rows</li>
              <li>Shoulder Press</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('Upper Body Strength')}>View Routine</button>
            {activeRoutine === 'Upper Body Strength' && (
              <div className="routine-details">
                <p>Detailed instructions for Upper Body Strength routine...</p>
              </div>
            )}
          </div>
          <div className="routine">
            <h3>Lower Body Strength</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Squats</li>
              <li>Lunges</li>
              <li>Leg Press</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('Lower Body Strength')}>View Routine</button>
            {activeRoutine === 'Lower Body Strength' && (
              <div className="routine-details">
                <p>Detailed instructions for Lower Body Strength routine...</p>
              </div>
            )}
          </div>
        </section>

        {/* Cardio Workouts */}
        <section className="cardio">
          <h2>Cardio Workouts</h2>
          <div className="routine">
            <h3>Running</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Interval Running</li>
              <li>Long Distance Runs</li>
              <li>Hill Sprints</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('Running')}>View Routine</button>
            {activeRoutine === 'Running' && (
              <div className="routine-details">
                <p>Detailed instructions for Running routine...</p>
              </div>
            )}
          </div>
          <div className="routine">
            <h3>High-Intensity Interval Training (HIIT)</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Burpees</li>
              <li>Jumping Jacks</li>
              <li>Mountain Climbers</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('HIIT')}>View Routine</button>
            {activeRoutine === 'HIIT' && (
              <div className="routine-details">
                <p>Detailed instructions for HIIT routine...</p>
              </div>
            )}
          </div>
        </section>

        {/* Flexibility and Mobility */}
        <section className="flexibility">
          <h2>Flexibility and Mobility</h2>
          <div className="routine">
            <h3>Static Stretching</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Hamstring Stretch</li>
              <li>Quad Stretch</li>
              <li>Shoulder Stretch</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('Static Stretching')}>View Routine</button>
            {activeRoutine === 'Static Stretching' && (
              <div className="routine-details">
                <p>Detailed instructions for Static Stretching routine...</p>
              </div>
            )}
          </div>
          <div className="routine">
            <h3>Yoga</h3>
            <p><strong>Includes:</strong></p>
            <ul>
              <li>Downward Dog</li>
              <li>Warrior II</li>
              <li>Child’s Pose</li>
            </ul>
            <button className="view-button" onClick={() => handleViewRoutine('Yoga')}>View Routine</button>
            {activeRoutine === 'Yoga' && (
              <div className="routine-details">
                <p>Detailed instructions for Yoga routine...</p>
              </div>
            )}
          </div>
        </section>

        {/* Sports-Specific Training */}
        <section className="sports-training">
          <h2>Sports-Specific Training</h2>
          <div className="sports-grid">
            <div className="routine">
              <h3>Basketball</h3>
              <p><strong>Includes:</strong></p>
              <ul>
                <li>Dribbling Drills</li>
                <li>Shooting Practice</li>
                <li>Defense Drills</li>
              </ul>
              <button className="view-button" onClick={() => handleViewRoutine('Basketball')}>View Routine</button>
              {activeRoutine === 'Basketball' && (
                <div className="routine-details">
                  <p>Detailed instructions for Basketball routine...</p>
                </div>
              )}
            </div>
            <div className="routine">
              <h3>Soccer</h3>
              <p><strong>Includes:</strong></p>
              <ul>
                <li>Dribbling Exercises</li>
                <li>Passing Drills</li>
                <li>Shooting Drills</li>
              </ul>
              <button className="view-button" onClick={() => handleViewRoutine('Soccer')}>View Routine</button>
              {activeRoutine === 'Soccer' && (
                <div className="routine-details">
                  <p>Detailed instructions for Soccer routine...</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Workout;
