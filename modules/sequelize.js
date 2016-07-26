/**
 * Created by Sajid on 7/19/2016.
 */
var Sequelize = require('sequelize');
var sequel = new Sequelize('zap', 'sajid', '123', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 20,
        min: 0,
        idle: 10000
    },
});
sequel
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    })
    .catch(function (err) {
        console.log('Unable to connect to the database:', err);
    });

module.exports=sequel;