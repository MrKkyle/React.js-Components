import React from 'react';
import '../../css/background.css';

/* Must start with a Caps letter */
function Background({image, background})
{
    return (
        <>
            <div className = "background" style = {{backgroundImage: `url(${image})`, background: background}}></div>
        </>
    );
}

Background.defaultProps = 
{
    image: "",
    background: "linear-gradient(to bottom, #202020, #111119)"
};