const { Router } = require('express');
const RecipesRoute = require('./Recipes');
const RecipeRoute = require('./Recipe');
const DietRoute = require('./Types');
const router = Router();



router.use('/recipes', RecipesRoute);
router.use('/types', DietRoute);
router.use('/recipe', RecipeRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;

