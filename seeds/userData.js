const { User } = require('../models');

const userData = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'me@me.com',
        password: 'password123'
    },
    {
        first_name: 'John',
        last_name: 'Doe',
        email: 'me2@me.com',
        password: 'password123'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;