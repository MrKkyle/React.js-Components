import {useEffect} from 'react';

import '../Css/Landing-page.css'

/* Must start with a Caps letter */
function LandingPage(props)
{
    useEffect(()=> 
    {
        //get elements that should be hidden
        let navigation = document.getElementById("navigation");
        let register = document.getElementById("register");
        let login = document.getElementById("login");
        let guest = document.getElementById("guest");

        //get other elements
        let register_form = document.getElementById("register-form");
        let form = document.getElementById("login-form");
        let land = document.getElementById("land");



        register.addEventListener("click", () =>
        {
            land.style.display = "none";
            register_form.style.display = "block";
        });

        login.addEventListener("click", () =>
        {
            land.style.display = "none";
            form.style.display = "block";
        });

        guest.addEventListener("click", () =>
        {
            land.style.display = "none";
            form.style.display = "none";
            register_form.style.display = "none";
            navigation.style.display = "block";
        });

        navigation.style.display = "none";

    }, []);

    return (
        <div className = "landing-page">
            <div className = "modal1" id = "land">
                <div className = "modal-content">
                    <div className = "blocks login" id = "login">Login</div>
                    <div className = "blocks register" id = "register">Register</div>
                    <div className = "blocks guest" id = "guest">Guest mode</div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;