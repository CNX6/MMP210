/*
    debug exercise
*/

var faceSize = "one hundred" * 3;

function setup() {
    createCanvas(640, 480);
    background(50);
    noStroke();
    fill("lightblue");
    ellipse(350, 300, 300, 300); // face

    fill(0, 0, 0);
    ellipse (430, 250, 100, 50); // right eye
    ellipse(280, 250, 100); // left eye
    ellipse(358, 330, 100, 50); // mouth

    fill("white");
    ellipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont("monospace");
    text("Nice work!", 65, 110);
}
