import React from 'react'
import './About.css'

function About () {
    return (
        <div className='About'>
            <h1 className="header--title">Get Stronger and Fitter with Us</h1>
            <div className="header--subtitle">Gradescope helps you seamlessly administer and grade all of your
                assessments, whether online or in-class. Save time grading and get a clear picture of how your students
                are doing.
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