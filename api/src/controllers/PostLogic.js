const { Recipe, DietType } = require('../../db');



async function postRecipe(req, res, next){
    let { name, resume, healthScore, healthLevel, steps, diets, image } = req.body;
    try {
        const newRecipe = await Recipe.create({
            name,
            resume,
            healthScore,
            healthLevel,
            steps,
            image
            
             })
             let dbTypeOfDiet = await DietType.findAll({
                 where: { name: diets },
              });
              newRecipe.addDietType(dbTypeOfDiet);
         res.send(newRecipe); 

    } catch (error) {
        next(error)
    }
};

//                POST RECIPE (BDD)!!
//----------------------/------------------------------//

module.exports = {
    postRecipe };