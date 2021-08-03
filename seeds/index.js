const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedApplications = require('./applicationData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();

  await seedApplications();

  process.exit(0);
};

seedAll();

// 
