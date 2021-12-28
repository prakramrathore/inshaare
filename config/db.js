require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {
    // Database connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected');
    // }).catch(err => {
    //     console.log('Connection failed');
    // });
    const connection = mongoose.connection;
    connection.on("error", (err) => console.log(`Connection error ${err}`));
    connection.once("open", () => console.log("Connected to DB!"));
}

// mIAY0a6u1ByJsWWZ

module.exports = connectDB;