const { Test } = require('../models');

const testData = [
    {
        test_date: 'July 15, 2021',
        concepts: 'JavaScript',
        passed: true,
        application_id: 1,
    },
];

const seedTests = () => Test.bulkCreate(testData);

module.exports = seedTests;