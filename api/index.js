const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const jwt = require('jsonwebtoken')

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const jwtSecret = process.env.JWT_SECRET
const app = express();

app.get('/test', (req,res)=>{
    res.json('test ok')
});

app.post('./register', async(req,res)=>{ // endpoint for register page
    const {username,password} = req.body;    // fetch details input on form (frontend)
    const createdUser = await User.create({username,password});
    jwt.sign({UserId: createdUser,_id}, jwtSecret, (err,token)=>{      // _id is unique id for every new user(mongodb syntax) 
        if(err) throw err;
        res.cookie('token',token).status(201).json('ok');        // cookie-------
    });
})
app.listen(4040)                       
