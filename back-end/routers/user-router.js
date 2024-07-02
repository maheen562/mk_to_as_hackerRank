//This file consists of the routers for user login and registration
//Written by: Maheen Abdul Khaliq Khan
//Adaptation from: https://protocoderspoint.com/flutter-todo-app-with-nodejs-mongodb-at-backend/


const router = require("express").Router();
const UserController = require('../controllers/user-controller');

router.post("/registration",UserController.register);

router.post("/login", UserController.login);

// router.post("/googlelogin", UserController.googleLogin);


//router.post("googleSignin",UserController.googleRegistration)


module.exports = router;