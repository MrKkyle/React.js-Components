// Imports Below 
//`npm install react-router-dom` first
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//import links below: 
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import NoPage from '../pages/NoPage';



// Import Style sheet below
import '../css/navigation-bar.css';
function Navigation_Bar({Display})
{
    return (
        <div style = {{display: Display}}>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route index element = {<Home />}></Route>
  

                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigation_Bar;
