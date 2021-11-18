import { React } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getNames } from '../actions';
import '../modules/Searchbar.css';

export default function SearchBar(){
    const dispatch= useDispatch();
    const [name, setName]= useState('');


    function handleSearchName(e){
    e.preventDefault();
    setName(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault(e);
        dispatch(getNames(name))
    };

    return (
        <div>
             <input type= 'text'
               placeholder= 'Search recipe...'
               onChange= {(e) => handleSearchName(e)}
               className= 'search'
              />
              <button type= 'submit' onClick= {(e) => handleSubmit(e)}>Search</button>
              
        </div>
    )
};