const mongoose = require("mongoose");
const validator = require("validator");
//const bcrypt = require("bcryptjs");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    con_password: {
        type: String,
    }
});




//we will create a new collection
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;