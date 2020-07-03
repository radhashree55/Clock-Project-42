var hr,mn,sc,hrAngle,mnAngle,scAngle;

function setup() {
  createCanvas(500,500);

   hr = hour();
   mn = minute();
   sc = second();
}

function draw() {
  background(0);  

  scAngle = map(sc,0,60,0,360);
  push();
  translate(230,230);
  angleMode(DEGREES);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  mnAngle = map(mn,0,60,0,360);
  push();
  translate(230,230);
  angleMode(DEGREES);
  rotate(mnAngle);
  stroke(0,255,50);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  hrAngle = map(hr,0,60,0,360);
  push();
  translate(230,230);
  angleMode(DEGREES);
  rotate(hrAngle);
  stroke(0,55,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();

  drawSprites();
}
