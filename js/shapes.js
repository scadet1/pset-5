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
}

/*
 * Exercise 1.
 */

const sayHello = function() {
const canvas = document.getElementById('student-canvas-1');
const context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
let message = ""

do {
  message = String(prompt("Message: "))

  if (message.length > 50) {
    alert("Your message too long. Keep it under 50 characters.");
  }

} while (message.length > 50)
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
    // write your exercise 4 code here
};

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
