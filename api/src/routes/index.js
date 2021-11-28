const { Router } = require('express');
const genre = require('./genres');
const platforms = require('./platforms');
const videogames = require('./videogames');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames',videogames)
router.use('/genres',genre)
router.use('/platforms',platforms)

module.exports = router;
