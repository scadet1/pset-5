window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;


}

/*
 * Exercise 1.
 */

const sayHello = function() {
  let canvas = document.getElementById('student-canvas-1');
  let context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  let message = ("");
  do {
    message = window.prompt("Message: ")
    if (message.length > 50) {
      window.alert("Your message too long. Keep it under 50 characters.");
    }
  } while (message.length > 50);
  context.font = '48px sans-serif';
  context.strokeText(message, 30, 70);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    const canvas = document.getElementById('student-canvas-2');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

    let width, height, x, y;

  do {
    width = prompt("Width: ");
    height = prompt("Height: ");
    x = prompt("X-coordinate: ");
    y = prompt("Y-coordinate: ");

    if (width !== null) width = Number(width);
    if (height !== null) height = Number(height);
    if (x !== null) x = Number(x);
    if (y !== null) y = Number(y);

    if (width > 1024 || width < 1) {
      if (width == null) {
        break;
      }
      alert("Your width must be between 1 and 1024.");
    } else if (height > 512 || height < 1) {
      if (height == null) {
        break;
      }
      alert("You height must be between 1 and 512.");
    } else if (x > 1024 || x < 1) {
        if (x == null){
          break;
        }
      alert("Your x-coordinate must be between 1 and 1024.");
    } else if (y > 512 || y < 1) {
      if (y == null){
          break;
      }
      alert("Your y-coordinate must be between 1 amd 512.")
    } else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)){
      alert("One of your values is not a number.");
    } else if (x + width > 1024 || y + height > 512) {
      alert("Your rectangle won't fit on canvas.")
    }
  } while(width < 1 || width > 1024 || height < 1 || height > 512 || x < 1 || y < 1 || x > 1024 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || (x + width) > 1024 || (y + height) > 512);

  context.strokeRect(x, y, width, height);
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);

  let rectcolor = prompt("Color: ");
  rectcolor = rectcolor.toLowerCase().trim();

  while (rectcolor != "black" && rectcolor != "blue" && rectcolor != "green" && rectcolor != "orange" && rectcolor != "purple" && rectcolor != "red" && rectcolor != "yellow") {
    if (rectcolor == null) {
      break;
    }
    alert(rectcolor + " is not a supported color.");
    rectcolor = prompt("Color: ");
  }
  console.log(rectcolor);
  context.fillStyle = rectcolor;
  context.fillRect(10,10,100,50);
};

/*
 * Exercise 4.
 */

const drawTriangle = function() {
  const canvas = document.getElementById('student-canvas-4');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

let side1 = Number(prompt("Side 1: "));
let side2 = Number(prompt("Side 2: "));
let side3 = Number(prompt("Side 3: "));

let height = Math.min(side1, side2, side3);
let hypot = Math.max(side1, side2, side3);
let base = Math.sqrt((hypot*hypot) - (height*height));

while (((height*height) != (hypot*hypot) - (base*base)) || height > 512 || height < 1 || base > 1024 || base < 1 || hypot < 1 || isNaN(side1) || isNaN(side2) || isNaN(side3)) {

  if (side1 == 0 && side2 == 0 && side3 == 0) {
    break;
  }

  if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    alert("One of your sides is not a number.");
  } else if (base > 1024 || height > 512 || hypot > 1144) {
    alert("Your triangle won't fit on the canvas.");
  } else if ((hypot*hypot) != (height*height) + (base*base) || base == 0 || height == 0 || hypot == 0  || side1 + side2 + side3 - hypot - height != base) {
    alert("That's not a valid right triangle.");
  }

  side1 = Number(prompt("Side 1: "));
  side2 = Number(prompt("Side 2: "));
  side3 = Number(prompt("Side 3: "));

}

if (((height*height) == (hypot*hypot) - (base*base)) && base <= 1024 && height <= 512 && hypot <= 1144 && height > 0 && base > 0 && hypot > 0) {
  context.beginPath();
  context.moveTo(25, 25);
  context.lineTo(25, height + 25);
  context.lineTo(base + 25, height + 25);
  context.closePath();
  context.stroke();
}

};

/*
 * Exercise 5.
 */

const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

let face = prompt("Radius: ");

while (face < 32 || face > (canvas.height / 2) || isNaN(face)) {

  if (face == null) {
    break;
  }

  if (isNaN(face)) {
    alert("Your radius is not a number.");
  }

  face = Number(face);

  if (face < 32) {
    alert("Your radius must be at least 32.");
  }

  if (face > (canvas.height / 2)) {
    alert("Your smiley face won't fit on canvas.");
  }

  face = prompt("Radius: ");
}

face = Number(face);
let eyes = Number(face * 0.15);
let lips = Number(face * 0.7);

context.beginPath();
context.arc(512, 256, face, 0, 2 * Math.PI);
context.closePath();
context.stroke();

context.beginPath();
context.arc(512, 256, lips, 0, Math.PI);
context.stroke();

context.beginPath();
context.arc((face * 0.4) + 512, 256 - (face * 0.4), eyes, 0, 2 * Math.PI);
context.closePath();
context.stroke();

context.beginPath();
context.arc(512 - (face * 0.4), 256 - (face * 0.4), eyes, 0, 2 * Math.PI);
context.closePath();
context.stroke();

};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  const canvas = document.getElementById('student-canvas-6');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);

var distance = 0
var height = 0
var row = 0
var column = 0
var counter = 5

do {
var block = prompt("Side: ");

if (block < 1) {
  alert("Your block size must be at least 1.");
} else if (block > canvas.height || block > canvas.width){
  alert("Your pyramid won't fit on canvas.");
} else if (isNaN(block)){
  alert("Your block size is not a number.");
}

} while (block < 1 || block > canvas.height || block > canvas.width || isNaN(block));

for (i = 5; i > 0; i--) {
counter = i
while(counter >= 1) {
  context.beginPath();
  context.rect(10 + Number(distance), (502 - block) - Number(height), Number(block), Number(block));
  context.stroke();
  context.closePath();
  distance = Number(distance) + Number(block);
  counter--;
}
row++;
distance = row * (1/2 * block);
column++;
height = column * block;
}

};
