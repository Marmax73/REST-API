//routes(REST api)



const {Router} = require('express');//enrutador de express
const router = Router(); //instancia del enrutador.
                         // EN EL INDEX.JS PRINCIPAL, SE ESCRIBIÓ app.get():
                         //es lo mismo pero en otro archivo.
router.get('/pilchas',(req, res)=>{
    const pilchas = {
        "poncho": "Prenda de lana",
        "sombrero":"Cambergo: de fieltro o cuero",
        "botas":"de Potro",
        "calzoncillo":"Largo. Debajo del chiripá"
    }
res.json(pilchas);
});
module.exports = router;