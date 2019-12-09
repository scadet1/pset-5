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
    const rectangle = document.getElementById('student-canvas-2');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);

  do {

    var width = prompt("Width: ");
    var height = prompt("Height: ");
    var x = prompt("X=coordinate: ");
    var y prompt("Y-coordinate: ");

    if (width > 1024 || width < 1) {
      if (width == null) {
        break;
      }
      alert("Your width must be between 1 and 1024.");
    } else if (height > 512 || height < 1) {
      if (height == null) {
        break;
      }
    }

    (isNan(width) || isNan(height) || isNan(x) || isNan(y)){

    }

    }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
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
