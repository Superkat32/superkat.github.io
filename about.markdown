---
layout: default
title: About
permalink: /about/
---

<script>
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const visitedKey = "visited";

window.onload = () => {
  const h1 = document.querySelector("h1");

  if (!localStorage.getItem(visitedKey)) {
    let iterations = 0;

    const interval = setInterval(() => {
      console.log("Title Text is being randomized!");
      h1.innerText = h1.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return h1.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= h1.dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  }
};

window.addEventListener("beforeunload", () => {
  localStorage.removeItem(visitedKey);
});
</script>

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
<div class="fade-in" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <div class="rightimage-container">
    <img src="../assets/images/codingLanguages.png">
  </div>
  <div class="text-container">
    <h1 style="font-size: 46px">Here are some key things to know about my journey.</h1>
    <ul>
      <li>I have been toying around with code since 2020.</li>
      <li>I started properly learning code in 2022.</li>
      <li>The first big project I started was in mid-2022.</li>
    </ul>
  </div>
</div>

<div><p></p></div>

<div class="fade-in" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <div class="leftimage-container">
    <img src="../assets/images/BrokenLeadWarner.png">
  </div>
    <h1 style="font-size: 38px">&lt;<a href="https://modrinth.com/mod/broken-lead-warner">Broken Lead Warner</a>&gt;: My first big project.</h1>
    <p>Started in mid-2022, Broken Lead Warner is a Minecraft mod which alerts you if your in-game lead item snaps. After 4 months of on/off work, Broken Lead Warner was released on October 7th, 2022.</p>
</div>

<div><p></p></div>

<div class="fade-in" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <div class="topimage-container">
    <img src="../assets/images/githublogo.jpg">
  </div>
  <p>Created for the offical Fabric &lt;<a href="https://github.com/Luligabi1/ParticleExampleMod">Particle Example Mod</a>&gt;, my first pull request was merged on January 2nd, 2023.</p>
</div>

<div><p></p></div>

<div class="fade-in" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <div class="rightimage-container">
    <img src="../assets/images/explosiveicon.png">
  </div>
  <h1 style="font-size: 46px">&lt;<a href="https://modrinth.com/mod/explosive-enhancement">Explosive Enhancement</a>&gt;</h1>
  <p>The second released Minecraft mod of mine. Started in late December of 2022 and released on January 1st, 2023, this mod makes the visual effect of explosions cooler. Explosive Enhancement is also my most popular mod and my favorite mod.</p>
</div>

<div><p></p></div>

<div class="fade-in" style="border: 3px inset #a758ecb6; display: block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <h1 style="font-size: 56px">That is mostly my coding journey thus far.</h1>
  <ul>
    <li>I'm still learning Java.</li>
    <li>I'm working on more Minecraft mods.</li>
    <li>I'm also playing around with Web Development.</li>
    <li>And I'm still willing to learn!</li>
  </ul>
</div>

<div><p></p></div>

<div class="fade-in" style="text-align: center; border: 3px inset #a758ecb6; display: block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <p>I'm also very active on GitHub in general.</p>
  <div class="statcard-container">
    <img src="https://github-readme-stats.vercel.app/api?username=superkat32&show_icons=true&theme=ocean_dark&hide=contribs&title_color=a758ec&text_color=67f76c&border_color=a758ec">
  </div>
</div>

<script>
  const fadeIns = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.style.opacity = '1';
      }
    });
  });

  fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
  });
</script>
