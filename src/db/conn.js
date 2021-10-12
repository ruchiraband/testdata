const mongoose = require("mongoose");
const url = "mongodb+srv://ruchiraband:ruchira$273@cluster0.hv7nn.mongodb.net/student-api?retryWrites=true&w=majority";

mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection is successful.");
}).catch(() => {
    console.log("No Connection.");
});