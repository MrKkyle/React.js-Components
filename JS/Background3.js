import '../Css/Background.css';
import {useState} from "react";
import {useEffect} from 'react';
import $ from "jquery";

function Background3({hr,text,Title,Background})
{
    const[inputs, setInputs] = useState({});
    


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

    }, []);
    return (
    <>   
        <div className = "background-image" style = {{backgroundImage: `url(${Background})`}}>
            <div className = "container" id = "container">

                <div className = "text"> {Title} <hr style = {{display: hr}}/> </div>

                <div className = "text-container" onChange = {handleChange}> {text} </div>

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

export default Background3;