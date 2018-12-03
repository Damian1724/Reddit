var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/messages');

var Message = require('./models/messageModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

messageRouter = require('./Routes/messageRoutes')(Message);

app.use('/api/Messages',messageRouter);

app.get('/',function(req,res){
  res.send("Welcome to mi API.");
});

app.listen(port,function(req,res){
  console.log("Gulp running in port " + port);
});
