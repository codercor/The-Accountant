const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const isExist = (field,data)=>{ 
    userModel.findOne({[field]:data},(err,result)=>{
       if(err) throw err;
       if(result){
           return true;
       }
       return false;
    })
}
const authController = {
    login: (req, res) => { //localhost:3000/auth/login

        const { username, password } = req.body;
        console.log(username,password);
        //check if username and password are correct from database
        userModel.findOne({ username,password }, (err, user) => {
            if (err || !user) {
                res.status(401).json({ message: 'Invalid username or password' });
            } else {
                console.log("GÖNDERİLEN ", user)
                    res.json({
                        message: 'Login successful',
                        token: jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '5h' }),
                        user: user
                    });
            }
        });


    },
    register: (req, res) => {
        const {username,password,name,email} = req.body;
        if(isExist('username',username)) return res.status(400).json({message:'username already exist'});
        if(isExist('email',email)) return res.status(400).json({message:'email already exist'});
        const user = new userModel({ username,password,name,email });
        user.save((err, user) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json({
                    message: 'User created successfully',
                    token: jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' })
                });
            }
        });
    },
}
module.exports = authController;