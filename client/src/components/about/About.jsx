import React from 'react'
import './About.css'

function About () {
    return (
        <div className='About'>
            <h1 className="header--title">Get Stronger and Fitter with Us</h1>
            <div className="header--subtitle">Welcome to Fitsy - the ultimate fitness app
                for creating and sharing workouts, tracking daily calories, monitoring
                progress, and accessing social media, health videos, gym clothes,
                and mental well-being resources. Join our community and start
                your journey to a healthier, happier you!
            </div>
            <div className="tiiBtnContainer">
                <a className="tiiBtn-primary"
                   href="#sign-up-form">Sign Up for Free</a>
                <a className="tiiBtn-secondary"
                   href="/get-a-demo" type="button">Get a Demo</a>
            </div>
        </div>
    );
}
export default About;