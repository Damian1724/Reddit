var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost:27017/Text');

var Messange = require('./models/messangeModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

messangeRouter = require('./Routes/messangeRoutes')(Messange);

app.use('/api/Messanges',messangeRouter);

app.get('/',function(req,res){
  res.send("Welcome to mi API.");
});

app.listen(port,function(req,res){
  console.log("Gulp running in port " + port);
});
