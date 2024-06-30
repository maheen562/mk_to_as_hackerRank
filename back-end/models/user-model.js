//This file consists of the creation of the User Schema 
//Written by: Maheen Abdul Khaliq Khan

const { ObjectId } = require('mongodb');
const db = require('../config/db');
//const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const { Schema } = mongoose;



const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "email can't be empty"],
        unique: true,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: function(){
            return this.googleRegister != true;
        }
    },
    uid: {
        type: String,
        required: function(){
            return this.googleRegister == true;
        }
    },
    googleRegister : {
        type: Boolean,
        required: [true,"mention google registration"]
    },
    userType : {
        type: String,
        enum: ['student','teacher']
    }
  
},{timestamps:true});



//used while signIn decrypt
userSchema.methods.comparePassword = async function (candidatePassword) {
    try {
          var isMatch = false;
            if(candidatePassword == this.password){
            isMatch = true;
        }
        return isMatch;
    } catch (error) {
        throw error;
    }
};

//compare UID for google signin
userSchema.methods.compareuid = async function (candidateuid) {
    try {
        var isMatch = false;
        if(candidateuid == this.uid){
            isMatch = true;
        }
        return isMatch;
    } catch (error) {
        throw error;
    }
};



const UserModel = db.model('user',userSchema);

module.exports = UserModel;