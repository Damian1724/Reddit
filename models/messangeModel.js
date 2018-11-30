var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var messangeModel = new Schema({
   messange:{
     type:String
   },
   likes:{type:String},
   author:{type:String},
   date:{type:String}
});

module.exports = mongoose.model('Text',messangeModel);
