import {useEffect} from 'react';
import '../css/Auto-slideshow.css';
import image1 from '../Images/ToF_Wallpaper2022_09.png';


function Auto_Slideshow(props)
{
    useEffect(()=> 
    {
        let slideIndex = 0;
        showSlides();
        
        function showSlides() 
        {
          let i;
          let slides = document.getElementsByClassName("mySlides");
          for (i = 0; i < slides.length; i++) 
          {
            slides[i].style.display = "none";  
          }
          slideIndex++;
          if (slideIndex > slides.length) {slideIndex = 1}    
          slides[slideIndex-1].style.display = "block";  
          setTimeout(() =>
            {
                showSlides();
            }, 5000); // Change image every 2 seconds
        }
    }, []);

    return (
    <>
        <div className = "auto-slideshow-container" style = {{display: props.Display}}>

            <div className = "mySlides fade">
                <img src = {props.Image1} style = {{width: '100%'}}></img>
                <div className = "text">{props.Text1}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {props.Image2} style = {{width: '100%'}}></img>
                <div className = "text">{props.Text2}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {props.Image3} style = {{width: '100%'}}></img>
                <div className = "text">{props.Text3}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {props.Image4} style = {{width: '100%'}}></img>
                <div className = "text">{props.Text4}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {props.Image5} style = {{width: '100%'}}></img>
                <div className = "text">{props.Text5}</div>
            </div>

        </div>
    </>
    );
  
};

Auto_Slideshow.defaultProps = 
{ 
    Image1: image1,
    Image2: image1,
    Image3: image1,
    Text1: "Add text here", 
    Text2: "Add text here", 
    Text3: "Add text here"
}
export default Auto_Slideshow;