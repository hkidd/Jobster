// Outlines all of the table relationships


const User = require('./User');
const Application = require('./Application');
const Interview = require('./Interview');
const Test = require('./Test');

User.hasMany(Application, {
    foreignKey: 'user_id',
});

Application.belongsTo(User, {
    foreignKey: 'user_id',
});

Application.hasMany(Interview, {
    foreignKey: 'application_id',
});

Interview.belongsTo(Application, {
    foreignKey: 'application_id',
});

Application.hasOne(Test, {
    foreignKey: 'application_id',
});

Test.belongsTo(Application, {
    foreignKey: 'application_id',
});

module.exports = {User, Application, Interview, Test};