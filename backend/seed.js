const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

dotenv.config();

const sampleProjects = [
  {
    title: 'Personal Portfolio',
    description: 'A stylish portfolio website built using React and Tailwind CSS.',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    image: 'https://via.placeholder.com/300x200.png?text=Portfolio',
    liveLink: 'https://shreyaportfolio.com',
    githubLink: 'https://github.com/shreya/portfolio'
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API.',
    techStack: ['React', 'API', 'CSS'],
    image: 'https://via.placeholder.com/300x200.png?text=Weather+App',
    liveLink: 'https://weatherapp.com',
    githubLink: 'https://github.com/shreya/weather-app'
  },
  {
    title: 'Task Manager',
    description: 'A full-stack app to manage tasks with authentication.',
    techStack: ['MERN', 'JWT', 'MongoDB'],
    image: 'https://via.placeholder.com/300x200.png?text=Task+Manager',
    liveLink: 'https://taskmanager.com',
    githubLink: 'https://github.com/shreya/task-manager'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Project.deleteMany(); // clear old data if any
    await Project.insertMany(sampleProjects);

    console.log('✅ Sample projects inserted!');
    mongoose.connection.close();
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  }
};

seedDB();
