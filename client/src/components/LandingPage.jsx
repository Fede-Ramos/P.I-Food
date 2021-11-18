import { React } from 'react';
import { Link } from 'react-router-dom';
import '../modules/LandingPage.css';

export default function LandingPage(){
    return (
        <div className= 'title'>
          <h1>Welcome</h1>
          <h1>To the FoodClub Experience</h1>
          <Link to= '/home'>
              <button>COME IN</button>
          </Link>

        </div>
    )
};