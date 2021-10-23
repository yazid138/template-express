const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_NAME || 'tes', process.env.DB_USERNAME || 'root', process.env.DB_PASSWORD || '', {
    dialect: process.env.DB_ENGINE || 'mysql',
    host: process.env.DB_HOST || 'localhost'
})

db.test = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = db;