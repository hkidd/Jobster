const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedApplications = require('./applicationData');
const seedTests = require('./testData');
const seedInterviews = require('./interviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();

  await seedApplications();
  
  await seedTests();

  await seedInterviews();

  process.exit(0);
};

seedAll();
