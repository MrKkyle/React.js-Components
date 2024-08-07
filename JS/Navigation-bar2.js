// Import Style sheet below
import '../Css/navigation-bar2.css';

function Navigation_Bar2({Display, onclick1, text1, Social1, onclick2, text2, Social2, onclick3, text3, Social3, onclick4, text4, Social4})
{
    return (
        <div>
            <div id="mySidenav" className="sidenav" style = {{display: Display}}>
                <a href = {onclick1} target = "_blank" id = "about">{text1}<img alt = "about" src = {Social1}></img></a>
                <a href = {onclick2} target = "_blank" id = "blog">{text2}<img alt = "blog" src = {Social2}></img></a>
                <a href = {onclick3} target = "_blank" id = "projects">{text3}<img alt = "projects" src = {Social3}></img></a>
                <a href = {onclick4} target = "_blank" id = "contact">{text4}<img alt = "contact" src = {Social4}></img></a>
            </div>
        </div>
    );
}

export default Navigation_Bar2;