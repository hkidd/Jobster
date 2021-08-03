const { User } = require('../models');

const userData = [
    {
        first_name: 'Jane',
        last_name: 'Doe',
        email: 'me@me.com',
        password: 'password'
    }
];

const seedUsers = () => User.bulkcreate(userData);

module.exports = seedUsers;