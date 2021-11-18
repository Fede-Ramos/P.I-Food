import { React } from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, recipeFilterByDiet, sortOrder, scoreOrder } from '../actions';
import  Card from './Card'; 
import Paginado from './Paginado';
import NavBar from './NavBar';
import '../modules/Home.css';
import '../modules/Card.css';
import '../modules/Paginado.css';

export default function Home(){
    const dispatch= useDispatch();
    const [order, setOrder]= useState('');
    const [score, setScore]= useState('');
    const allRecipes= useSelector((state) => state.recipes);
    const [currentPage, setCurrentPage]= useState(1);
    const [recipesInPage, setRecipesInPage]= useState(9);
    const lastRecipe= currentPage * recipesInPage;
    const firstRecipe= lastRecipe - recipesInPage;
    const currentRecipes= allRecipes.slice(firstRecipe, lastRecipe);

  const paginado= (pageNumber) => {
      setCurrentPage(pageNumber)
  };

  useEffect(() => {
      dispatch(getRecipes())
  }, []);


  function handleDietFilter(e){
      e.preventDefault();
      dispatch(recipeFilterByDiet(e.target.value));
      setCurrentPage(1);
  };

  function handleSort(e){
      e.preventDefault();
      dispatch(sortOrder(e.target.value))
      setCurrentPage(1);
      setOrder(`Ordenado ${e.target.value}`) 
  };

  function handleOrder(e){
      e.preventDefault();
      dispatch(scoreOrder(e.target.value))
      setCurrentPage(1);
      setScore(`Scoreado ${e.target.value}`) 
  };


  return (
      <div>

       <NavBar/>

       <h1>Take a look and let's cook!</h1>
      

          <div>

           <div className='sort'><span>Sort: </span>
               <select onChange={(e) => handleSort(e)}>
                   <option default value=''></option>
                   <option value= 'asc'>A - Z</option>
                   <option value= 'desc'>Z - A </option>
               </select>
            

             <span>Score Order:</span>
               <select onChange={(e) => handleOrder(e)}>
                   <option default value=''></option>
                   <option value= 'low'>Low</option>
                   <option value= 'high'>High</option>
               </select>
         
                  

             <span>Filter: </span>
               <select onChange= {(e) => handleDietFilter(e)}>
                    <option value='all'>All</option>
                    <option value='dairy free'>Dairy Free</option>
					<option value='vegan'>Vegan</option>
					<option value='gluten free'>Gluten Free</option>
					<option value='lacto ovo vegetarian'>Lacto-Ovo-Vegetarian</option>
					<option value='pescatarian'>Pescatarian</option>
					<option value='paleolithic'>Paleolithic</option>
					<option value='primal'>Primal</option>
					<option value='fodmap friendly'>Fodmap Friendly</option>
					<option value='whole 30'>Whole30</option>
                    <option value='vegetarian'>Vegetarian</option>
               </select>
               </div> 
               <Paginado
               recipesInPage={recipesInPage}
               allRecipes={allRecipes.length}             
               paginado= {paginado}
               />
               <div className='cards'>
               {currentRecipes?.map((r) => {
                   return (
                      <div>
                             
                   <Card name={r.name} 
                   image={r.image} 
                   diets={r.diets? r.diets : r.dietTypes.map(e => e.name)}
                   id={r.id}/>
                    
                   </div>
                   
                   ) 
                   
               }) 
            }
                  </div>
          </div>

      </div>
  )
};
