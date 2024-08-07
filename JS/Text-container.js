import '../Css/Text-container.css'


function Text_container({textBody, textTitle})
{
    return (
    <div className = "Text-container" id = "text-container">
        <div className = "text-title">{textTitle}</div>
        <div className = "text-body" id = "txtbody"><p>{textBody}</p></div>
    </div>
    );
};
  
export default Text_container;