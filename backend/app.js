const app = require('express')();
const http = require('http').Server(app);

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://kunaltelangi786:rsuv1W1ZCV6b0Njb@cluster0.bltys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

const User = require('./models/userModel');

async function insert() {
    await User.create({
        name:'Kunal',
        user:'kunaltelangi82',
        phoneNumber:8999128968,
        pwd:'qwerty12345',
        email:'kunaltelangi786@gamil.com'
    });
}
insert();

http.listen(3000,function(){
    console.log("server is running");
});