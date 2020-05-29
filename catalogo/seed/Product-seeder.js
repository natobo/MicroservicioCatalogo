var Product=require('../models/product');

var mongoose=require('mongoose');

mongoose.connect('mongodb+srv://arquiteam:arquiteam@cluster0-dv27m.mongodb.net/test?retryWrites=true&w=majority');


var products=[
    new Product({
     nombre:'cuaderno' ,
     codigo:3568592915109133,
     categoria:"B",
     proveedor:"MiCasa",
     imagen:"https://image.flaticon.com/icons/svg/2904/2904859.svg",
     precio:31103
    }),
    new Product({
        nombre:'cuaderno2' ,
        codigo:3568592915109144,
        categoria:"B",
        proveedor:"MiCasa",
        imagen:"https://image.flaticon.com/icons/svg/2904/2904859.svg",
        precio:11103
       }),
];

var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
             exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}