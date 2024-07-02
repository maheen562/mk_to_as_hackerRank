//This file consists of the controllers written for User account
//Written by: Maheen Abdul Khaliq Khan
//Adaptation from: https://protocoderspoint.com/flutter-todo-app-with-nodejs-mongodb-at-backend/

const UserServices = require('../services/user-service');

//This export registers a user
exports.register = async (req, res, next) => {
    try {
        console.log(req.body)
        const { email,firstName,lastName,password,uid,googleRegister,userType} = req.body;
        const successRes = await UserServices.registerUser(email,firstName,lastName,password,uid,googleRegister,userType);
        console.log(email)
        
        let user = await UserServices.checkUser(email);

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await UserServices.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "User generated succussfully, sendData", token: token });


    } catch {
       res.status(500).json("User registration unsuccessful")

    }
}

exports.login = async (req, res, next) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: 'Parameters are not correct' });

        }
        let user = await UserServices.checkUser(email);
        if (!user) {
            res.status(400).json({ message: 'User does not exist.' });

        }
        let googlelogin = await UserServices.checkGoogleLogin(email);

        const isPasswordCorrect = await user.comparePassword(password);

        if (isPasswordCorrect === false) {
            res.status(400).json({ message: 'Username or password does not match' });
        }

        // Creating Token

        let tokenData;
        tokenData = { _id: user._id, email: user.email };
    

        const token = await UserServices.generateAccessToken(tokenData,"secret","1h")

        res.status(200).json({ status: true, success: "sendData", token: token });
    } catch(error) {
        res.status(500).json("User login unsuccessful")

    }

}

