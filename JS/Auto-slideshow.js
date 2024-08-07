import {useEffect} from 'react';
import '../css/Auto-slideshow.css';
import image1 from '../Images/ToF_Wallpaper2022_09.png';


function Auto_Slideshow({Display, Image1, Text1, Image2, Text2, Image3, Text3, Image4, Text4, Image5, Text5})
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
        <div className = "auto-slideshow-container" style = {{display: Display}}>

            <div className = "mySlides fade">
                <img src = {Image1} style = {{width: '100%'}}></img>
                <div className = "text">{Text1}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {Image2} style = {{width: '100%'}}></img>
                <div className = "text">{Text2}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {Image3} style = {{width: '100%'}}></img>
                <div className = "text">{Text3}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {Image4} style = {{width: '100%'}}></img>
                <div className = "text">{Text4}</div>
            </div>

            <div className = "mySlides fade">
                <img src = {Image5} style = {{width: '100%'}}></img>
                <div className = "text">{Text5}</div>
            </div>

        </div>
    </>
    );
  
};

export default Auto_Slideshow;