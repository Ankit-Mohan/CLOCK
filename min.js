mins()
{
angleMode(DEGREES);
h = hour();
m = minute();
s = second();
translate(400,200)
rotate(-90);
push();  
mangle = map(m,0,60,0,360);
strokeWeight(10);
stroke("green")
arc(0,0,300,300,0,mangle);
rotate(mangle)
line(0,0,80,0)  
pop();
}