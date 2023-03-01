// A comment for anyone(myself included) who may be reading this.
//This part isn't actually used, it's simply copy-pasted into the .md file.
//Why? Because I couldn't figure out how to get it working otherwise, and I don't want to delete this.

var i = 0;
var txt = 'About Me - My Coding Journey Thus Far...';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    if(i == 10) {
      speed = 90;
    }
    setTimeout(typeWriter, speed);
  }
}