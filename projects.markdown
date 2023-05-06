---
layout: projects
title: Projects
permalink: /projects/
---

<!-- <h1 id="demo" style="border: 7px inset #a758ecb6; display: inline-flex; padding: 3px; backdrop-filter: blur(0px) saturate(100%) brightness(50%); font-size: 36px;"></h1> -->
<script>
var i = -1;
var txt = 'My Projects As Of April, 2023';
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

<!-- <div class="fade-in purpleborder">
  <div class="text-container">
    <h1 style="font-size: 46px">My Projects</h1>
  </div>
</div> -->

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