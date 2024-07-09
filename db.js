const mongoose = require('mongoose')
//DEFINE MONGODB URL
// const  mongoURL = 'mongodb://localhost:27017/hosts'
// const mongoURL = 'mongodb+srv://vermapranav12345:VermaPranav123@cluster0.waeyrna.mongodb.net/';
require('dotenv').config();
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL;
//Set up mongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//Get the default connection
//Mongoose maintains a default connection obj rep the mongoDB connection
const db = mongoose.connection; 

//Define the event  listeners for db connection
db.on('connected', () =>{
    console.log("Connected to MongoDB server");
})
db.on('error' ,(err) =>{
    console.log('MongoDB connection error:',err);
})
db.on('disconnected',()=>{
    console.log('MongoDB Disconnected');
})
module.exports = db;