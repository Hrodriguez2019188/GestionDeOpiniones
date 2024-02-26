const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { tieneRole } = require('../middlewares/validar-roles');


const { userPut} = require('../controllers/user.controller');

const router = Router();

router.put("/:id", [
    validarJWT,
    tieneRole('USER_ROLE', 'ADMIN_ROLE'),
    check('id', 'No es un ID válido').isMongoId(),
    check('id'),
    validarCampos
], userPut);



module.exports = router;