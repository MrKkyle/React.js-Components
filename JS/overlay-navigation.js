// Import Style sheet below
import '../css/overlay-navigation.css';
import { Outlet, Link } from "react-router-dom";
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


//Insert your navigations 
function Overlay_Navigation(props)
{
    const navigate = useNavigate();
    
    const navigateToLocation1 = () => 
    {
        navigate('/');
    };
    const navigateToLocation2 = () => 
    {
        navigate('/');
    };
    const navigateToLocation3 = () => 
    {
        navigate('/');
    };
    const navigateToLocation4 = () => 
    {
        navigate('');
    };

    useEffect(()=> 
    {
        function openNav() 
        {
            document.getElementById("myNav").style.height = "100%";
        }
  
        function closeNav() 
        {
            document.getElementById("myNav").style.height = "0%";
        }

        let open = document.getElementById("open");
        let close = document.getElementById("close");

        open.onclick = function(event)
        {
            openNav();
        }

        close.onclick = function(event)
        {
            closeNav();
        }
    }, []);


    return (
    <>  
        <div id = "myNav" className = "overlay">
            <a id = "close" className = "closebtn">&times;</a>

            <div className = "overlay-content">
                <a href = "#">{props.location1}</a>
                <a href = "#">{props.location2}</a>
                <a href = "#">{props.location3}</a>
                <a href = "#">{props.location4}</a>
            </div>
        </div>
        <span id = "open">open</span>
        <Outlet />
    </>    
    )  
}

Overlay_Navigation.defaultProps = 
{
    location1: "loc 1",
    location2: "loc 2",
    location3: "loc 3",
    location4: "loc 4"
}
export default Overlay_Navigation;