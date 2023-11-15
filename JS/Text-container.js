import '../Css/Text-container.css'


function Text_container(props)
{
    return (
    <div className = "Text-container" id = "text-container">
        <div className = "text-title">{props.textTitle}</div>
        <div className = "text-body" id = "txtbody"><p>{props.textBody}</p></div>
    </div>
    );
};
  
Text_container.defaultProps = 
{
    textTitle: "Add Text Here", 
};
export default Text_container;