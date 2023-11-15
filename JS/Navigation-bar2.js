// Import Style sheet below
import '../Css/navigation-bar2.css';

function Navigation_Bar2(props)
{
    return (
        <div>
            <div id="mySidenav" className="sidenav" style = {{display: props.Display}}>
                <a href = {props.onclick1} target = "_blank" id = "about">{props.text1}<img alt = "about" src = {props.Social1}></img></a>
                <a href = {props.onclick2} target = "_blank" id = "blog">{props.text2}<img alt = "blog" src = {props.Social2}></img></a>
                <a href = {props.onclick3} target = "_blank" id = "projects">{props.text3}<img alt = "projects" src = {props.Social3}></img></a>
                <a href = {props.onclick4} target = "_blank" id = "contact">{props.text4}<img alt = "contact" src = {props.Social4}></img></a>
            </div>
        </div>
    );
}

export default Navigation_Bar2;