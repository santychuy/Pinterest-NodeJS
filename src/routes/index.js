const {Router} = require('express');
const router = Router();


const Image = require('../models/image');

//Ruta principal
router.get('/', (req, res) => {
    const images = Image.find();
    res.render('index', {images});
});

//Ruta para subir imagenes
router.get('/upload', (req, res) => {
    res.render('upload');
});

//Ruta para la hora de hacer una petición POST
router.post('/upload', (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;

    image.save();

    res.redirect('/');
});

//Ruta para ver la imagen seleccionada
router.get('/image/:id', (req, res) =>{
    res.send('Image Deploy');
});

//Ruta para poder eliminar una imagen
router.get('/image/:id/delete', (req, res) => {
    res.send('Image deleted!');
});

module.exports = router;