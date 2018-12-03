var express = require('express');

var routes = function(Message){
    var messageRouter = express.Router();

    messageRouter.route('/')
        .post(function(req,res){
          var message = new Message(req.body);

          message.save();
          res.status(201).send(message);
        })
        .get(function(req,res){

            var query = req.query;
            Message.find(query,function(err,messages){
               if(err)
                console.log(err);
               else
                res.json(messages);
            });
        });

    messageRouter.route('/:messageId')
        .get(function(req,res){
            Message.findById(req.params.messageId,function(err,message){
               if(err)
                console.log(err);
               else
                res.json(message);
            });
        })
        .put(function(req,res){
            Message.findById(req.params.messageId,function(err,message){
               if(err)
                console.log(err);
               else
                message.message = req.body.message;
                message.author = req.body.author;
                message.likes = req.body.likes;
                message.date = req.body.date;
                message.save();
                res.json(message);
            });
        })
      return messageRouter;
};

module.exports = routes;
