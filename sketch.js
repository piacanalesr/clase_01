var d; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  frameRate(100);
  //esto es para la velocidad 
  
}

function draw() {
  d = random (10,100);
  noStroke();
  fill(255,d);
  //1er numero color y segundo opacidad
  ellipse (mouseX, mouseY ,d,d);
  
  
}
