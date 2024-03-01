const express = require('express');
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { postPublicacion, putPublicacion } = require('../controllers/post.controller'); // Ajusta el controlador

const router = Router();

router.post('/', [
    validarJWT,
    validarCampos,
    postPublicacion 
]);
router.put('/:postId', [
    validarJWT,
    validarCampos,
    putPublicacion 
]);
// Eliminar publicación si es necesario
// router.delete('/:postId', [
//     validarJWT,
//     deletePublicacion
// ]);
// No hay necesidad de asignar un curso para las publicaciones
// No hay necesidad de obtener cursos por estudiante o por profesor para las publicaciones

module.exports = router;
