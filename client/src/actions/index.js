const axios= require('axios');


export function getRecipes(){
    return async function(dispatch){
        const conn= await axios.get('http://localhost:3001/api/recipes')
        return dispatch({
            type: 'GET_RECIPES',
            payload: conn.data
        })
    }
};

export function recipeFilterByDiet(payload){
    return {
        type: 'DIET_SORT',
        payload
    }
};

export function sortOrder(payload){
    return {
        type: 'SORT_ORDER',
        payload
    }
};

export function scoreOrder(payload){
    return {
        type: 'SCORE_ORDER',
        payload
    }
};

export function getNames(name){
    return async function(dispatch){
        const get= await axios.get('http://localhost:3001/api/recipes?name=' + name)
        return dispatch({
            type: 'GET_NAMES',
            payload: get.data
        })
    }
};

export function postRecipe(payload){
    return async function(dispatch){
        const post= await axios.post('http://localhost:3001/api/recipe', payload)
        return post;
    }
};

export function getDiets(payload){
    return async function(dispatch){
        const diet= await axios.get('http://localhost:3001/api/types')
        return dispatch({
            type: 'GET_DIETS',
            payload: diet.data
        })
    }
};

export function getDetail(id){
    return async function(dispatch){
      const details= await axios.get('http://localhost:3001/api/recipes/' + id)
        return dispatch({
            type: 'GET_DETAIL',
            payload: details.data
        })    
    }
};
