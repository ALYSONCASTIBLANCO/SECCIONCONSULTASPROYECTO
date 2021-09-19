const mongoose=require('mongoose');
const url='mongodb://localhost/stockDB'
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db=>console.log('Connected'))
    .catch(err=>console.log(err));

const esquemaproducto=mongoose.Schema({
    ID_PRODUCTO:Number,
    NOMBRE_PRODUCTO: String,
    CANTIDAD:Number,
    CATEGORIA:String
})
const modeloproducto=mongoose.model('stock',esquemaproducto,'stock');

const mostrargeneral=async()=>{
    const productos=await modeloproducto.find();
    console.log(productos);
}

const mostrarcategorias=async()=>{
    const productos=await modeloproducto.find({"CATEGORIA":"Hogar"});
    console.log(productos);
}
mostrargeneral()
mostrarcategorias()



