const express = require('express');
const router = express.Router();
const Libro = require('../models/libro.js');



router.get('/', async (req,res)=>{
    // dirname da el valor del directorio donde se ejecuta
    //console.log(__dirname );
    // necestio en modulo path para poder concatenar de forma correcta los directorios
    //console.log(path.join(__dirname, 'views/index.ejs'));// ya sabe en que sistema operativo estoy y lo convierte por ejemplo / en \
    const libros =  await Libro.find();
    res.render('index', {
        libros //libros: libros acepta las 2 formas 
    });//respondo con la pagina web, puedo pasarle un parametro para tener objetos 
});


router.post('/add' , async (req,res) =>{
    const objetoLibro = new Libro(req.body); // devuelve un objeto que tiene propiedades para guardarse dentro de la base de datos o actualizarce etc.
    await objetoLibro.save();
    res.redirect('/');
});

router.get('/delete/:id' , async (req,res) =>{
    const { id } = req.params;
    await Libro.remove({ _id: id });
    res.redirect('/');
});

router.post('/update/:id', async (req,res)=>{
    const { id } = req.params;
    const { titulo , autor , editorial } = req.params;
    
    console.log(id);


    const libro_ = await Libro.findById(id);

    if (titulo != undefined && titulo.length > 0 ){
        libro_.titulo = titulo;
    }
    if (autor != undefined && autor.length > 0 ){
        libro_.autor = autor;
    }
    if (editorial != undefined && editorial.length > 0 ){
        libro_.editorial = editorial;
    }
    console.log(titulo);
    console.log(libro_);
   await libro_.save();
    res.redirect('/');

});

module.exports = router;