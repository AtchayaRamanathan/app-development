// Dashboard.js
import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Example data for charts
  const weightData = {
    labels: ['July 1', 'July 7', 'July 14', 'July 21', 'July 28'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [70, 69.5, 69, 68.5, 68],
        borderColor: '#007bff',
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        fill: true
      }
    ]
  };

  const workoutData = {
    labels: ['Squats', 'Bench Press', 'Deadlift', 'Pull-ups'],
    datasets: [
      {
        label: 'Sets Completed',
        data: [4, 3, 3, 5],
        backgroundColor: '#28a745'
      }
    ]
  };

  return (
    <div className="dashboard">
      <section className="overview">
        <h2>Welcome, [User's Name]!</h2>
        <div className="summary">
          <p><strong>Current Weight:</strong> 70 kg</p>
          <p><strong>Total Workouts Completed:</strong> 45</p>
          <p><strong>Progress Towards Goal:</strong> 75%</p>
        </div>
      </section>

      <section className="workout-progress">
        <h3>Recent Workouts</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-07-25</td>
              <td>Squats</td>
              <td>4</td>
              <td>12</td>
              <td>100 kg</td>
            </tr>
            <tr>
              <td>2024-07-24</td>
              <td>Bench Press</td>
              <td>3</td>
              <td>10</td>
              <td>80 kg</td>
            </tr>
          </tbody>
        </table>
        <div className="charts">
          <div className="chart">
            <h4>Weight Tracking</h4>
            <Line data={weightData} />
          </div>
          <div className="chart">
            <h4>Workout Performance</h4>
            <Bar data={workoutData} />
          </div>
        </div>
      </section>

      <section className="diet-tracking">
        <h3>Diet Tracking</h3>
        <div className="daily-intake">
          <p><strong>Calories Consumed:</strong> 2200 kcal / 2000 kcal (Target)</p>
          <p><strong>Protein:</strong> 150 g / 160 g (Target)</p>
          <p><strong>Carbs:</strong> 250 g / 200 g (Target)</p>
          <p><strong>Fats:</strong> 70 g / 80 g (Target)</p>
        </div>
        <div className="recent-meals">
          <h4>Recent Meals</h4>
          <ul>
            <li>Breakfast: Oatmeal - 350 kcal</li>
            <li>Lunch: Chicken Salad - 500 kcal</li>
            <li>Dinner: Salmon with Veggies - 600 kcal</li>
          </ul>
        </div>
      </section>

      <section className="fitness-metrics">
        <h3>Fitness Metrics</h3>
        <div className="weight-tracking">
          <h4>Weight Tracking</h4>
          {/* Weight tracking graph already included in the workout progress section */}
        </div>
        <div className="body-measurements">
          <h4>Body Measurements</h4>
          <p><strong>Body Fat Percentage:</strong> 15%</p>
          <p><strong>Muscle Mass:</strong> 60 kg</p>
        </div>
        <div className="achievements">
          <h4>Achievements</h4>
          <ul>
            <li>Completed 30-Day Fitness Challenge</li>
            <li>Hit 100 kg Squat Personal Best</li>
          </ul>
        </div>
      </section>

      <section className="goal-setting">
        <h3>Goal Setting</h3>
        <p><strong>Current Goal:</strong> Lose 5 kg</p>
        <p><strong>Progress:</strong> 80%</p>
        <div className="upcoming-challenges">
          <h4>Upcoming Challenges</h4>
          <p>Join the 10K Steps Challenge starting next week!</p>
        </div>
      </section>

      <section className="notifications">
        <h3>Notifications</h3>
        <ul>
          <li>Next workout scheduled for tomorrow at 6 PM.</li>
          <li>Don’t forget to drink 2 liters of water today!</li>
        </ul>
      </section>

      <section className="profile-settings">
        <h3>Profile & Settings</h3>
        <p><a href="/profile">View Profile</a></p>
        <p><a href="/settings">Settings</a></p>
      </section>
    </div>
  );
};

export default Dashboard;
