const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/students", async(req, res) => {

//     try{
//         const user = new Student(req.body);
//         const data = await user.save();
//         res.status(200).send(data);
//     }catch(e){
//         res.status(404).send(e);
//     }

// });

app.post("/students", async (req, res) => {

    try {
        const userData = new Student(req.body);
        console.log(userData);
        const createUser = await userData.save();
        console.log(createUser);
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }

});

app.get("/students", async (req, res) => {
    try {
        const UserList = await Student.find();
        res.status(201).send(UserList);
    } catch (e) {
        res.status(400).send(e)
    }
});

app.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        const singleuser = await Student.findById(_id);
        if (!singleuser) {
            return res.status(404).send()
        } else {
            res.status(201).send(singleuser);
        }

    } catch (e) {
        res.send(e)
    }
});

app.listen(port, () => {
    console.log(`connection is set up at port ${port}`);
    console.log(`PORTServer ${process.env.PORT}`);
    
});