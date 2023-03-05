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
    <span style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">I'm Superkat32&lt;a.k.a Kat&gt;, and I enjoy making Minecraft mods for &lt;<a href="https://fabricmc.net/">Fabric</a>&gt;, and uploading them to &lt;<a href="https://modrinth.com/">Modrinth</a>&gt;.&nbsp;</span>
</div>
<p style="border: 3px inset #a758ecb6; display: inline-block; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">You can view all of my released &lt;<a href="/projects/"> projects </a>&gt; here!</p>