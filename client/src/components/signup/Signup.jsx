import React from 'react'
import AuthButton from '../extra/AuthButton';
import './Signup.css'
function Signup () {
    return (
        <div className='Signup'>
            <a className='signup_button' href='#signup'>Sign Up</a>
            <a className='login_button' href='#login'>Log In</a>
            {/* <AuthButton/> */}

        </div>


    );
}
export default Signup;