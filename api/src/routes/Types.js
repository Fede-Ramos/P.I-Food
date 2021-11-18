const { Router } = require('express');
const { DietType } = require('../db');
const router = Router();



 router.get('/', async (req, res, next) => {
     const typesOfDiet= ['dairy free', 'vegan', 'gluten free', 'lacto ovo vegetarian', 'pescatarian', 'paleolithic', 'primal', 'fodmap friendly', 'whole30', 'vegetarian'];

     try {
         typesOfDiet.forEach((e) => {
             DietType.findOrCreate({
                 where: { name: e },
                 defaults: {
                     name: e,
                 },
             });
         });
         const allDiets = await DietType.findAll();
           res.send(allDiets)
     } catch (error) {
         next(error)
     }

});
//                GET TYPES A BDD!!
//----------------------/------------------------------//

module.exports = router;
