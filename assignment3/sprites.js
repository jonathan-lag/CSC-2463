let spriteSheet;
let spriteSheet2;

let walkingAnimation;
let walkingAnimation2;

function preload() {
    spriteSheet = loadImage("assets/SpelunkyGuy.png")
    spriteSheet2 = loadImage("assets/Bowser.png")
}

function setup() {
    createCanvas(600, 600);
    imageMode(CENTER);

    walkingAnimation = new WalkingAnimation(spriteSheet, 80, 80, 200, 200, 9, 0, 0);
    walkingAnimation2 = new WalkingAnimation(spriteSheet2, 84, 75, 100, 300, 16, 0, 2);
}

function draw() {
    background(200);
    
    walkingAnimation.draw();
    walkingAnimation2.draw();
}

function keyPressed() {
    walkingAnimation.keyPressed(RIGHT_ARROW, LEFT_ARROW);
    walkingAnimation2.keyPressed(RIGHT_ARROW, LEFT_ARROW);
}

function keyReleased() {
    walkingAnimation.keyReleased(RIGHT_ARROW, LEFT_ARROW);
    walkingAnimation2.keyReleased(RIGHT_ARROW, LEFT_ARROW);
}

class WalkingAnimation {
    constructor(spritesheet, sw, sh, dx, dy, animationLength, offsetX = 0, offsetY = 0) {
        this.spritesheet = spritesheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = offsetX;
        this.v = offsetY;
        this.animationLength = animationLength;
        this.currentFrame = 0;
        this.moving = 0;
        this.xDirection = 1;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }

    draw() {
        //if (this.moving != 0) {
        //   this.u = this.currentFrame % this.animationLength;
        //} else {
        //    this.u = 0;
        //}
        
        this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;
        
        push();
        translate(this.dx, this.dy);
        scale(this.xDirection, 1);
        image(this.spritesheet, 0, 0, this.sw, this.sh, this.u*this.sw, this.v*this.sh, this.sw, this.sh);
        pop();

        if (frameCount % 6 == 0) {
            this.currentFrame++; 
        }  

        this.dx += this.moving;

    }

    keyPressed(right, left) {
        if (keyCode === right) {
            this.moving = 1;
            this.xDirection = 1;
            this.currentFrame = 1;
        } else if (keyCode === left) {
            this.moving = -1;
            this.xDirection = -1;
            this.currentFrame = 1;
        }
    }

    keyReleased(right, left) {
        if (keyCode === right || keyCode === left) {
            this.moving = 0;
        }
    }
}