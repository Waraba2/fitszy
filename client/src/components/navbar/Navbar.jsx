import React from 'react'
import './Navbar.css'
function Navbar () {
    return (
        <div className='Navbar'>
            <a href="#home">Home</a>
            <a href='#Workouts'>Workouts</a>
            <a href='#Nutrtion'>Nutrition</a>
            <a href='#Progress'>Progress</a>
        </div>
    );
}
export default Navbar;