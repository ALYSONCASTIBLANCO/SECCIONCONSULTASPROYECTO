const path=require('path');
const express=require('express');
const morgan=require('morgan');
const app=express();
const mongoose=require('mongoose');

//conectar base de datos
const url='mongodb://localhost/stockDB';
mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db=>console.log('Connected'))
    .catch(err=>console.log(err));

//importar rutas
const indexRoutes=require('./routes/index');
//configuracion
app.set('port',process.send.PORT||3000);
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//rutas
app.use('/',indexRoutes);
//inicia servidor
app.listen(app.get('port'),()=>{
    console.log('Servidor en el puerto '+app.get('port'));
});