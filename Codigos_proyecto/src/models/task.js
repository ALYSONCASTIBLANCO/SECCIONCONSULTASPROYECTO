const mongoose=require('mongoose');
const esquemaproducto=mongoose.Schema({
    ID_PRODUCTO:Number,
    NOMBRE_PRODUCTO: String,
    CANTIDAD:Number,
    CATEGORIA:String
})
const modeloproducto=mongoose.model('stock',esquemaproducto,'stock');
module.exports=modeloproducto;