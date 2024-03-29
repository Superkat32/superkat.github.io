---
layout: default
title: About
permalink: /about/
---

<h1 id="demo" style="border: 7px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px;"></h1>
<script>
var i = -1;
var txt = 'About Me - My Coding Journey Thus Far...';
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    if(i == 1) {
      speed = 50;
    }
    if(i == 10) {
      speed = 70;
    }
    if(i == 38) {
      speed = 300;
    }
    setTimeout(typeWriter, speed);
  }
}

this.typeWriter();
</script>
<div class="fade-in purpleborder">
  <div class="rightimage-container fade-in-delay4">
    <img src="../assets/images/codingLanguages.png">
  </div>
  <div>
    <h1 class="fade-in-delay1" style="font-size: 46px">Here are some key things to know about my journey.</h1>
    <ul class="fade-in-delay2">
      <li>I have been toying around with code since 2020.</li>
      <li>I started properly learning code in 2022.</li>
      <li>The first big project I started was in mid-2022.</li>
    </ul>
  </div>
</div>

<div><p></p></div>

<div class="fade-in purpleborder">
  <div class="leftimage-container fade-in-delay1">
    <img src="../assets/images/BrokenLeadWarner.png">
  </div>
    <h1 class="fade-in-delay3" style="font-size: 38px">&lt;<a href="https://modrinth.com/mod/broken-lead-warner">Broken Lead Warner</a>&gt;: My first big project.</h1>
    <p class="fade-in-delay4">Started in mid-2022, Broken Lead Warner is a Minecraft mod which alerts you if your in-game lead item snaps. After 4 months of on/off work, Broken Lead Warner was released on October 7th, 2022.</p>
</div>

<div><p></p></div>

<div class="fade-in purpleborder">
  <div class="topimage-container fade-in-delay1">
    <img src="../assets/images/githublogo.jpg">
  </div>
  <p class="fade-in-delay2">Created for the offical Fabric &lt;<a href="https://github.com/Luligabi1/ParticleExampleMod">Particle Example Mod</a>&gt;, my first pull request was merged on January 2nd, 2023.</p>
</div>

<div><p></p></div>

<div class="fade-in purpleborder">
  <div class="rightimage-container fade-in-delay2">
    <img src="../assets/images/explosiveicon.png">
  </div>
  <h1 class="fade-in-delay1" style="font-size: 46px">&lt;<a href="https://modrinth.com/mod/explosive-enhancement">Explosive Enhancement</a>&gt;</h1>
  <p class="fade-in-delay4">The second released Minecraft mod of mine. Started in late December of 2022 and released on January 1st, 2023, this mod makes the visual effect of explosions cooler. Explosive Enhancement is also my most popular mod and my favorite mod.</p>
</div>

<div><p></p></div>

<div class="fade-in purpleborder">
  <div class="leftimage-container fade-in-delay1">
    <img src="../assets/images/hamptermod.png">
  </div>
    <h1 class="fade-in-delay3" style="font-size: 38px">&lt;<a href="https://modrinth.com/mod/hampter">Hampter</a>&gt;: My first April Fools project.</h1>
    <p class="fade-in-delay4">Started in early March, 2023, Hampter is a Minecraft mod which adds the one and only Hampter to Minecraft! Released on April 1st of 2023.</p>
</div>

<div><p></p></div>

<div class="fade-in purpleborder">
  <h1 class="fade-in-delay1" style="font-size: 56px">That is mostly my coding journey thus far.</h1>
  <ul class="fade-in-delay3">
    <li>I'm still learning Java.</li>
    <li>I'm working on more Minecraft mods.</li>
    <li>I'm also playing around with Web Development.</li>
    <li>And I'm still willing to learn!</li>
  </ul>
</div>

<div><p></p></div>

<!-- <div class="fade-in" style="text-align: center; border: 3px inset #a758ecb6; display: block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <p>Enjoy this GitHub stat card!</p>
  <p style="font-size: 16px; color: #808080">Stat card generated from &lt;<a href="https://github.com/anuraghazra/github-readme-stats">GitHub Readme Stats</a>&gt;</p>
  <div class="statcard-container">
    <img src="https://github-readme-stats.vercel.app/api?username=superkat32&show_icons=true&theme=ocean_dark&hide=contribs&title_color=a758ec&text_color=67f76c&border_color=a758ec">
  </div>
</div> -->

<script>
  const fadeIns = [
    ...document.querySelectorAll('.fade-in'),
    ...document.querySelectorAll('.fade-in-delay1'),
    ...document.querySelectorAll('.fade-in-delay2'),
    ...document.querySelectorAll('.fade-in-delay3'),
    ...document.querySelectorAll('.fade-in-delay4'),
    ...document.querySelectorAll('.fade-in-delay5'),
    ...document.querySelectorAll('.fade-in-delay6'),
  ];

  function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  function isElementVisible(el, threshold = 0.75) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const visiblePercentage = visibleHeight / el.clientHeight;
    if (isMobile()) {
      return visiblePercentage >= 0.5;
    } else {
      return visiblePercentage >= threshold;
    }
  }

  function isElementFadingOut(el, threshold = 0.95) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const hiddenHeight = Math.max(rect.bottom - windowHeight, 0) + Math.max(0 - rect.top, 0);
    const hiddenPercentage = hiddenHeight / el.clientHeight;
    return hiddenPercentage >= threshold;
  }

  function fadeInElements() {
    fadeIns.forEach((fadeIn, index) => {
      if (isElementVisible(fadeIn)) {
        fadeIn.style.opacity = '1';
      }
      // Fade out the element if only 10% of it is viewable after it has already faded in
      else if (fadeIn.style.opacity == '1' && isElementFadingOut(fadeIn)) {
        fadeIn.style.opacity = '0';
      }
    });
  }

  window.addEventListener('scroll', fadeInElements);

</script>