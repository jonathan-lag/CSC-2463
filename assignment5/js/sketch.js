let sounds = new Tone.Players({

  "arrow": "sounds/arrow2.wav",
  "baby": "sounds/baby_x.wav",
  "boing": "sounds/boing_poing.wav",
  "drip": "sounds/water.mp3",
  "money": "sounds/cash_register_x.wav",
  "tape": "sounds/ductTape.wav",
  "chicken": "sounds/chicken.wav",
  "charge": "sounds/charge.wav",
  "whopper": "sounds/whopper-ad.mp3",
  "sad sponge": "sounds/spongebob-fail.mp3"

})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["arrow", "baby", "boing", "drip", "money"];
let soundNames2 = ["tape", "chicken", "charge", "whopper", "sad sponge"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(500, 400);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index*100 + 10, index + 40);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  soundNames2.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index*95 + 10, index + 85);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0., 1., 0.5, 0.05);
  dSlider.position(75, 350);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.position(250, 350);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })


}

function draw() {
  background(50, 120, 180);
  push();
  textSize(20);
  text('Click the buttons above to play a sound!', 80, 150)
  pop();
  push();
  textSize(15);
  text('Use the sliders below to distort the sounds!', 90, 300)
  pop();
  text('Delay Time Slider', 95, 385)
  text('Feedback Slider', 275, 385)

}

function buttonSound(whichSound) {
    sounds.player(whichSound).start();
}