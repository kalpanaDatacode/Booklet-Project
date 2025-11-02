import React from "react";
import LoginCard from "./UI/LoginCard";

const Login = () => {
    return (
        <div>
            <LoginCard 
                image1="logo-text.png" 
                label1="Email" 
                label2="Password" 
                heading="Login To Get Inside" 
                image2="image3.png" 
                btntext="Log In"
                showSignup={true}   
            />
        </div>
    )
}
export default Login;
