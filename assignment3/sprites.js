let sprite;
function setup() {
    createCanvas(600, 600);
    sprite = createSprite(width/2, height/2, 100, 100);
}

function draw() {
    background(200);
    drawSprites();
}