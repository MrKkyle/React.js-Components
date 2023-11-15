import '../Css/Slideshow.css';
import {useEffect} from 'react';
import Background3 from './Background3';
import image from '../Images/Simulacra.jpg';

import weapon1 from '../Images/weapons/Icon_Weapon_Clover_Cross.jpg';
import weapon2 from '../Images/weapons/Icon_Weapon_Flaming_Revolver.jpg';
import weapon3 from '../Images/weapons/Icon_Weapon_Gleipnir.jpg';
import weapon4 from '../Images/weapons/Icon_Weapon_Moonstar_Bracelet.jpg';
import weapon5 from '../Images/weapons/Icon_Weapon_Mini_Hurricane.jpg';
import weapon6 from '../Images/weapons/Icon_Weapon_Precious_One.jpg';
import weapon7 from '../Images/weapons/Icon_Weapon_Vermilion_Bird.webp';
import weapon8 from '../Images/weapons/Icon_Weapon_Shadoweave.jpg';
import weapon9 from '../Images/weapons/Icon_Weapon_Lost_Art.jpg';
import weapon10 from '../Images/weapons/Icon_Weapon_Spark.jpg';
import weapon11 from '../Images/weapons/Icon_Weapon_Heartstream.jpg';
import weapon12 from '../Images/weapons/Icon_Weapon_Thunderbreaker.jpg';

import simulacra1 from '../Images/simulacra/Annabella.png';
import simulacra2 from '../Images/simulacra/Cobalt-B.png';
import simulacra3 from '../Images/simulacra/Fenrir.png';
import simulacra4 from '../Images/simulacra/Fiona.png';
import simulacra5 from '../Images/simulacra/Gnonno.png';
import simulacra6 from '../Images/simulacra/Icarus.png';
import simulacra7 from '../Images/simulacra/Lan.png';
import simulacra8 from '../Images/simulacra/Lin.png';
import simulacra9 from '../Images/simulacra/Rubilia.png';
import simulacra10 from '../Images/simulacra/Ruby.png';
import simulacra11 from '../Images/simulacra/Saki_Fuwa.png';
import simulacra12 from '../Images/simulacra/TianLang.png';

function Slideshow(props) 
{
    useEffect(()=> 
    {
        let prev = document.getElementById("prev");
        let next = document.getElementById("next");
        let slideIndex = 1;
        showSlides(slideIndex);
        function plusSlides(n) 
        {
            showSlides(slideIndex += n);
        }
        function showSlides(n) 
        {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            if (n > slides.length) {slideIndex = 1}    
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) 
            {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block"; 
        }

        //Scripts for the prev, next buttons to reset all the divs
        prev.onclick = function(event)
        {
            plusSlides(-1);
        }
        next.onclick = function(event)
        {
            plusSlides(1);
        }
    }, []);
    /* Slideshow information below*/
    const information = 
    [   
        {id: 1, weapon_description: "The official operation team of a VR multiplayer online shooting game that is incredibly popular in Mirroria specially designed this exclusive gun for their top player from a certain season. The customized physical model of the gun was also sent to the champion, but nobody realized it could be used just like in the game...", weapon_img: weapon1, character_description: "A living urban legend, Annabella is known to the residents of Mirroria as the Crimson Vampire Maid.", character_img: simulacra1 },
        {id: 2, weapon_description: "Invented by a mad scientist. With its impressive test numbers, one can only imagine how powerful it might be at full power.", weapon_img: weapon2, character_description: "She is a mechanic hailing from Crown Mines who is currently working at Banges Tech, aiming to pay her family's debt. She is apparently a childhood friend of KING.", character_img: simulacra2 },
        {id: 3, weapon_description: "A special device that converts sound waves into attack. When the shackles are shattered, the currents of death become sharp claws that tear everything apart.", weapon_img: weapon3, character_description: "A genius DJ who rises up overnight in Mirroria. She makes her first impromptu appearance during Winter Festival's Floating Parade which floating around Mirroria's District B during the event.", character_img: simulacra3 },
        {id: 4, weapon_description: "A strange nanoweapon that generates blades that cut through metal like butter. In the past, it used to take the form of a bracelet that wrapped around its owner's wrist while in standby mode, and that is where its owner's descriptions of it come from.", weapon_img: weapon4, character_description: "Formerly an Executor of Hykros, Fiona is now the current Archon for Innars undersea city due to her outstanding leadership.", character_img: simulacra4 },
        {id: 5, weapon_description: "Far too dangerous to be a child's plaything. There is no way a kid could have gotten their hands on it through honest means. Who knows what kind of tech was used to refit it... Maybe it was simply picked up somewhere off the beaten path.", weapon_img: weapon5, character_description: "Gnonno's very proud of her grandfather, Nuok, who was part of the exploration team that discovered Innars, and wants to become an excellent explorer like him.", character_img: simulacra5 },
        {id: 6, weapon_description: "A rare collectible weapon fused with unique trendy refits. May the wielder walk with courage into the desolate darkness, even if like a moth to the flame.", weapon_img: weapon6, character_description: "Operation codenamed 'Mooke', Icarus is the leader of Mooke Squad who are tasked in Innars with investigating and eliminating Grayspace Entities.", character_img: simulacra6 },
        {id: 7, weapon_description: "A parasol weapon used exclusively by Zhuque with various hidden mechanisms. Vermilion Bird's large parasol body can not only become a powerful tool to destroy enemies using energy, but also something to block the sight of others and hide the holder's demeanor...", weapon_img: weapon7, character_description: "Lan is a messenger from Domain 9 who comes with her companion, Kanro and made her first appearance during Visitors from Domiain 9 main story quest. They have exchanged important information to Archon Fiona but they did not disclose about them for now.", character_img: simulacra7 },
        {id: 8, weapon_description: "A young officer who walks with an aura of strength. She is a clean freak and can't stand a single speck of dust. She has very high standards both for herself and others. The trait makes most people think that she is a stickler for rules, but she is actually amicable and can be reasoned with.", weapon_img: weapon8, character_description: "A renown Executor, the dutiful Lin is immensely popular amongst the residents of Mirroria and an idol in their eyes.", character_img: simulacra8 },
        {id: 9, weapon_description: "A gentle swing in the chaotic abyss will stir up a tempest that affects everyone's fate.", weapon_img: weapon9, character_description: "Very few people know about this due to her special status. The general public still remembers her as an exceptional researcher and promising scientist.", character_img: simulacra9 },
        {id: 10, weapon_description: "A special weapon Lin asked Mirroria R&D to make for Ruby. Its main functions include: Acting as the housekeeper in the play-house game, waking Ruby up in the morning, and leading the way for Ruby... But most importantly, protecting Ruby.", weapon_img: weapon10, character_description: "A little girl who is part human and part Grayspace Entity accompanying Lin, she is always seen with her stuffed doll named 'Dolly.'", character_img: simulacra10 },
        {id: 11, weapon_description: "A special tachi that adapts to the Super Flow experiments. It is able to sense the user's mental state and generate Sword Shadows to assist in combat at the right time.", weapon_img: weapon11, character_description: "She is the third captain of Mirroria Security Special Forces, code named M-sec 003, and a wielder of the twin Tachi Blade.", character_img: simulacra11 },
        {id: 12, weapon_description: "This long spear covered in lightning is the SMA1-TS000-Thunderbreaker. It is able to unleash the stored power through unimaginable means. The electric field that it generates disrupts the mind of its wielder, so it cannot be mastered by ordinary people.", weapon_img: weapon12, character_description: "Loves flowers and is called the 'store owner' since he is responsible for taking care of and selling the plants in the center. He's actually the strongest Executor in District 7, and his true strength is unknown", character_img: simulacra12 },
    ];
    
    return (
        <div className = "slideshow-container">
            <Background3 Background = {image} Text = "" Title = "" hr = "none"/>
            {information.map((info) => 
            (
                <div key = {info.id} className = "mySlides fade">
                    <div className = "slide">
                        <div className = "weapon" style = {{backgroundImage: `url(${info.weapon_img})`}}></div>
                        <div className = "weapon-info"><div className = "text">{info.weapon_description}</div></div>
                        <div className = "character-pic" style = {{backgroundImage: `url(${info.character_img})`}}></div>
                        <div className = "character-info"><div className = "text">{info.character_description}</div></div>
                    </div>
                </div>
            ))}

            <a id = "prev" className = "prev" >&#10094;</a>
	        <a id = "next" className = "next" >&#10095;</a>
        </div>
    );
}


export default Slideshow;


