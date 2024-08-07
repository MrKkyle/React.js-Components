import '../Css/Background.css';


function Background4({Background, Image1, Image2, Image3, Image4, text1, text2, text3, text4})
{
  return (
    <div className = "Background4">
      <div className = "background" style = {{backgroundImage: `url(${Background})`}}>
        <div className = "para-container">
        <div className = "para diagram000"></div>
          <div className = "para diagram0"></div>
          <div className = "para diagram1"><div className = "image" style = {{backgroundImage: `url(${Image1})`}}><div className = "para-text">{text1}</div></div></div>
          <div className = "para diagram2"><div className = "image" style = {{backgroundImage: `url(${Image2})`}}><div className = "para-text">{text2}</div></div></div>
          <div className = "para diagram3"><div className = "image" style = {{backgroundImage: `url(${Image3})`}}><div className = "para-text">{text3}</div></div></div>
          <div className = "para diagram4"><div className = "image" style = {{backgroundImage: `url(${Image4})`}}><div className = "para-text">{text4}</div></div></div>
        </div>
      </div>
    </div>
  );
};

export default Background4;