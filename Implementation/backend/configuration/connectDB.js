const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const initModels = require('../models/init-models');

dotenv.config();

const url = process.env.URL;
const sequelize = new Sequelize(url, {
  dialect: 'mysql'
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL successfully.");
    await sequelize.sync();
  } catch (error) {
    console.error('Connection to MySQL failed:', error);
  }
};

// Initialize Sequelize models
const models = initModels(sequelize);
/*
sequelize.sync({ force: true }).then(() => {
    console.log('Sequelize models synchronized successfully.');
  }).catch((error) => {
    console.error('Sequelize synchronization failed:', error);
  });
*/ // use this only to sync your tables to your code 
module.exports = { connectDB, sequelize, models };
