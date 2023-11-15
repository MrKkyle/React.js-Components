import '../Css/Background.css';


function Background4(props)
{
  return (
    <div className = "Background4">
      <div className = "background" style = {{backgroundImage: `url(${props.Background})`}}>
        <div className = "para-container">
        <div className = "para diagram000"></div>
          <div className = "para diagram0"></div>
          <div className = "para diagram1"><div className = "image" style = {{backgroundImage: `url(${props.Image1})`}}><div className = "para-text">{props.text1}</div></div></div>
          <div className = "para diagram2"><div className = "image" style = {{backgroundImage: `url(${props.Image2})`}}><div className = "para-text">{props.text2}</div></div></div>
          <div className = "para diagram3"><div className = "image" style = {{backgroundImage: `url(${props.Image3})`}}><div className = "para-text">{props.text3}</div></div></div>
          <div className = "para diagram4"><div className = "image" style = {{backgroundImage: `url(${props.Image4})`}}><div className = "para-text">{props.text4}</div></div></div>
        </div>
      </div>
    </div>
  );
};

Background4.defaultProps = 
{
  Background: ""
}
export default Background4;