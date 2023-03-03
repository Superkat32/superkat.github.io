---
layout: default
---

<style>
  .boldFancyText {
    font-family: "Lobster", Times, serif;
    font-size: 24px;
  }
</style>
<style>
  .fancySharpieText {
    font-family: "Lobster", Times, serif;
    font-size: 24px;
  }
</style>

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
var txt = 'Hello, World!';
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    if(i == 1) {
      speed = 55;
    }
    setTimeout(typeWriter, speed);
  }
}

this.typeWriter();
</script>
<div style="border: 3px inset #a758ecb6; display: flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px;">
    <span style="font-family: cursive">I'm Superkat32&lt;a.k.a Kat&gt;, and I enjoy making Minecraft mods for &lt;<a href="https://fabricmc.net/">Fabric</a>&gt;, and uploading them to &lt;<a href="https://modrinth.com/">Modrinth</a>&gt;.&nbsp;</span>
</div>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">You can view all of my released &lt;<a href="/projects/"> projects </a>&gt; here!</p>