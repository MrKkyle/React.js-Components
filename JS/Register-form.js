import {useState} from "react";
import {useEffect} from 'react';
import $ from "jquery";

import '../Css/Form.css';
function Register_Form(props)
{
    
    const[inputs, setInputs] = useState({});
    const [resulter, setResulter] = useState("");
    
    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const form = $(event.target);
        $.ajax
        ({
            type: "post",
            url: 'http://localhost:8000/register.php',
            data: form.serialize(),
            success(data) 
            {
                setResulter(data);
            },
        });
    }
    /* name property is required when creating forms, 
       since the values are only eligible if the 
       set name of that value is set in the form
    */   

    useEffect(()=> 
    {

        let redirect = document.getElementById("rdct-btn");
        let redirect_main = document.getElementById("rdct-main");
        let register_form = document.getElementById("register-form");
        let login_form = document.getElementById("login-form");
        let message = document.getElementById("message2");
        let back = document.getElementById("back");

        //redirect message
        redirect.addEventListener("click", () =>
        {
            redirect_main.style.display = "none";
            login_form.style.display = "block";
        });

        //Close button
        back.addEventListener("click" , () => 
        {
            register_form.style.display = "none";
            login_form.style.animation = "FadeIn ease-in 1s";
            login_form.style.display = "block";
        });

        //function to check login status
        function checkRegister() 
        {
            if(message.innerHTML !== "")
            {
                message.style.display = "block";
                if(message.innerHTML === "register-true")
                {
                    message.innerHTML = "Registered Sucessfully";
                    message.style.backgroundColor = "rgb(6, 133, 6)";
                    setTimeout(() =>
                    {
                        register_form.style.animation = "Fadeout ease-out 1s";
                        register_form.style.display = "none";
                        redirect_main.style.display = "block";
                    
                    }, 1000);
                }
                else if(message.innerHTML === "register-false")
                {
                    message.innerHTML = "Registration Failed";
                    message.style.backgroundColor = "rgb(175, 11, 11)";
                    setTimeout(() =>
                    {
                        //reloads the browser
                        window.location.reload();
                    }, 2000);
                }
            }
            setTimeout(checkRegister, 2000);//frequency of check made to server
        }
        checkRegister();
        
    }, []);

    return (
    <div>
        <div className = 'modal1' id = "register-form" style = {{display: props.Display}}>
        <span className = "close" id = "back" title = "Close Modal">&times;</span>
            <form className = 'modal-content' autoComplete = 'off' method = 'post' onSubmit={(event) => handleSubmit(event)}>

                <div className = 'modal-container'>
                    <label>Username</label>
                    <span><input type = 'text' placeholder = "Enter a name"  name = "username" value = {inputs.username || ""} onChange = {handleChange} required></input></span>

                    <label>Password</label>
                    <span><input type = 'password' placeholder = "Enter a password" name = "password" value = {inputs.password || ""} onChange = {handleChange} required></input></span>

                    <button className = 'button' type = 'submit'>Register</button>
                </div>
            </form>
            <div className = "info-message2" id = "message2">{resulter}</div>
        </div>
        <div className = "redirect-message" id = "rdct-main">
            You have sucessfully been registered. Click below to be redirected to the login page:
            <br/>
            <button className = "redirect-button" id = "rdct-btn">Redirect</button>
        </div>
    </div>
    );
}

Register_Form.defaultProps = 
{
    Display: "none"
}
export default Register_Form;

