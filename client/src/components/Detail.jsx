import { React } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDetail } from '../actions';
import { useParams } from 'react-router-dom';
import '../modules/Carddetail.css';

export default function Detail(){
  const dispatch= useDispatch();
  const { id }= useParams();

  useEffect(() => {
      dispatch(getDetail(id))
  }, [dispatch])

  const myRecipe = useSelector((state) => state.detail);
  
  return (
    <div className='detail'>   
      
         
           { myRecipe ? 
            
            <div className='tarjeta'>
                <h2>{myRecipe.name}</h2>
                <img src={myRecipe.image}/>
                {myRecipe.type?
                <h3>DishType: {myRecipe.type}</h3> : null}
                <p>Resume: <div dangerouslySetInnerHTML={{ __html: myRecipe.resume }}/> </p>
                <h3>Diet: {!myRecipe.createdInDb? 
                myRecipe.diets + ', ' : myRecipe.dietTypes.map((e) => e.name + ', ')}</h3>
                <h4>HealthScore: {myRecipe.healthScore}</h4>
                <h4>HealthLevel: {myRecipe.healthLevel}</h4>
                <h4>Steps:  <div dangerouslySetInnerHTML={{ __html: myRecipe.steps }}/> </h4>
             </div>
             : <p>Recipe not found</p>  
               
           } 
         
        <div> 
             
         
         <Link to= '/home'>
                  <button>Home</button>
          </Link>
          </div>  
    
     </div>
 
  )
};
