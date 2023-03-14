---
layout: hampter
permalink: /hampter/
---
<p style="text-align: center;">Hampter</p>

<!-- Poison - Aim To Head (Found on YouTube) -->
<audio id="bg-music" src="../assets/audio/poison.mp3" loop></audio>
<div id="player"></div>
<button id="begin-btn" style="background-color: transparent; border-color: midnightblue; border-radius: 40px; border-style: dashed;" class="button-position, button-animation-before-click">
    <img id="play-pause-icon" src="../assets/images/hampter.jpg" />
</button>

<p id="audionoti" style="text-align: center"></p>

<!-- <script>
    const image = document.getElementById('glitch-image');

    // Set up glitch effect with random offsets
    function glitch() {
    image.style.transform = `translate(${Math.random()}px, ${Math.random()}px)`;
    image.style.filter = `contrast(1) brightness(1) hue-rotate(${Math.random() * 360}deg)`;
    }

    // Start glitch effect and increase intensity over time
    let intensity = 0;
    const glitchInterval = setInterval(() => {
    glitch();
    intensity += 1;
    if (intensity >= 17) {
        clearInterval(glitchInterval);
        image.style.transform = 'none';
        image.style.filter = 'none';
    }
    }, 1000);

</script> -->
<script>
    document.addEventListener('DOMContentLoaded', () => {
    const beginBtn = document.getElementById("begin-btn");
    const animationContainer = document.querySelector(".animation-container");
    const bgMusic = document.getElementById("bg-music");
    const playPauseIcon = document.getElementById("play-pause-icon");
    let isFirstClick = true;

    var bg = document.getElementById("bg");
    var x = document.getElementById("bg-music");

    function toggleMute() {
        x.muted = !x.muted;
        playPauseIcon.src = x.muted ? "../assets/images/volumeOff.png" : "../assets/images/volumeOn.png";
    }
    
    beginBtn.addEventListener("click", () => {
        if (bgMusic.paused) {
        if (!isFirstClick) {
            toggleMute();
        } else {
            playPauseIcon.src = "../assets/images/volumeOn.png";
            console.log('Audio now playing');
        }
        beginBtn.classList.add('button-animation');
        playAnimation();
        } else {
        toggleMute();
        beginBtn.classList.remove('button-animation');
        }
        if (isFirstClick) {
            bgMusic.play();
            beginBtn.classList.remove('button-small', 'button-center', 'button-animation-before-click');
            beginBtn.classList.add('button-clicked', 'button-volume-position', 'button-animation');
            const img = document.createElement("img");
            img.src = "../assets/images/hampter.jpg";
            img.id = "hampter";
            img.style.display = "block";
            img.style.marginLeft = "auto";
            img.style.marginRight = "auto";
            document.getElementById("audionoti").innerHTML = "If no audio is playing, try reloading the page!";
            var isPortrait = window.matchMedia("(orientation: portrait)").matches;

            // set the width of the image based on the device orientation
            if (isPortrait) {
                img.style.width = "70%";
                img.style.marginTop = "-32%";
            } else {
                img.style.width = "30%";
                img.style.marginTop = "-12%";
            }

            // img.style.width = "30%";
            document.body.appendChild(img);
            isFirstClick = false;
        }        
    });

    playPauseBtn.addEventListener("click", toggleMute);

        function playAnimation() {
            setTimeout(function() {
                document.body.classList.add('matrix-transition');
                document.body.classList.add('matrix-bg');
                const img = document.getElementById("hampter");
                img.src = "../assets/images/hackerHampter.png";
                bg.remove();
            }, 18000);

            setTimeout(function() {
                document.getElementById("audionoti").classList.add("fade-in");
            }, 5000)
        }
    });


    // beginBtn.addEventListener("click", () => {
    //   // start the animation by adding the "show" class to the container
    //   // animationContainer.classList.add('.show');
    //   console.log('yay');
                
    //   // play the background music
    //   play();
    // });

    // Load the IFrame Player API code asynchronously
    // const tag = document.createElement('script');
    // tag.src = 'https://www.youtube.com/iframe_api';
    // const firstScriptTag = document.getElementsByTagName('script')[0];
    // firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // let player;

    
    // // Create a function to create the player
    // function onYouTubeIframeAPIReady() {
    //   player = new YT.Player('player', {
    //     height: '0px',
    //     width: '0px',
    //     videoId: '-PQR1zTyAWQ',
    //     playerVars: {
    //       'autoplay': 1,
    //       'controls': 1,
    //       'rel': 0,
    //       'showinfo': 0,
    //       'start': 1,
    //       'loop': 1 // set loop to 1 to play the video repeatedly
    //     }
    //   });
    // }
    
    // Add a click event listener to the play button
    // const playBtn = document.getElementById('play-btn');
    // playBtn.addEventListener('click', () => {
    //   const videoContainer = document.getElementById('video-container');
    //   const video = document.createElement('iframe');
    //   video.src = 'https://www.youtube.com/embed/-PQR1zTyAWQ';
    //   video.allowFullscreen = true;
    //   // document.querySelector('.container').appendChild(video);
    
    //   // play the video when it is ready
    //   video.addEventListener('canplay', () => {
    //     console.log('pressed!');
    //     video.play();
    //   });
    
    //   // create the matrix-bg-2 element
    //   const matrixBg2Container = document.createElement('div');
    //   matrixBg2Container.className = 'matrix-bg-2-container';
    //   const matrixBg2 = document.createElement('div');
    //   matrixBg2.className = 'matrix-bg-2';
    //   matrixBg2Container.appendChild(matrixBg2);
    //   document.body.appendChild(matrixBg2Container);

    //   // create the matrix-bg-3 element
    //   const matrixBg3Container = document.createElement('div');
    //   matrixBg3Container.className = 'matrix-bg-3-container';
    //   const matrixBg3 = document.createElement('div');
    //   matrixBg3.className = 'matrix-bg-3';
    //   matrixBg3Container.appendChild(matrixBg3);
    //   document.body.appendChild(matrixBg3Container);
    // });


</script>
<canvas id="matrix-canvas"></canvas>