const sequelize = require('../config/connection');
const seedUsers = require('./userData.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();

  await seedApplications();

  process.exit(0);
};

seedAll();
