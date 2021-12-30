const { Router } = require('express');
const router = Router();
const { getTiposDeDieta } = require('../../controllers/TypesLogic');


 router.get('/', getTiposDeDieta) ;
    

module.exports = router;
