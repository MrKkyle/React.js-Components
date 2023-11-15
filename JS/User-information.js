import {useEffect} from 'react';
import '../Css/User-Information.css';
function UserInformation(props)
{

    useEffect(()=> 
    {
        document.getElementById("radio").addEventListener("click", () =>
        {
            var x = document.getElementById("_password");
            if (x.type === "password") 
            {
                x.type = "text";
            } 
            else 
            {
                x.type = "password";
            }
        });


    }, []);
    return (
        <div className = "userInformation" id = "user-information">
            <span className = "close" id = "close" title = "Close Modal">&times;</span>
            <div className = "modal1" id = "modal">
                
                <figure className = "snip1376">
                    <img src = {props.Image} />
                    <figcaption>
                        <h2>{props.Heading1}</h2>
                        <p id = "_username"></p>

                        <h2>{props.Heading2}</h2>
                        <input type = "password" id = "_password"></input>
                        <br />
                        <input id = "radio" type = "checkbox" />Show Password
                    </figcaption>
                </figure>
            </div>
        </div>
    );
  
};
UserInformation.defaultProps = 
{
	Text1: "Add Text Here",
    Text2: "Add Text Here",
    Heading1: "Add Text Here",
    Heading2: "Add Text Here",
};    
export default UserInformation;