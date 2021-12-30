const { Router } = require('express');
const router = Router();
const { getTodas, getId } = require('../../controllers/RecipesLogic');

router.get('/', getTodas);
router.get('/:id', getId);


module.exports = router;
