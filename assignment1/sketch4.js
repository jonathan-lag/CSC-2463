function setup() {
    createCanvas(400, 400);
  }
  
  
  function draw() {
    background(0, 0, 125);
  
    strokeWeight(5);
    stroke(255);
    fill(0, 150, 50);
    ellipse(200, 200, 240, 240);
    fill(255, 0, 0);
  
  
    push();
    translate(width * 0.5, height * 0.5);
    rotate(180);
    star(0, 0, 120, 45, 5);
    pop();
  }
  
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  