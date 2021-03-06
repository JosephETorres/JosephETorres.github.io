function setup() {
  createCanvas(500, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  // Draw a circle
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 127);
  ellipse(460, 200, 50, 50);
}


// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 400, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  // roof
  stroke(0);
  fill(200,200,0);
  triangle(75, 150, 327, 152, 200, 40);
  
  // house
  fill(200,200,100);
  rect(75,150,250,250);
  
  // door
  fill(150,100,0);
  rect(163,250, 75,150);
  
  // window 1
  fill(0,0,0);
  rect(90,175, 60,80);
  
  // window 2
  fill(0,0,0);
  rect(250,175, 60,80);
  
  // door knob
  fill(50,50,50);
  noStroke();
  ellipse(220, 330, 15,15);
  
  // sun
  noStroke();
  fill(255,225,0);
  ellipse(60,60,75,75);
  
    // top of post light
  stroke(0);
  fill(100,100,100);
  triangle(480, 175, 440, 175, 460, 150);
  
    // bottom of post light
  fill(100,100,100);
  rect(455,200,10,350);
  
  textSize(32);
text('Hello!', 400, 30);
}