const { Application } = require('../models');

const applicationData = [
    {
        company_name: 'Google',
        role: 'Jr. Software Developer',
        job_url: 'google.com',
        submission_date: 'July 15, 2021',
        date_found: 'July 15, 2021',
        application_status: 'Application submitted',
        research_company: 1,
        follow_up_email: 0,
        user_id: 1
    },
    {
        company_name: 'Indeed',
        role: 'Jr. Software Developer',
        job_url: 'indeed.com',
        submission_date: 'July 15, 2021',
        date_found: 'July 15, 2021',
        application_status: 'Prep for phone interview',
        research_company: 1,
        follow_up_email: 0,
        user_id: 1
    },
];

const seedApplications = () => Application.bulkCreate(applicationData);

module.exports = seedApplications;