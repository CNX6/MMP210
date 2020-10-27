/*
   self portrait v2
   by Carl Charleston
*/

function setup() {
	createCanvas(600, 300);
}

function draw() {
	background( 'red');

	//hair
	fill(0,0,0);
	noStroke();
	circle(260, 100, 260);


	//face
	fill(205, 123, 26);
	circle(260, 200, 150);

	//eye
	fill(254, 253, 253); // left
	circle(230, 200, 30);
	fill (254, 253, 253);
	circle (300, 200, 30); // right

	//mouth
	stroke("INDIANRED");
	strokeWeight(10);
	noFill();
	ellipse(270, 240, 60, 30);
	

}