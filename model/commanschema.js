var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var crudSchema = new Schema({
name: String,
  age: Number,
  address: String
});

module.exports = mongoose.model('commanschema', crudSchema,'user');
