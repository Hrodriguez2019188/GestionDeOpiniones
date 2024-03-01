const { check } = require('express-validator');
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { postPublicacion, putPublicacion, addComment } = require('../controllers/post.controller'); // Ajusta el controlador

const router = Router();

router.post('/', [
    validarJWT,
    validarCampos,
    postPublicacion 
]);
router.put('/:createdAt', [
    validarJWT,
    validarCampos,
    putPublicacion 
]);
router.post('/users/:userId', [
    validarJWT,
    check('postId', 'El ID del post es requerido').notEmpty(),
    validarCampos
], addComment);

// Eliminar publicación si es necesario
// router.delete('/:postId', [
//     validarJWT,
//     deletePublicacion
// ]);
// No hay necesidad de asignar un curso para las publicaciones
// No hay necesidad de obtener cursos por estudiante o por profesor para las publicaciones

module.exports = router;
