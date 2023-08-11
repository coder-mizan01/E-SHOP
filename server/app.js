require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

const connectDB = require('./DB/db');
const User = require('./models/model');

connectDB();

app.get('/',(req,res)=>{
    res.send('THis is Home');
})

app.post('/Signup', async(req,res)=>{
    try {
        const {email,password} = req.body;

        const newUser = new User({
            email : email,
            password : password,
        })

        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(505).send(error)
    }
})

app.post('/login', async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user && user.password === req.body.password) {
        res.status(200).send({ message: 'Successful login' });
      } else {
        res.status(401).send({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });

module.exports = app;