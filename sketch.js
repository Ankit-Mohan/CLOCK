var h;
var m;
var s;
var sangle;
function setup() {
  createCanvas(800,400);

}

function draw() {
  background("black");  
  angleMode(DEGREES);
h = hour();
m = minute();
s = second();
fill("black")
translate(400,200)
rotate(-90);
push();  
hangle = map(h%12,0,12,0,360);
strokeWeight(10);
stroke("red")
arc(0,0,350,350,0,hangle);
pop();
push();  
mangle = map(m,0,60,0,360);
strokeWeight(10);
stroke("green")
arc(0,0,300,300,0,mangle);
pop();
push();
sangle = map(s,0,60,0,360);
strokeWeight(10);
stroke("blue")
arc(0,0,250,250,0,sangle);
pop();
lines();
}

function lines(){
  angleMode(DEGREES);
strokeWeight(10);
stroke("red");
rotate(hangle-20);
line(0,0,70,0); 
stroke("green");
rotate(mangle-20);
line(0,0,80,0);
stroke("blue");
rotate(sangle-20);
line(0,0,90,0); 
}