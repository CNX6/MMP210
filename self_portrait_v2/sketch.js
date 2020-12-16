/*
   self portrait v2
   by Carl Charleston
*/

// global scope
var x = 260; // character origin
var y = 100;

var leftEyeX = 230; // statement
var rightEyeX = 300;

var eyeSize = 100;
var mouthSize = eyeSize;

var faceRed = 205;
var faceGreen = 123;
var faceBlue = 26;

function setup() {
	createCanvas(600, 300);
}

function draw() {
	background( 'red');

 	x = mouseX;
 	y = mouseY;

	//hair
	fill(0,0,0);
	noStroke();
	circle(x, y, 260);
    
	//face
	fill(205, 123, 26); 
	circle(x, y + 100, 150);


	//eye
	fill(254, 253, 253); // left
	circle(x - 30, y + 100, 30);
    
	fill (254, 253, 253);
	circle (x + 40, y + 100, 30); // right

	//mouth
	stroke("INDIANRED");
	strokeWeight(10);
	noFill();
	ellipse(x + 10, y + 140, 60, 30);


    // visualize origin
    stroke ('pink');
	circle (x, y, 10);
	
}