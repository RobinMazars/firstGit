var trueRand = true;
seed = 56565465;
//5634

// Global variables used for the seeded random functions, below.
var seedobja = 1103515245
var seedobjc = 12345
var seedobjm = 4294967295 //0x100000000

// Creates a new seed for seeded functions such as srandom().
function newseed(seednum) {
  return [seednum]
}

// Works like Math.random(), except you provide your own seed as the first argument.
function srandom(seedobj) {
  seedobj[0] = (seedobj[0] * seedobja + seedobjc) % seedobjm
  return seedobj[0] / (seedobjm - 1)
}




if (trueRand) {
  my_seed_value = newseed(Date.now())
} else {
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

function drawLine(x1, y1, x2, y2, color = "black") {
  ctx.beginPath()
  ctx.strokeStyle = color;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.closePath()
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
/**
 * Swap the elements in an array at indexes x and y.
 *
 * @param (a) The array.
 * @param (x) The index of the first element to swap.
 * @param (y) The index of the second element to swap.
 * @return {Array} A new array with the elements swapped.
 */
function swapArrayElements(a, x, y) {
  if (a.length === 1) return a;
  a.splice(y, 1, a.splice(x, 1, a[y])[0]);
  return a;
};
var f = [];

function rFact(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * rFact(num - 1);
  }
}

function mousePos(e, object) {
  var offset = object.getBoundingClientRect();
  var styles = window.getComputedStyle(object);
  var cursorX = e.clientX - offset.left - parseInt(styles.borderLeftWidth);
  var cursorY = e.clientY - offset.top - parseInt(styles.borderTopWidth);

  mouse = {}
  mouse._x = cursorX
  mouse._y = cursorY
  return mouse;

}
