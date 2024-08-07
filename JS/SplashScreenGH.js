import '../Css/splashScreenGH.css';
import {useEffect} from 'react';
import $ from 'jquery';

/* Must start with a Caps letter */
function SplashScreenGH(Text1, Text2, Text3, Text4, Text5, Text6, Text7, Timeout)
{

    useEffect(()=> 
    {
        /**
         * Splash - simple
         */
        function splashIn()
        {
            let array = 
            [
                ['one',Text1],
                ['two',Text2],
                ['three', Text3],
                ['four', Text4],
                ['five',Text5],
                ['six', Text6],
                ['seven', Text7]
            ];
            let rngIndex = Math.floor(Math.random() * 7);
            let spl2Text = document.querySelector('.splashTxt');

            let spl2 = document.querySelector('.spl2-bck');
            spl2.id = array[rngIndex][0];
            spl2Text.innerHTML = array[rngIndex][1];
            let spltxt = document.querySelector('.splashTxt');
            spl2.classList.add('emeraldSplash-top');
            spltxt.classList.add('emeraldSplash-text');
            setTimeout(()=>
            {
                spl2.remove();
                $('#spt').addClass("slideDown");
                $('#spt0').addClass("slideUp");
                document.body.style.overflow = "auto";
            }, 6000);
        }
        
        setTimeout(()=>
        {
            splashIn();
        }, Timeout)

    }, []);

    return (
        <>
            <div className = "spl2-bck">
                <div className = "splashTxt"> </div>
            </div>
        </>
    );
}

export default SplashScreenGH;