//Imports below(should always be first) 
import '../Css/splashScreen.css';
import {useRef, useEffect} from 'react';


function SplashScreen(props) 
{
	//initiliazed to null
	let refSplash = useRef(null);

	useEffect(()=> 
	{
		// the .current of the div is equated to the element
		let splash = refSplash.current;
		//get other elements that should be 
		let navigation = document.getElementById("navigation");

		navigation.style.display = "none";
		//perform the js for the splash

		setTimeout(() =>
		{
			splash.classList.add("display-none");
			navigation.style.display = "block";
			
		}, 2000);
	}, []);

	

    return ( 
		//set the ref to the class that we would like to access
        <div className = "splash"  style = {{backgroundImage: `url(${props.Background})`}} id = "splash" ref = {refSplash}>
            <div className = "splash-text">
                {props.Text}
            </div>
        </div>
    );
}

SplashScreen.defaultProps = 
{
	Text: "Add Text Here",
	Background : "#ccc"
};
export default SplashScreen;





















