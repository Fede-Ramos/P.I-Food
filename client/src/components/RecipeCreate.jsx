import { React } from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRecipe, getDiets } from '../actions'; 
import { Link } from 'react-router-dom';
import '../modules/Createcard.css';


export default function RecipeCreate(){
    const dispatch= useDispatch();
    const diets= useSelector((state) => state.diets);
    const [input, setInput]= useState({
        name : '',
        resume: '',
        healthScore: '',
        healthLevel: '',
        steps: '',
        image: 'https://thecrites.com/sites/all/modules/cookbook/theme/images/default-recipe-big.png',
        diets: []
    })

    useEffect(() => {
        dispatch(getDiets())
    }, []);

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    
    };

    function handleCheckbox(e){
        if(e.target.checked){
            setInput({
            ...input,
            diets: [...input.diets, e.target.value]
            })
        }
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postRecipe(input))
         alert('Recipe has been created succesfully')
         setInput({
         name : '',
         resume: '',
         healthScore: '',
         healthLevel: '',
         steps: '',
         image: '',
         diets: [],

    })
        
    };

    return (
        <div>
              <Link to= '/home'>
              <button className='boton'>HOME</button>
               </Link>
               <h1>Create your own recipe</h1>
               <form  onSubmit={(e) => handleSubmit(e)}>
                <div className='create'>
                   <div>
                       <label>Name: </label>
                       <input type= 'text'
                       value= {input.name}
                       name= 'name'
                       onChange={(e) => handleChange(e)}
                       required= 'true'/>
                   </div>

                   <div>
                       <label>Resume: </label>
                       <input type= 'text'
                       value= {input.resume}
                       name= 'resume'
                       onChange={(e) => handleChange(e)}
                       required= 'true'/>
                   </div>

                   <div>
                       <label>HealthScore: </label>
                       <input type= 'number'
                       value= {input.healthScore}
                       name= 'healthScore'
                       onChange={(e) => handleChange(e)}
                       max='100'
                       min='1'
                       required= 'true'/>
                   </div>

                   <div>
                       <label>HealthLevel: </label>
                       <input type= 'number'
                       value= {input.healthLevel}
                       name= 'healthLevel'
                       onChange={(e) => handleChange(e)}
                       max='100'
                       min='1'
                       required= 'true'/>
                   </div>

                   <div>
                       <label>Steps: </label>
                       <input type= 'text'
                       value= {input.steps}
                       name= 'steps'
                       onChange={(e) => handleChange(e)}/>
                   </div>

                   <div>
                       <label>Image: </label>
                       <input type= 'text'
                       value= {input.image}
                       name= 'image'
                       onChange={(e) => handleChange(e)}/>
                   </div>
                   
                   <div>
                       {
                           diets.map(e => (<div>   
                               <label>{e.name}</label>
                               <input type='checkbox' 
                               value={e.name} 
                               name={e.name} 
                               onChange={(e) => handleCheckbox(e)}/>
                           </div>))
                       }
                   </div>
                   
                   </div>
                   <button className='boton1' type= 'submit' >Create</button>
               </form>
        </div>
    )
};
