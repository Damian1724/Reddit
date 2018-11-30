var express = require('express');

var routes = function(Messange){
    var messangeRouter = express.Router();

    messangeRouter.route('/')
        .post(function(req,res){
          var messange = new Messange(req.body);

          messange.save();
          res.status(201).send(messange);
        })
        .get(function(req,res){

            var query = req.query;
            Messange.find(query,function(err,messanges){
               if(err)
                console.log(err);
               else
                res.json(messanges);
            });
        });

    messangeRouter.route('/:messangeId')
        .get(function(req,res){
            Messange.findById(req.params.messangeId,function(err,messange){
               if(err)
                console.log(err);
               else
                res.json(messange);
            });
        })
        .put(function(req,res){
            Messange.findById(req.params.messangeId,function(err,messange){
               if(err)
                console.log(err);
               else
                messange.messange = req.body.messange;
                messange.author = req.body.author;
                messange.likes = req.body.likes;
                messange.date = req.body.date;
                messange.save();
                res.json(messange);
            });
        })
      return messangeRouter;
};

module.exports = routes;
