

const initialState = {
    recipes: [],
    fullRecipes: [],
    detail: [],
    diets: [],  
};



function rootReducer(state= initialState, action){
   switch(action.type){
       case 'GET_RECIPES':
           return {
               ...state,
               recipes: action.payload,
               fullRecipes: action.payload
            }
        case 'GET_DIETS':
            return {
                ...state,
                diets: action.payload
            }
        case 'POST_RECIPE':
            return {
                ...state,                      
            }
        case 'DIET_SORT':
            const allRecipes= state.fullRecipes
            const filterRecipes= action.payload === 'all' ? 
            allRecipes :
            allRecipes.filter(e =>  e.diets.includes(action.payload) )
            return {
                ...state,
                recipes: filterRecipes
            }
        case 'GET_DETAIL':
                return {
                    ...state,
                    detail: action.payload
            }    
        case 'SORT_ORDER':
            const sortArray= action.payload === 'asc' ?
            state.recipes.sort(function(a, b) {
                if(a.name > b.name) {
                    return 1;
                }
                if(b.name > a.name) {
                    return -1;
                }
                return 0;
            }) : 
            state.recipes.sort(function(a, b) {
                if(a.name > b.name) {
                    return -1;
                }
                if(b.name > a.name) {
                    return 1;
                }
                return 0;
            }) 
                 return {
                    ...state,
                    recipes: sortArray
            }
        case 'SCORE_ORDER':
                const orderArray= action.payload === 'low' ?
                state.recipes.sort(function(a, b) {
                 if(a.healthScore > b.healthScore) {
                     return 1;
                 }
                if(b.healthScore > a.healthScore) {
                    return -1;
                }
                return 0;
                }) :
                state.recipes.sort(function(a, b) {
                 if(a.healthScore > b.healthScore) {
                     return -1;
                 }
                 if(b.healthScore > a.healthScore) {
                     return 1;
                 }
                 return 0;
                })
                return {
                    ...state,
                    recipes: orderArray
            }
        case 'GET_NAMES':
                return {
                        ...state,
                        recipes: action.payload
            }
              default: 
              return state;
   }
};

export default rootReducer;