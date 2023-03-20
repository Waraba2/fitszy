import React from 'react'
import './Navbar.css'
import {Link} from "react-router-dom";
function Navbar () {
    return (
        <div className='Navbar'>
            <Link to='/'>Home</Link>
            <Link to='/workout'>Workouts</Link>
            <Link to='/Nutrition'>Nutrition</Link>
            <Link to='/progress'>Progress</Link>
            <Link to='/meditation'>Meditation</Link>
            <Link to='/community'>Community</Link>
        </div>
    );
}
export default Navbar;