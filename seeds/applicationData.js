const { Application } = require('../models');

const applicationData = [
    {
        company_name: 'Google',
        role: 'Jr. Software Developer',
        job_url: 'google.com',
        submission_date: '7/15/2021',
        date_found: '7/14/2021',
        user_id: 1
    }
];

const seedApplications = () => Painting.bulkCreate(applicationData);

module.exports = seedApplications;