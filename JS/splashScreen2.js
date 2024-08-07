//Imports below(should always be first) 
import '../Css/splashScreen.css';
import {useRef, useEffect} from 'react';

function SplashScreen2({Text})
{
    useEffect(()=> 
	{
        let splash = document.querySelector(".splash");
        setTimeout(() =>
        {
            splash.classList.add("display-none");
        }, 2000);
        


    }, []);

    return (
    <div className = "splashScreen2">
        <div className = "splash" id = "splash">
            {Text}
        </div>
    </div>
    );
  
};
    
export default SplashScreen2;