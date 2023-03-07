let minion;

function preload() {
  minion = loadImage("assets/minionbonk.gif");
}

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(50);
  
}


function mouseClicked() {
  imageMode(CENTER);
  image(minion, 100, 100);
}