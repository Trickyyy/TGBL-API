const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db;
