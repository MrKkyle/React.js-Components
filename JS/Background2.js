import '../Css/Background.css';
import {useEffect} from 'react';
import $ from "jquery";
import image from '../Images/Screenshot 2023-08-31 144726.png';
import UserInformation from './User-information';

/* Must start with a Caps letter */
function Background2(props)
{
    useEffect(()=> 
	{
        /* Removes any background color if there is no text */
        let diamond = document.querySelectorAll(".ul.li");
        for(let i = 0; i < diamond.length; i++)
        {
            if(diamond[i].firstChild.firstChild.innerHTML === "")
            {
                diamond[i].firstChild.firstChild.style.backgroundColor = "transparent";
            }
        }

        /* Additional Scripts not originally part of background2 */
        let table = document.getElementById("table");
        let user = document.getElementById("user");
        let navigation = document.getElementById("navigation");
        let user_information = document.getElementById("user-information");
        let close = document.getElementById("close");
        user.addEventListener("click", () =>
        {
            let _user = document.getElementById("_username");
            let _pass = document.getElementById("_password");
            //Retrieve data for the page
            $.ajax
            ({
                type: "POST",
                action: 'validate',
                url: "http://localhost:8000/submit.php",
                data: {action: 'validate'}, //the data you submit with the request
                dataType: 'json',
                success(data) 
                {
                    console.log(data);
                    _user.innerHTML = data['username'];
                    _pass.value = data['key']
                },
            });

            table.style.animation = "Fadeout 1s ease-out";
            navigation.style.animation = "Fadeout 1s ease-out";
            setTimeout(() =>
            {
                table.style.display = "none";
                navigation.style.display = "none";
                user_information.style.animation = "FadeIn 1s ease-in";
                user_information.style.display = "block";
            }, 900);
        });

        close.addEventListener("click", () => 
        {   
            user_information.style.animation = "Fadeout 1s ease-out";
            
            setTimeout(() =>
            {
                user_information.style.display = "none";
                navigation.style.animation = "FadeIn 1s ease-in";
                navigation.style.display = "block";
                navigation.style.opacity = "1";
                table.style.animation = "FadeIn 1s ease-in";
                table.style.display = "block";
                table.style.opacity = "1";

            }, 900);
        });

        let tooltip = document.getElementById("_tooltip");

        user.addEventListener("mouseenter", () =>
        {
            tooltip.style.animation = "FadeIn 0.5s ease-in";
            tooltip.style.display = "block";

            
        });
        user.addEventListener("mouseleave", () =>
        {
            tooltip.style.animation = "Fadeout 0.5s ease-out";
            tooltip.style.display = "none";

        });
        
    }, []);

    return (
        <>

            <div className = "background" id = "background" style = {{backgroundImage: `url(${props.background})`}}>
                <div className = "ul" id = "table">
                    <li className = "ul li diamond1" onClick = {props.onclick1} style = {{display: (props.display1)}}><div className = "image" style = {{backgroundImage: `url(${props.image1})`}}><div className = "text">{props.text1}</div></div></li>
                    <li className = "ul li diamond2" onClick = {props.onclick2} style = {{display: (props.display2)}}><div className = "image" style = {{backgroundImage: `url(${props.image2})`}}><div className = "text">{props.text2}</div></div></li>
                    <li className = "ul li diamond3" onClick = {props.onclick3} style = {{display: (props.display3)}}><div className = "image" style = {{backgroundImage: `url(${props.image3})`}}><div className = "text">{props.text3}</div></div></li>
                    <li className = "ul li diamond4" onClick = {props.onclick4} style = {{display: (props.display4)}}><div className = "image" style = {{backgroundImage: `url(${props.image4})`}}><div className = "text">{props.text4}</div></div></li>
                    <li className = "ul li diamond5" onClick = {props.onclick5} style = {{display: (props.display5)}}><div className = "image" style = {{backgroundImage: `url(${props.image5})`}}><div className = "text">{props.text5}</div></div></li>
                    <li className = "ul li diamond6" onClick = {props.onclick6} style = {{display: (props.display6)}}><div className = "image" style = {{backgroundImage: `url(${props.image6})`}}><div className = "text">{props.text6}</div></div></li>
                    <li className = "ul li diamond7" onClick = {props.onclick7} style = {{display: (props.display7)}}><div className = "image" style = {{backgroundImage: `url(${props.image7})`}}><div className = "text">{props.text7}</div></div></li>
                    <li className = "ul li diamond8" onClick = {props.onclick8} style = {{display: (props.display8)}}><div className = "image" style = {{backgroundImage: `url(${props.image8})`}}><div className = "text">{props.text8}</div></div></li>
                    <li className = "ul li diamond9" onClick = {props.onclick9} style = {{display: (props.display9)}}><div className = "image" style = {{backgroundImage: `url(${props.image9})`}}><div className = "text">{props.text9}</div></div></li>
                    <li className = "ul li diamond10" style = {{display: (props.display10)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond11" style = {{display: (props.display11)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond12" style = {{display: (props.display12)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond13" style = {{display: (props.display13)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond14" style = {{display: (props.display14)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond15" style = {{display: (props.display15)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond16" style = {{display: (props.display16)}}><div className = "image"><div className = "text"></div></div></li>
                    <li className = "ul li diamond17" style = {{display: (props.display17)}}><div className = "image"><div className = "text"></div></div></li>
                </div>
            </div>
            <UserInformation Heading1 = "Username" Heading2 = "Password" Image = {image}/>
            <div className = "user-tooltip" id = "_tooltip">User Information</div>
        </>    
    );
}
// Setting default value for props
Background2.defaultProps = 
{
    display1: 'block',
    display2: 'block',
    display3: 'block',
    display4: 'block',
    display5: 'block',
    display6: 'block',
    display7: 'block',
    display8: 'block',
    display9: 'block',
    display10: 'block',
    display11: 'block',
    display12: 'block',
    display13: 'block',
    display14: 'block',
    display15: 'block',
    display16: 'block',
    display17: 'block'

};

export default Background2;