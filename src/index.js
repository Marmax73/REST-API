//  <ÉSTE ES EL CÓDIGO DEL SERVIDOR>


const express=require('express');
const app = express();

//morgan:middleware: función que procesa datos antes de que el server los reciba.
const morgan = require('morgan');

//routes
app.use(require('./routes/index'));

//settings
app.set('port',process.env.PORT || 3000);//En caso de existir un servicio en la nube, que lo tome. Sino, 3000.
app.set('json spaces', 2);//configuración para el objeto json

//middleware
app.use(morgan('dev'));//me permite ver por consola lo que va llegando al server.
app.use(express.urlencoded({extended: false}));//para entender datos que vienen desde input de formulario.
app.use(express.json());




//starting the server

app.listen(3000, () =>{
    console.log(`Server on port  ${app.get('port')}`);
})

