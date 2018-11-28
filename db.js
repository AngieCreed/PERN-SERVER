require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/chemAPI`, {
    dialect: 'postgres',
});

// const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeUriComponent(process.enc.PASS)}`@localhost/pies, {
//     dialect: 'postgres',
// })

sequelize.authenticate().then(
    function() {
        console.log('Connected to chemAPI postgres database');
    },
    function(err) {
        console.log(err);
    }
)

module.exports = sequelize;