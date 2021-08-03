const { Interview } = require('../models');

const interviewData = [
    {
        interview_number: 1,
        interview_date: 'July 15, 2021',
        thank_you_note_sent: 'August 1, 2021',
        follow_up_email: 'August 1, 2021',
        application_id: 1,
    },
];

const seedInterviews = () => Interview.bulkCreate(interviewData);

module.exports = seedInterviews;
