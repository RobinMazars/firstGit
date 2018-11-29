var trueRand=true;
seed=5634;
//5634

// Global variables used for the seeded random functions, below.
var seedobja = 1103515245
var seedobjc = 12345
var seedobjm = 4294967295 //0x100000000

// Creates a new seed for seeded functions such as srandom().
function newseed(seednum)
{
    return [seednum]
}

// Works like Math.random(), except you provide your own seed as the first argument.
function srandom(seedobj)
{
    seedobj[0] = (seedobj[0] * seedobja + seedobjc) % seedobjm
    return seedobj[0] / (seedobjm - 1)
}




if (trueRand) {
  my_seed_value = newseed(Date.now())
}
else{
  var my_seed_value = newseed(seed)

}


function drawPoint(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}
function distance2Point(x1, y1, x2, y2) {
  return Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
}

function randomIntFromInterval(min, max) // min and max included
{
  return Math.floor(srandom(my_seed_value) * (max - min + 1) + min);
}
function drawLine(x1, y1, x2, y2,color="black") {
  ctx.beginPath()
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath()
}
