const { Router } = require('express');
const router = Router();
const { postRecipe } = require('../../controllers/PostLogic');


router.post('/', postRecipe);

module.exports = router;

