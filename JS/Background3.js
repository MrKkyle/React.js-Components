import '../Css/Background.css';
import {useState} from "react";
import {useEffect} from 'react';
import $ from "jquery";

function Background3(props)
{
    const[inputs, setInputs] = useState({});
    
    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        /* Allow the inserted text to replace the innerHTML of the text_container 
        let text_container = document.querySelector(".text-container");
        text_container.innerHTML = inputs.new_text;
        localStorage.setItem(pathname.substring(1), inputs.new_text);
        */
        
        let action = window.location.pathname.substring(1) + "-update";
        $.post( "http://localhost:8000/worker.php", { action: action, data: inputs.text_area })
        .done(function( _data) 
        {
            let text_container = document.querySelector(".text-container");
            text_container.innerHTML = _data;
        });
    }

    useEffect(()=> 
    {
        $.post( "http://localhost:8000/worker.php", {action: window.location.pathname.substring(1)})
        .done(function( _data) 
        {
            let text_container = document.querySelector(".text-container");

            //Format Text 
            let text = _data.substring(1);
            text = text.slice(0, -1);
            text_container.innerHTML = text;
            console.log(text);
        });

        $.ajaxSetup({ xhrFields: { withCredentials: true }, });
        let login_form = document.getElementById("login-f");
        let _information = document.getElementById("_information");
        let container = document.getElementById("container");

        let text_container = document.querySelector(".text-container");
        let edit_text = document.querySelector(".edit-text");
        let container_heading = document.querySelector(".container-heading");
        /* Login form submission event */
        login_form.onsubmit = function(event)
        {
            /* allows time for a form submission to be processed first */
            setTimeout(() =>
            {
                /* Checks if the user is logged, and displays certain elements */
                $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
                .done(function( _data) 
                {
                    if(_data === "true")
                    { 
                        _information.style.display = "block";
                        /* REshape the elements styles */
                        text_container.style.fontSize = "12px"; text_container.style.position = "relative"; text_container.style.left = "50%"; 
                        text_container.style.top = "72.7%"; text_container.style.transform = ""; text_container.style.width = "650px";
                        text_container.style.padding = "10px"; text_container.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                        text_container.style.animation = "FadeIn 1s ease-in"; text_container.style.display = "block"; 
                        edit_text.style.display = "block"; edit_text.style.animation = "FadeIn 1s ease-in";
                        container_heading.style.display = "block"; container_heading.style.animation = "FadeIn 1s ease-in";
                    }
                    else //if not logged
                    { 
                        _information.style.display = "none";
                        /* Reshape the elements styles */
                        text_container.style.paddingLeft = "500px"; text_container.style.paddingRight = "500px"; text_container.style.fontSize = "14px";
                        text_container.style.position = "relative"; text_container.style.left = "2%"; text_container.style.top = "2%"; 
                        text_container.style.transform = "translate(-3%,-2%)"; text_container.style.backgroundColor = "transparent"; 
                        text_container.style.transform = "translate()"; text_container.style.width = "auto";
                        text_container.style.animation = "FadeIn 1s ease-in"; text_container.style.display = "block";

                        edit_text.style.display = "none";
                        container_heading.style.display = "none";


                        let navbar = document.querySelector(".navbar");
                        var txt = document.querySelector(".text-container").innerHTML;
                        document.querySelector(".text-container").innerHTML = "";
                        var speed = 28;
                        var i = 0;
                        function typeWriter() 
                        {
                            if (i < txt.length)
                            {
                                document.querySelector(".text-container").innerHTML += txt.charAt(i);
                                i++;
                                setTimeout(typeWriter, speed);
                            }
                        }
                        
                        navbar.onclick = function(event)
                        {
                            txt = ""
                        }
                        
                        setTimeout(() =>
                        {
                            typeWriter();
                        }, 2000);

                        
                        
                    }
                });
            }, 500);
        }

        /* Guest mode button event */
        let guest_button = document.getElementById("guest");
        guest_button.addEventListener("click", () =>
        {
            $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
            .done(function( _data) 
            {
                _information.style.display = "none";
            });
        });

        /* Logout button event */
        let navigation = document.getElementById("navigation");
        let logout = document.getElementById("logout");
        let logout_confirm = document.querySelector(".logout-confirm");
        let logout_yes = document.getElementById("yes-btn");
        let logout_no = document.getElementById("no-btn");
        logout.addEventListener("click", () => 
        {

            logout_confirm.style.display = "block";
            logout_yes.onclick = function(event)
            {
                $.post( "http://localhost:8000/session_variables.php", {action: "logout"})
                .done(function( _data) 
                {
                    console.log("Data sent: " + _data);
                    /* Fade Out */
                    navigation.style.animation = "Fadeout 1s ease-out";
                    container.style.animation = "Fadeout 1s ease-out";

                    /* Fade in */
                    setTimeout(() =>
                    {
                        /* Perform animations */
                        navigation.style.display = "none";
                        container.style.display = "none";

                        window.location.reload();
                    }, 500);
                });
            }   
            logout_no.onclick = function(event)
            {
                logout_confirm.style.display = "none";
            }
        });

        /* Determine if the user is logged or not, and then displays elements a certain way */
        setTimeout(() =>
        {
            $.post( "http://localhost:8000/session_variables.php", {action: "validate"})
            .done(function( _data) 
            {
                let text_container = document.querySelector(".text-container");
                let edit_text = document.querySelector(".edit-text");
                let container_heading = document.querySelector(".container-heading");
                if(_data === "true")//Logged IN ELEMENTS
                {
                    /* REshape the elements styles */
                    text_container.style.fontSize = "12px"; text_container.style.position = "relative"; text_container.style.left = "50%"; 
                    text_container.style.top = "72.7%"; text_container.transform = "translate(-50%,-60%)"; text_container.style.width = "650px";
                    text_container.style.padding = "10px"; text_container.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
                    text_container.style.animation = "FadeIn 1s ease-in"; text_container.style.display = "block";
                    text_container.style.height = "155px"; 


                    edit_text.style.display = "block"; edit_text.style.animation = "FadeIn 1s ease-in";
                    container_heading.style.display = "block"; container_heading.style.animation = "FadeIn 1s ease-in";

                }
                else//Logged OUT ELEMENTS
                {
                    /* Reshape the elements styles */
                    text_container.style.paddingLeft = "500px"; text_container.style.paddingRight = "500px"; text_container.style.fontSize = "14px";
                    text_container.style.position = "relative"; text_container.style.left = "2%"; text_container.style.top = "2%"; 
                    text_container.style.transform = "translate(-3%,-2%)"; text_container.style.backgroundColor = "transparent"; 
                    text_container.style.transform = "translate()"; text_container.style.width = "auto";
                    text_container.style.animation = "FadeIn 1s ease-in"; text_container.style.display = "block";

                    edit_text.style.display = "none";
                    container_heading.style.display = "none";


                    let navbar = document.querySelector(".navbar");
                    var txt = document.querySelector(".text-container").innerHTML;
                    document.querySelector(".text-container").innerHTML = "";
                    var speed = 28;
                    var i = 0;
                    function typeWriter() 
                    {
                        if (i < txt.length)
                        {
                            document.querySelector(".text-container").innerHTML += txt.charAt(i);
                            i++;
                            setTimeout(typeWriter, speed);
                        }
                    }
                    
                    navbar.onclick = function(event)
                    {
                        txt = ""
                    }
                    
                    setTimeout(() =>
                    {
                        typeWriter();
                    }, 2000);

                }
            });
        }, 10);

        

        /* Removes any background color if there is no text */
        let diamond = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamond.length; i++)
        {
            if(diamond[i].firstChild.firstChild.innerHTML === "")
            {
                diamond[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }

    }, []);
    return (
    <>   
        <div className = "background-image" style = {{backgroundImage: `url(${props.Background})`}}>
            <div className = "container" id = "container">

                <div className = "text"> {props.Title} <hr style = {{display: props.hr}}/> </div>

                <div className = "text-container" onChange = {props.handleChange}> {props.text} </div>

                <div className = "edit-text">
                    <form autoComplete = 'off' method = 'post' onSubmit={(event) => handleSubmit(event)}>
                        <p style = {{textAlign: 'center'}}>Insert Text Below </p>
                        <textarea className = "textarea" id = "new_text" name = "text_area" value={inputs.textarea} onChange = {handleChange} required/>
                        <br />
                        <button className = "button" type = "submit" value = "Submit">Submit</button>
                    </form>
                </div>

                <div className = "container-heading">Preview:</div>
            </div>
            <div className = "ul" id = "table" style = {{width: '1880px', height: '980px', overflow: 'hidden'}}>
                <li className = "ul li diamond1" style = {{display: 'block', left: '23%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond2" style = {{display: 'block', left: '50%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond3" style = {{display: 'block', left: '77%', top: '-7%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond4" style = {{display: 'block', left: '23%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond5" style = {{display: 'block', left: '77%', top: '99%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
                <li className = "ul li diamond6" style = {{display: 'block', left: '-4%', top: '46%', width: '600px', height: '600px'}}><div className = "image"><div className = "text"></div></div></li>
            </div>
        </div>
        <div className = "logout-confirm">
            Proceed to Logout?<br /><br />
            <button className = "no-btn" id = "no-btn">No</button> <button className = "yes-btn" id ="yes-btn">Yes</button>
        </div>
    </>     
    );
  
};
Background3.defaultProps = 
{
	Title: "Add a title here",
    Text: "Add some text here",
    Background: "",
    hr : "block"
}
export default Background3;