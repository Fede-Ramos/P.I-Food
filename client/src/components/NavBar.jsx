import { React } from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../actions';
import SearchBar from './SearchBar';
import '../modules/Navbar.css';

export default function NavBar(){
    const dispatch= useDispatch();

    function handleClick(e){
        e.preventDefault();
        dispatch(getRecipes())
    };

    return (
            
        <div className="navbar">
        <Link to= '/recipe'>
        <div className='botonCrear'>   <button>Create Recipe</button>   </div>
             
          </Link> 
          
          <div className='botonCargar'> <button onClick= {(e) => handleClick(e)}>Reload</button>  </div>
          
          <SearchBar/>

        </div>
    )
};