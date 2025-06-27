const app = require('express')();
const http = require('http').Server(app);

const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://adityakumargautam100:8090623624@cluster0.pphrwuf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const user = require('./models/usermodel');


http.listen(3000, function() {
    console.log('server is running');
});