const { Recipe } = require('../db');
const { DietType } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;


const api= async () => {
    const getApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=${100}`);
    const apiData= await getApi.data.results.map(e => {
        return {
            id: e.id,
            image: e.image,
            name: e.title,
            diets: e.diets,
            type: e.dishTypes,
            healthScore: e.healthScore,
            
         }
    });
    return apiData;
};
//            CONSULTA TODO A LA API!!
//----------------------/------------------------------//

const db= async () => {
    return await Recipe.findAll({
        include: {
            model: DietType,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
     
})
};
//             CONSULTA TODO A LA BDD!!
//----------------------/------------------------------//

const getAllRecipes= async () => {
    const apiData= await api();
    const dbData= await db();
    const totalData= apiData.concat(dbData);
    return totalData;
};
//            CONCATENO LAS REQUEST (BDD + API)!!
//----------------------/------------------------------//


async function getTodas (req, res, next){
    const { name }= req.query;
    
    try {
        const totalRecipes= await getAllRecipes();
    
    if(name){
        const recipeName= await totalRecipes.filter(e =>
            e.name.toLowerCase().includes(name.toLowerCase())
        )
        recipeName.length ?
        res.send(recipeName) :
        res.status(404).send({error: 'no se encontro la receta'})
        
    } else {
        res.status(200).send(totalRecipes)
       
    }
    } catch (error) {
        next(error)
    }
      
};   
//                  GET A TODO (BDD + API)!!
//----------------------/------------------------------//


async function getId (req, res, next){
    const { id }= req.params;
    try { 
        let dbRecipe;
        if(typeof id === 'string' && id.length > 10){
            dbRecipe= await Recipe.findByPk(id, {
                include: {
                    model: DietType,
                    attributes: ['name'],
                    through: {
                      attributes: [],
                    },
                  },
                })
            res.send(dbRecipe)
        } else {
            const okApi= await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            return res.json({
               id: okApi.data.id,
               image: okApi.data.image,
               name: okApi.data.title,
               diets: okApi.data.diets,
               type: okApi.data.dishTypes,
               resume: okApi.data.summary,
               healthScore: okApi.data.healthScore,
               healthLevel: okApi.data.spoonacularScore,
               steps: okApi.data.instructions
           })
    }
        } catch (error) {
        next(error)
    } 

};

//           GET POR ID (BDD + API)!!
//-----------------------/--------------------------//


module.exports = {
    getTodas,
     getId 
};