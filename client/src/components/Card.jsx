import { React } from 'react';
import { Link } from 'react-router-dom';
import '../modules/Card.css';




export default function Card({name, diets, image, id, cookTime}){

    return (
        <div className='card'>
            <h4>{name}</h4>
            <img src={image} alt="image not found" /> 
            <h6>Diets: {diets + ' '}</h6>
            <Link to= {'/home/' + id}><button>Detail</button> </Link>
           
        </div>
      
    )
};