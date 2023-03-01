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

<h1 style="border: 7px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px;">About Me - My Coding Journey Thus Far...</h1>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">I have been toying around with code since roughly 2020-ish. I never really did anything beyond a few super ultra small projects until mid-2022, whenever I started my first Minecraft mod, &lt;<a href="https://modrinth.com/mod/broken-lead-warner">Broken Lead Warner</a>&gt;. I had played around with Python, HTML, and JavaScript for a very very small amount of time before then, but had taken Java a little farther. I barely knew what I was doing, but I was set on my current and future ideas. I finished the mod around 3-ish months later. It wasn't fully the vision I had for it, because it didn't have multiplayer support, but I was tired of working on it.</p>
<p style="border: 3px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">Some time had passed before I had my first pull request on one of my repos. It was on Broken Lead Warner, and it was to add multiplayer support. It was a great experience to communicate with another developer right there on GitHub. I merged the request and kept how the developer who created the PR acted in mind so that if I needed too, I could apply that learning experience whenever I created my own PR.</p>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">I ended up needing that experience much sooner than I thought I would. I created a pull request on the &lt;<a href="https://github.com/Luligabi1/ParticleExampleMod">Particle Example Mod</a>&gt; for Fabric. I learned a lot from that as well, and it was once again a great experience to talk with someone who was way smarter than me. I learned that I needed to make better commit messages, and I've taken that feedback to heart. I learned the best practices for commit messaging, and have almost always stuck to those best practices(keyword: almost). I was really happy to have, albeit unoffically, finally contributed to Fabric.</p>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">My next project failed, but I learned a lot about Minecraft's particle system from it and applied it to the next project, &lt;<a href="https://modrinth.com/mod/explosive-enhancement">Explosive Enhancement</a>&gt;. Explosive Enhancement is by far my favorite and my most popular mod on Modrinth. It took only around a week because I had set a deadline for myself to finish it so I could release it on the first day of the new year.</p>
<p style="border: 3px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">That is my coding journey thus far. I still have a lot more to be excited about, however! I'm only getting better at Java every project, and I plan on learning even more coding releated stuff soon!</p>


