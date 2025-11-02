import React from "react";
import LoginCard from "./UI/LoginCard";

const Signup = () => {
    return (
        <div>
            <LoginCard 
                image1="logo-text.png" 
                label1="Email" 
                label2="Password" 
                heading="Create Your Account" 
                image2="image3.png" 
                btntext="Sign Up"
                showSignup={false}  
            />
        </div>
    )
}
export default Signup;
