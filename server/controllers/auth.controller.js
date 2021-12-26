const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const authController = {
    login: (req, res) => { //localhost:3000/auth/login
        const { username, password } = req.body;
        //check if username and password are correct from database

        userModel.findOne({ username,password }, (err, user) => {
            if (err) {
                res.status(401).json({ message: 'Invalid username or password' });
            } else {
                console.log(user);
                console.log(user.email);
               console.log(user.comparePassword(password));
                
                if (user.password != password) res.status(401).json({ message: 'Invalid username or password' });
                else {
                    //if correct, send back generated token
                    res.json(user);

                    //if not, send back error message
                }

            }
        });


    },
    register: (req, res) => {
        const {username,password,name,email} = req.body;
        const user = new userModel({ username,password,name,email });
        user.save((err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(user);
            }
        });
    },
}
module.exports = authController;