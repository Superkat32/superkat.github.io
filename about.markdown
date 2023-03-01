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
<div class="text-fade-in" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <p>Here are some key things to know about my journey.</p>
  <ul>
    <li>I have been toying around with code since 2020.</li>
    <li>Java peaked my interest in 2022.</li>
    <li>The first big project I started was in mid-2022.</li>
  </ul>
</div>
<div>
<p></p>
</div>
<div class="text-fade-in-2" style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
  <h1>&lt;<a href="https://modrinth.com/mod/broken-lead-warner">Broken Lead Warner</a>&gt; was my first big project.</h1>
  <p>Started in mid-2022, Broken Lead Warner is a Minecraft mod which alerts you if your in-game lead item snaps. After 4 months of on/off work, Broken Lead Warner was released on October 7th, 2022.</p>
</div>

<!-- <img src="../assets/images/skin1.png" width="auto" height="auto"> -->

<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">I ended up needing that experience much sooner than I thought I would. I created a pull request on the &lt;<a href="https://github.com/Luligabi1/ParticleExampleMod">Particle Example Mod</a>&gt; for Fabric. I learned a lot from that as well, and it was once again a great experience to talk with someone who was way smarter than me. I learned that I needed to make better commit messages, and I've taken that feedback to heart. I learned the best practices for commit messaging, and have almost always stuck to those best practices(keyword: almost). I was really happy to have, albeit unoffically, finally contributed to Fabric.</p>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">My next project failed, but I learned a lot about Minecraft's particle system from it and applied it to the next project, &lt;<a href="https://modrinth.com/mod/explosive-enhancement">Explosive Enhancement</a>&gt;. Explosive Enhancement is by far my favorite and my most popular mod on Modrinth. It took only around a week because I had set a deadline for myself to finish it so I could release it on the first day of the new year.</p>
<p style="border: 3px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">That is my coding journey thus far. I still have a lot more to be excited about, however! I'm only getting better at Java every project, and I plan on learning even more coding releated stuff soon!</p>


