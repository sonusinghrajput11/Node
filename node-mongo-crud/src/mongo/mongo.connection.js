const mongoose = require('mongoose');

const dev_db_url = 'mongodb://127.0.0.1:27017/product';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connection;
dbConnection.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = dbConnection;