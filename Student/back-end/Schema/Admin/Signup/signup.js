//Importing Mongoose
const mongoose = require('mongoose');

//Creating Schema
const Schema = mongoose.Schema;

//Creating Schema Object
const AdminSignup = new Schema({

    //Setting Values and their type
    name:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    email:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },

    //Setting Values and their type
    password:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    },
    retype:{

        //Checking type of Entered Value
        type:String,

        //Checking if that value is compulsory or no
        required:true
    }
});

//Exporting SignUp Model
module.exports = mongoose.model("Admin Signup", AdminSignup);