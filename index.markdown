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
<!-- <div class="fade-in purpleborder">
    <span style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">I'm Superkat32&lt;a.k.a Kat&gt;, and I enjoy making high quality, open-source Minecraft mods for &lt;<a href="https://fabricmc.net/">Fabric</a>&gt;. I exclusively upload them to &lt;<a href="https://modrinth.com/">Modrinth</a>&gt;.&nbsp;</span>
</div> -->
<div class="fade-in purpleborder">
    <span style="font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif">I'm <span class="highlight-name">Superkat32</span><span class="highlight-name2">a.k.a </span><span class="highlight-name3">Kat</span>.<br>I enjoy making <span class="highlight-bold">high quality</span>, <span class="highlight-bold">open-source</span> Minecraft mods for <a class="highlight-link" href="https://fabricmc.net/">Fabric</a>.<br>I exclusively upload them to <a class="highlight-link" href="https://modrinth.com/">Modrinth</a>.</span>
</div>
<!-- <p class="purpleborder">You can view all of my released &lt;<a href="/projects/"> projects </a>&gt; here!</p> -->

<script>
  const fadeIns = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
        }, 1500); // set a 1 second delay before fading in
        observer.unobserve(entry.target); // stop observing the element after it fades in
      }
    });
  });

  fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
  });

</script>