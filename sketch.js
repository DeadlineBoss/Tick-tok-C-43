var hours,min,sec;
var secAngle,minAngle,hoursAngle;


function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  
  hours = hour();
  min = minute();
  sec = second();

  fill(255);
  textSize(30);
  var day = hours%12 > 12 ? "AM" : "PM";
  text(hours%12 + ":" + min + ":" +sec +" " +day, 600,50);

  secAngle = map(sec,0,60,0,360);
  minAngle = map(min,0,60,0,360);
  hoursAngle = map(hours%12,0,12,0,360);

  translate(width/2,height/2);
  rotate(-90);

  push();
  rotate(secAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hoursAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();

  stroke(255,0,0);
  arc(0,0,300,300,0,secAngle);
  
  stroke(0,255,0);
  arc(0,0,280,280,0,minAngle);

  stroke(0,0,255);
  arc(0,0,260,260,0,hoursAngle);
}