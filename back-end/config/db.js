//This is the db.js file 
//Writen by: Maheen Abdul Khaliq Khan

//Adaptation from: https://protocoderspoint.com/flutter-todo-app-with-nodejs-mongodb-at-backend/


const mongoose = require('mongoose');

/*Connec to mongoDB */

const connectionURL = "mongodb+srv://maheenkhan193:1fl9aHHOyNDla1XU@cluster0.sfjrdxd.mongodb.net/?appName=Cluster0"

connection = mongoose.connect(connectionURL);

const db = mongoose.connection;

db.on('open',()=>{
  console.log("MongoDB Connnected");
}).on(console.error,()=>{
  console.log("MongoDB connection failed");
})


module.exports = db;