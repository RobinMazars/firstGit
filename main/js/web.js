class Gare {
  constructor(id, x, y, radius, color, deserve = false) {
    this._id = id;
    this._x = x;
    this._y = y;
    this._radius = radius;
    this._color = color;
    this._deserve = deserve;
    this.draw()
  }
  drawName() {
    ctx.font = '10px Arial';
    ctx.fillStyle = "blue"
    ctx.fillText("(" + this._id + ")", this._x, this._y - 10);
  }
  changeColor(color) {
    this._color = color;
    drawPoint(this._x, this._y, this._radius, this._color)
  }
  draw() {
    drawPoint(this._x, this._y, this._radius, this._color)
    this.drawName()
  }
  findProxyDistOut(grp) {
    var proxy = null;
    var proxyDist = {};
    for (var i = 0; i < gareListe.length; i++) {
      // var actuelI=gareListe[i]
      // var act=this
      var dist = distance2Point(this._x, this._y, gareListe[i]._x, gareListe[i]._y)
      if ((proxy == null || proxyDist.distance > dist) && gareListe[i] != this && !grp.includes(gareListe[i])) {
        proxy = gareListe[i];
        proxyDist = {
          distance: dist,
          gare1: this,
          gare2: proxy
        };
      }
    }
    if (proxy == null) {
      return false
    } else {
      return proxyDist;
    }
  }
  findProxyDist() {
    var proxy = null;
    var proxyDist = {};
    for (var i = 0; i < gareListe.length; i++) {
      // var actuelI=gareListe[i]
      // var act=this
      var dist = distance2Point(this._x, this._y, gareListe[i]._x, gareListe[i]._y)
      if ((proxy == null || proxyDist.distance > dist) && gareListe[i] != this && gareListe[i]._deserve != true) {
        proxy = gareListe[i];
        proxyDist = {
          distance: dist,
          gare1: this,
          gare2: proxy
        };
      }
    }
    if (proxy == null) {
      return false
    } else {
      return proxyDist;
    }
  }
  findShort() {
    for (var i = 0; i < gareListe.length; i++) {
      var proxyDist = gareListe[i].findProxyDist()
      distListe.push(proxyDist)
    }
  }
}

function drawAllPoint(number) {
  var radius = 5;
  colorDefault = 'black'
  for (var i = 0; i < number; i++) {
    x = randomIntFromInterval(radius, canvas.width - radius)
    y = randomIntFromInterval(radius, canvas.height - radius)
    var g = new Gare(i, x, y, radius, colorDefault)
    gareListe.push(g);
  }
  //console.log(gareListe);
}

function compare(a, b) {
  if (a.distance < b.distance)
    return -1;
  if (a.distance > b.distance)
    return 1;
  return 0;
}
