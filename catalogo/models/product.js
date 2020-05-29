var mongoose = require('mongoose');
var Schema= mongoose.Schema;

var schema= new Schema({
     nombre: {type:String, required:true},
     codigo:{type:Number,required:true},
     categoria:{type:String,required:true},
     proveedor:{type:String,required:true},
     imagen:{type:String,required:true},
     precio:{type:Number,required:true}
});

module.exports = mongoose.model('Product',schema,'productos');