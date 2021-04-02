var hr, min , sec, hrangle, minangle, secangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
 

  hr = hour();
  min = minute();
  sec = second();

  translate(350,250);
  rotate(-90);
  strokeWeight(7);
  stroke("red")
  secangle = map(sec,0,60,0,360)

  strokeWeight(7);
  stroke("purple")
  minangle = map(min,0,60,0,360)

  strokeWeight(7);
  stroke("blue")
  hrangle = map(hr % 12,0,12,0,360)
  
  push()
  //drawing seconds hand 
  push();
   rotate(secangle);
    stroke(255,0,0); 
    strokeWeight(5); 
    line(0,0,150,0);
     pop() 
     //drawing minutes hand
      push();
       rotate(minangle);
        stroke(0,255,0);
         strokeWeight(7.5); 
         line(0,0,115,0); 
         pop() 
         //drawing hour hand 
         push();
          rotate(hrangle); 
          stroke(0,0,255); 
          strokeWeight(10); 
          line(0,0,75,0);
           pop() 
           stroke(255,0,255);
            point(0,0) 
            //drawing the arcs
             strokeWeight(5); noFill(); 
             //Seconds 
             stroke(255,0,0); 
             arc(0,0,400,400,0,secangle); 
             //Minutes 
             strokeWeight(7.5);
              stroke(0,255,0); 
              arc(0,0,370,370,0,minangle);
               //Hour
                strokeWeight(10);
                 stroke(0,0,255); 
arc(0,0,340,340,0,hrangle);
 drawSprites();
}