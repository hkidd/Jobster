const { Test } = require('../models');

const testData = [
    {
        test_date: 'July 15, 2021',
        concepts: 'JavaScript',
        passed: 'Passed',
        study_for_test: 1,
        follow_up_email: 0,
        application_id: 1,
    },
];

const seedTests = () => Test.bulkCreate(testData);

module.exports = seedTests;