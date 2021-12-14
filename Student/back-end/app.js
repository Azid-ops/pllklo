const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
app.use(express.json());
const AdminSignup = require('./Schema/Admin/Signup/signup');
app.use("/Adminsignup",async (req,res,next)=>{
    console.log("[AdminSignup.js] Sign up");
    const {name,gmail,password,retype} = req.body;

    let hashedPassword = await bcrypt.hash(password, 12);

    const admin = new AdminSignup({
        name,
        email:gmail,
        password:hashedPassword,
        retype
    });

    if(gmail.includes("@gmail.com"))
    {
        if(password === retype)
        {
            console.log("Password Matched")
            admin.save().then(result=>{
                console.log(result);
                console.log("Successfully Signup up");
            }).catch(err=>{
                console.log(err);
            });
        }
        else
        {
            console.log("Password does not matched");
        }
    }
});

app.use("/AdminLogin",async (req,res,next)=>{
    const {gmail,retype} = req.body;
    AdminSignup.findOne({email:gmail}).then(res=>{
        console.log(res);
        console.log("Successfully Logged In");
    }).catch(err=>{
        console.log(err);
    });
});

mongoose.connect("mongodb+srv://Mahad:Mahad123@cluster0.btoqm.mongodb.net/MobileApp").then(res=>{
    app.listen(3000);
});