import { React } from "react";
import '../modules/Paginado.css';

export default function Paginado({allRecipes, recipesInPage, paginado}){
    const pages= []
    for(let i=0; i<Math.ceil(allRecipes/recipesInPage); i++){
        pages.push(i+1)
    }

    return (
        <div className='paginado'>
             
                  {pages && pages.map(n => {
                      return (
                   
                      <div className='pages'> <a onClick={()=> paginado(n)}>{n}</a> </div> 
                    
                      )
                  })}
            
        </div>
    )
};
