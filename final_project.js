var namespace = "http://www.w3.org/2000/svg"

// Write your code here!
var enemy1 = makeImage("http://4.bp.blogspot.com/-LlZCAN-YLJA/UrdmggVByBI/AAAAAAAAMb8/3WkZepl_mbc/s1600/png_kopek_forumgazel+(3).png", 150,-70,40,15)
var enemy2 = makeImage("http://www.partnershipforpets.org/images/bigstock_Kitten_on_a_white_background_27948998-new%20copy.png", 120,-40,20,15)
var enemy3 = makeImage("http://pngimg.com/uploads/cat/cat_PNG1615.png", 80,-115,20,15)
var enemy4 = makeImage("http://pngimg.com/uploads/dog/dog_PNG193.png",35,-80,20,15)
var enemy5 = makeImage("http://data.whicdn.com/images/86702777/original.png",90,-80,20,15)
var star = makeImage("http://pics.sc.chinaz.com/Files/pic/icons128/yx_9/Shine%20Sprite.png",30,-15,20,13)
var star2 = makeImage("http://pics.sc.chinaz.com/Files/pic/icons128/yx_9/Shine%20Sprite.png",140,-115,20,13)
var main = makeImage("http://vignette1.wikia.nocookie.net/fantendoii/images/2/27/Mario_Spinning_Animated_Sprite_by_longcat93.gif/revision/latest?cb=20110821002847", 76, 22, 50, 75)
var score =0;
var scoreLabel = makeText("Score : "+ score, 0, 15, 18, "red")


function moveEnemies(){
  move(enemy1,0,1)
  move(enemy2,0,1)
  move(enemy3,0,1)
  move(enemy4,0,1)
  move(enemy5,0,1)
  move(star,0,1)
  move(star2,0,1)



  var y1 = getY(enemy1)
  var y2 = getY(enemy2)
  var y3 = getY(enemy3)
  var y4 = getY(enemy4)
  var y5 = getY(enemy5)
  var y6 = getY(star)
  var y7 = getY(star2)

  if(y1 > 57){

 setY(enemy1,-80)


 } if (y2 > 57){

  setY(enemy2,-54)


} if (y3 > 57){

     setY(enemy3,-114)

   } if (y4 > 57){

        setY(enemy4,-80)


    } if (y5 > 57) {

         setY(enemy5,-70)

} if (y6 > 57) {

  setY(star,-160)
}
if (y7 > 57) {
  setY(star2,-320) }



  if(collides(main,enemy1)||collides(main,enemy2)||collides(main,enemy3)||collides(main,enemy4)||collides(main,enemy5)){
      makeText("GAME OVER!",33,50,20,"Blue")
      alert("GAME OVER!") } else {

  requestAnimationFrame(moveEnemies)
}
}

addEventListener('keydown', movemain)

function movemain(event)

{

  var W = getX(main)

    var E = getY(main)

      if(event.key== "a" && W > 7)

      {

    move(main,-10,0)

  } else if(event.key == "d" && W < 145)

  {

    move(main,10,0)

    }


if(collides(main,star)||collides(main,star2)){
  score=score+1
      scoreLabel.innerHTML = "Score : "+score;
}
}













// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
