function setup() {
    createCanvas(800, 400);
  }
  
  
  function draw() {
    background(0);
    noStroke();
  
  
    // pacman
    fill(255, 255, 0);
    arc(200, 200, 351, 351, PI * -0.75, PI * 0.75);
  
  
    // ghost body
    fill(255, 0, 0);
    circle(600, 200, 350);
    rect(425, 200, 350, 175);
  
  
    // ghost eyes white
    fill(255);
    circle(510, 200, 100);
    circle(690, 200, 100);
  
  
    // ghost eyes blue
    fill(0, 0, 255);
    circle(510, 200, 50);
    circle(690, 200, 50);
   
  }
  