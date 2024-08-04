import React, { useState, useEffect } from 'react';
import './TrainerDashboard.css';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Dummy data
const dummyTrainees = [
  { id: 1, name: 'John Doe', services: ['Personal Training', 'Group Fitness Classes'] },
  { id: 2, name: 'Jane Smith', services: ['Group Fitness Classes'] },
  { id: 3, name: 'Alice Johnson', services: ['Personal Training', 'Fitness Diet Planner'] },
  { id: 4, name: 'Bob Brown', services: ['Personal Training'] },
  { id: 5, name: 'Emily Davis', services: ['Group Fitness Classes', 'Fitness Diet Planner'] },
  { id: 6, name: 'Michael Wilson', services: ['Fitness Diet Planner'] },
  { id: 7, name: 'Sarah Lee', services: ['Group Fitness Classes'] },
  { id: 8, name: 'David Clark', services: ['Personal Training', 'Group Fitness Classes'] },
  { id: 9, name: 'Laura Adams', services: ['Personal Training'] },
  { id: 10, name: 'James Martin', services: ['Group Fitness Classes'] },
  { id: 11, name: 'Sophia White', services: ['Fitness Diet Planner'] },
  { id: 12, name: 'Daniel Lewis', services: ['Personal Training', 'Group Fitness Classes'] },
];

  const dummyProgress = {
    1: [
      { date: '2024-07-01', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-02', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-03', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-04', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-05', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-06', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
    ],
    2: [
      { date: '2024-07-01', detail: 'Yoga session', time: '60', duration: '60 minutes', caloriesBurned: 250 },
      { date: '2024-07-02', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 200 },
      { date: '2024-07-03', detail: 'Yoga session', time: '60', duration: '60 minutes', caloriesBurned: 250 },
      { date: '2024-07-04', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 400 },
      { date: '2024-07-05', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 350 },
      { date: '2024-07-06', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 300 },
  
    ],
    3: [
      { date: '2024-07-01', detail: 'Swimming: 30 minutes', time: '30', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-02', detail: 'Weight lifting: 40kg', time: '40', duration: '35 minutes', caloriesBurned: 250 },
    ],
    4: [
      { date: '2024-07-01', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-02', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
    ],
    5: [
      { date: '2024-07-01', detail: 'Yoga session', time: '60', duration: '60 minutes', caloriesBurned: 250 },
      { date: '2024-07-02', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 350 },
    ],
    6: [
      { date: '2024-07-01', detail: 'Swimming: 30 minutes', time: '30', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-02', detail: 'Weight lifting: 40kg', time: '40', duration: '35 minutes', caloriesBurned: 250 },
    ],
    7: [
      { date: '2024-07-01', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-02', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
    ],
    8: [
      { date: '2024-07-01', detail: 'Yoga session', time: '60', duration: '60 minutes', caloriesBurned: 250 },
      { date: '2024-07-02', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 350 },
    ],
    9: [
      { date: '2024-07-01', detail: 'Swimming: 30 minutes', time: '30', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-02', detail: 'Weight lifting: 40kg', time: '40', duration: '35 minutes', caloriesBurned: 250 },
    ],
    10: [
      { date: '2024-07-01', detail: 'Ran 5km', time: '90', duration: '45 minutes', caloriesBurned: 400 },
      { date: '2024-07-02', detail: 'Weight lifting: 50kg', time: '50', duration: '30 minutes', caloriesBurned: 300 },
    ],
    11: [
      { date: '2024-07-01', detail: 'Yoga session', time: '60', duration: '60 minutes', caloriesBurned: 250 },
      { date: '2024-07-02', detail: 'Cycling: 10km', time: '45', duration: '40 minutes', caloriesBurned: 350 },
    ],
    12: [
      { date: '2024-07-01', detail: 'Swimming: 30 minutes', time: '30', duration: '30 minutes', caloriesBurned: 300 },
      { date: '2024-07-02', detail: 'Weight lifting: 40kg', time: '40', duration: '35 minutes', caloriesBurned: 250 },
    ],
  };
  


const trainerEfficiencies = [
  { name: 'Trainer A', efficiency: 85 },
  { name: 'Trainer B', efficiency: 78 },
  { name: 'Trainer C', efficiency: 90 },
];

const services = [
  { name: 'Personal Training', description: 'One-on-one training sessions.', price: '$60/session' },
  { name: 'Group Fitness Classes', description: 'Energetic group classes including HIIT, yoga, and strength training.', price: '$15/class' },
  { name: 'Fitness Diet Planner', description: 'Customized meal plans for all fitness goals.', price: 'Varies' },
  
];

const classSchedules = [
  { day: 'Monday', time: '10:00 AM - 11:00 AM', type: 'HIIT' },
  { day: 'Tuesday', time: '6:00 PM - 7:00 PM', type: 'Yoga' },
  { day: 'Wednesday', time: '8:00 AM - 9:00 AM', type: 'Strength Training' },
  { day: 'Thursday', time: '5:00 PM - 6:00 PM', type: 'Cycling' },
  { day: 'Friday', time: '7:00 AM - 8:00 AM', type: 'Cardio' },
  { day: 'Saturday', time: '9:00 AM - 10:00 AM', type: 'Bootcamp' },
];

// Calculate the number of trainees using each service
const calculateServiceUsage = (trainees) => {
  const serviceUsage = {};

  trainees.forEach(trainee => {
    trainee.services.forEach(service => {
      serviceUsage[service] = (serviceUsage[service] || 0) + 1;
    });
  });

  return serviceUsage;
};

const serviceUsage = calculateServiceUsage(dummyTrainees);

// Component for displaying the list of trainees
const TraineeList = ({ trainees, selectTrainee }) => (
  <div className="trainee-list" >
    <h2>Trainees</h2>
    <ul>
      {trainees.map(trainee => (
        <li key={trainee.id} onClick={() => selectTrainee(trainee)}>
          {trainee.name}
        </li>
      ))}
    </ul>
  </div>
);

// Component for displaying and updating the selected trainee's progress
const TraineeProgress = ({ trainee }) => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    setProgress(dummyProgress[trainee.id] || []);
  }, [trainee.id]);

  const chartData = {
    labels: progress.map(entry => entry.date),
    datasets: [
      {
        label: 'Progress Details',
        data: progress.map(entry => entry.detail.length), // Example data
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="trainee-progress">
      <h2>Progress for {trainee.name}</h2>
      <ul>
        {progress.map((entry, index) => (
          <li key={index}>
            {entry.date}: {entry.detail}
          </li>
        ))}
      </ul>
      <Bar data={chartData} />
      <button onClick={() => alert('Update progress functionality here')}>Update Progress</button>
    </div>
  );
};

// Component for displaying services
const ServicesSection = () => {
  const serviceLabels = Object.keys(serviceUsage);
  const serviceData = serviceLabels.map(label => serviceUsage[label]);

  const chartData = {
    labels: serviceLabels,
    datasets: [
      {
        label: 'Number of Trainees',
        data: serviceData,
        backgroundColor: 'black',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><strong>Price:</strong> {service.price}</p>
            <button className="signup-button">Update</button>
          </div>
        ))}
      </div>
      <div className="service-usage-chart">
        <Bar data={chartData} />
      </div>
    </section>
  );
};

// Component for displaying class schedules
const ClassSchedulesSection = () => (
  <section className="class-schedules">
    <h2>Class Schedules</h2>
    <table>
      <thead>
        <tr>
          <th>Day</th>
          <th>Time</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {classSchedules.map((schedule, index) => (
          <tr key={index}>
            <td>{schedule.day}</td>
            <td>{schedule.time}</td>
            <td>{schedule.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

// Navbar component
const Navbar = () => (
  <nav className="nav">
    <h1  style={{color: 'White',textAlign:"center"}}>Trainer Dashboard</h1>
    <ul className="trainer-efficiency-list">
      {trainerEfficiencies.map((trainer, index) => (
        <li key={index}>
          {trainer.name}: {trainer.efficiency}%
        </li>
      ))}
    </ul>
  </nav>
);

// Main TrainerDashboard component
const TrainerDashboard = () => {
  const [trainees, setTrainees] = useState(dummyTrainees);
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  return (
    <div className="trainer-dashboard">
      <Navbar />
      <div className="dashboard-content">
        <TraineeList trainees={trainees} selectTrainee={setSelectedTrainee} />
        {selectedTrainee && <TraineeProgress trainee={selectedTrainee} />}
      </div>
      <ServicesSection />
      <ClassSchedulesSection />
    </div>
  );
};

export default TrainerDashboard;
