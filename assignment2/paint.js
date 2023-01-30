function showButton(col, x, y) {
    noStroke();
    fill(col);
    square(x, y, 30);
    if (dist (x, y, mouseX, mouseY) < 30 && mouseIsPressed) {
      selectedColor = col;
      
    }
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    
    background(240);
    
  }
  
  var colors = ['red', 'orange', 'yellow', 'lime', 'aqua', 'blue', 'magenta', 'tan', 'saddlebrown', 'white', 'black'];
  var selectedColor = 'red';
  
  function draw() {
    /*noStroke();
    fill('red');
    square(3, 3, 30);
    fill('orange');
    square(3, 36, 30);
    fill('yellow');
    square(3, 69, 30);
    fill('lime');
    square(3, 102, 30);
    fill('aqua');
    square(3, 135, 30);
    fill('blue');
    square(3, 168, 30);
    fill('magenta');
    square(3, 201, 30);
    fill('saddlebrown');
    square(3, 234, 30);
    fill('white');
    square(3, 267, 30);
    fill('black');
    square(3, 300, 30); */
  
    for (var i = colors.length - 1; i >= 0; i--) {
      var color = colors[i];
      showButton(color, 3, 3+i*33);
    }
  
    if (mouseIsPressed) {
      //noStroke();
      if (mouseX < 45 && mouseY < 340) {
        fill(245);   
      } else {
        push();
        strokeWeight(10);
        stroke(selectedColor);
        line(pmouseX, pmouseY, mouseX, mouseY);
        pop();
      }
    }
  }