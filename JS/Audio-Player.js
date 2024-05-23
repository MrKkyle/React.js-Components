import {useEffect} from 'react';
import '../css/Audio-player.css'

function AudioContainer(props)
{
    useEffect(()=> 
    {

        const audioPlayer = document.querySelector(".audio-player");
        const audio = new Audio("https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3");
        console.dir(audio);

        audio.addEventListener(
        "loadeddata",
        () => 
        {
            audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
            audio.duration
            );
            audio.volume = .75;
        },
        false
        );

        //click on timeline to skip around
        const timeline = audioPlayer.querySelector(".timeline");
        timeline.addEventListener("click", e => 
        {
            const timelineWidth = window.getComputedStyle(timeline).width;
            const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
            audio.currentTime = timeToSeek;
        }, false);

        //click volume slider to change volume
        const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
        volumeSlider.addEventListener('click', e => 
        {
            const sliderWidth = window.getComputedStyle(volumeSlider).width;
            const newVolume = e.offsetX / parseInt(sliderWidth);
            audio.volume = newVolume;
            audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
        }, false)

        //check audio percentage and update time accordingly
        setInterval(() => 
        {
            const progressBar = audioPlayer.querySelector(".progress");
            progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
            audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);
        }, 500);

        //toggle between playing and pausing on button click
        const playBtn = audioPlayer.querySelector(".controls .toggle-play");
        playBtn.addEventListener(
        "click",
        () => 
        {
            if (audio.paused) 
            {
                playBtn.classList.remove("play");
                playBtn.classList.add("pause");
                audio.play();
            } 
            else 
            {
                playBtn.classList.remove("pause");
                playBtn.classList.add("play");
                audio.pause();
            }
        },
        false
        );

        audioPlayer.querySelector(".volume-button").addEventListener("click", () => 
        {
            const volumeEl = audioPlayer.querySelector(".volume-container .volume");
            audio.muted = !audio.muted;
            if (audio.muted) 
            {
                volumeEl.classList.remove("icono-volumeMedium");
                volumeEl.classList.add("icono-volumeMute");
            } 
            else 
            {

                volumeEl.classList.add("icono-volumeMedium");
                volumeEl.classList.remove("icono-volumeMute");
            }
        });

        //turn 128 seconds into 2:08
        function getTimeCodeFromNum(num) 
        {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;

            if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(
                seconds % 60
            ).padStart(2, 0)}`;
        }

    }, []);

    return (
    
        <div id = "audio">

            <audio controls>
                <source src="https://ia800905.us.archive.org/19/items/FREE_background_music_dhalius/backsound.mp3"  type="audio/mp3"></source>
            </audio> 
            <div style="width: 50px; height: 50px;"></div>
            <div class="audio-player">
            <div class="timeline">
                <div class="progress"></div>
            </div>
            <div class="controls">
                <div class="play-container">
                <div class="toggle-play play">
                </div>
                </div>
                <div class="time">
                <div class="current">0:00</div>
                <div class="divider">/</div>
                <div class="length"></div>
                </div>
                <div class="name">Music Song</div>

                <div class="volume-container">
                <div class="volume-button">
                    <div class="volume icono-volumeMedium"></div>
                </div>
                
                <div class="volume-slider">
                    <div class="volume-percentage"></div>
                </div>
                </div>
            </div>
            </div>
        </div>    
    );
};
  
AudioContainer.defaultProps = 
{
    textTitle: "Add Text Here", 
};
export default AudioContainer;