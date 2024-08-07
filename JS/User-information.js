import {useEffect} from 'react';
import '../css/User-Information.css';
function UserInformation({Image, Heading1, Heading2})
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
                    <img src = {Image} />
                    <figcaption>
                        <h2>{Heading1}</h2>
                        <p id = "_username"></p>

                        <h2>{Heading2}</h2>
                        <input type = "password" id = "_password"></input>
                        <br />
                        <input id = "radio" type = "checkbox" />Show Password
                    </figcaption>
                </figure>
            </div>
        </div>
    );
  
};
  
export default UserInformation;