// Imports Below 
//`npm install react-router-dom` first
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../pages/Layout';
import Home from '../pages/Home';
import Aesperia from '../pages/Aesperia';
import Vera from '../pages/Vera';
import Domain9 from '../pages/Domain9';
import NoPage from '../pages/NoPage';
import PVP from '../pages/PvP';
import Equipment from '../pages/Equipment';

import AesperiaEnemies from '../pages/sub-domains/sd-Aesperia/Aesperia-Enemies';
import AesperiWorldBosses from '../pages/sub-domains/sd-Aesperia/Aesperia-WorldBosses';
import ArtificialIsland from '../pages/sub-domains/sd-Aesperia/Artifical-Island';
import Warren from '../pages/sub-domains/sd-Aesperia/Warren-snowfield';
import Banges from '../pages/sub-domains/sd-Aesperia/Banges';
import Hykros from '../pages/sub-domains/sd-Aesperia/Hykros';
import Simulacra from '../pages/Simulacra';


import VeraEnemies from '../pages/sub-domains/sd-Vera/Vera-Enemies';
import VeraWorldBosses from '../pages/sub-domains/sd-Vera/Vera-WorldBosses';
import GraySpace from '../pages/sub-domains/sd-Vera/Grayspace';
import TwilightZone from '../pages/sub-domains/sd-Vera/Twilight-Zone';
import MiasmicSwamp from '../pages/sub-domains/sd-Vera/Miasmic-Swamp';
import Mirroria from '../pages/sub-domains/sd-Vera/Mirroria';
import ConfoundingAbyss from '../pages/sub-domains/sd-Vera/Confounding-Abyss';
import Innars from '../pages/sub-domains/sd-Vera/Innars';


import D9Enemies from '../pages/sub-domains/sd-Domain9/Domain9-Enemies';
import D9WorldBosses from '../pages/sub-domains/sd-Domain9/Domain9-WorldBosses';
import Unknown from '../pages/sub-domains/sd-Domain9/Unknown';


// Import Style sheet below
import '../Css/navigation-bar.css';
function Navigation_Bar(props)
{
    return (
        <div style = {{display: props.Display}}>
            <BrowserRouter>
                <Routes>
                    <Route path = "/" element = {<Layout />}>
                        <Route index element = {<Home />}></Route>
                        <Route path = "aesperia" element = {<Aesperia />}></Route>
                        <Route path = "vera" element = {<Vera />}></Route>
                        <Route path = "domain9" element = {<Domain9 />}></Route>
                        <Route path = "PVP" element = {<PVP />}></Route>
                        <Route path = "equipment" element = {<Equipment />}></Route>

                        <Route path = "aesperiaSimulacra" element = {<Simulacra />}></Route>
                        <Route path = "aesperiaEnemies" element = {<AesperiaEnemies />}></Route>
                        <Route path = "aesperiaWorldBosses" element = {<AesperiWorldBosses />}></Route>
                        <Route path = "ArtificialIsland" element = {<ArtificialIsland />}></Route>
                        <Route path = "Hykros" element = {<Hykros />}></Route>
                        <Route path = "Banges" element = {<Banges />}></Route>
                        <Route path = "Warren" element = {<Warren />}></Route>

                        <Route path = "veraEnemies" element = {<VeraEnemies />}></Route>
                        <Route path = "veraWorldBosses" element = {<VeraWorldBosses />}></Route>
                        <Route path = "veraSimulacra" element = {<Simulacra />}></Route>
                        <Route path = "graySpace" element = {<GraySpace />}></Route>
                        <Route path = "twilightZone" element = {<TwilightZone />}></Route>
                        <Route path = "miasmicSwamp" element = {<MiasmicSwamp />}></Route>
                        <Route path = "Mirroria" element = {<Mirroria />}></Route>
                        <Route path = "confoundingAbyss" element = {<ConfoundingAbyss />}></Route>
                        <Route path = "innars" element = {<Innars />}></Route>

                        <Route path = "domain9Enemies" element = {<D9Enemies />}></Route>
                        <Route path = "domain9WorldBosses" element = {<D9WorldBosses />}></Route>
                        <Route path = "domain9Simulacra" element = {<Simulacra />}></Route>
                        <Route path = "unknown" element = {<Unknown />}></Route>

                        <Route path = "*" element = {<NoPage />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Navigation_Bar;
