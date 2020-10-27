/*
   self portrait v1
   by Carl Charleston
*/

function setup() {
	createCanvas(600, 300);
}

function draw() {
	background( 'red');

	// face
	noStroke();
	fill(245, 219, 19);
    square(240, 10, 300);


    // eyes
    fill("INDIANRED");
	circle(330, 120, 100); // left
	fill("#F82121"); // similar to indianred
	ellipse(480, 120, 100, 50); // right

	// mouth
	stroke("INDIANRED");
	strokeWeight (10);
	noFill();
	rect(350, 250, 100, 20, 10);

	//hair
	stroke(238, 51, 51); // brownish red
	line(300, 20, 330, 77);
	line(320, 20, 350, 77)
	line(340, 20, 370, 77)
	line(360, 20, 390, 77)
	line(380, 20, 410, 77)
	line(400, 20, 430, 77)
	line(420, 20, 450, 77)

}