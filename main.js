
/* javascript animation */
var i = 0;
var txt = 'student, designer, and innovator';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
