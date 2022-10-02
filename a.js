var i = 0;
var txt = 'Oops..., your ship has got into an accident. You will have to wait 5 days for help to arrive. In the meanwhile, you will need to find ways of surviving.'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function response() {
  document.getElementById("get").innerHTML = 'NASA said'
}