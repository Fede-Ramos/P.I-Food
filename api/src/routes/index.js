const { Router } = require('express');
const RecipesRoute = require('./routers/Recipes');
const RecipeRoute = require('./routers/Recipe');
const DietRoute = require('./routers/Types');
const router = Router();



router.use('/recipes', RecipesRoute);
router.use('/types', DietRoute);
router.use('/recipe', RecipeRoute);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);



module.exports = router;

