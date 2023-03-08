let img;
let clicked = false;

let sequence1, simpSynth;
let bgMelody = ["E5","0","E5","0","E5","C2","C0","0","C0","0","C0","0"];
let toneStart = 0;

function preload() {
  img = loadImage("assets/alarm.gif");

}

function setup() {
  createCanvas(600, 600);

  simpSynth = new Tone.Synth({oscillator: {type: "sawtooth"}, envelope: {attack: 0, decay: 0, sustain: 1, release: 10}}).toDestination();

  sequence1 = new Tone.Sequence(function(time, note) { simpSynth.triggerAttackRelease(note, 0.5); }, bgMelody, '8n');
  Tone.Transport.bpm.value = 60;
  Tone.Transport.start();
  Tone.Transport.loop = false;
  Tone.Transport.loopStart = 0;
  Tone.Transport.loopEnd = '2:0:0';
  
  alarmSound();

}


function draw() {
  background(50);
  if (clicked == true) {
      image(img,  50, 125);
  }
  textSize(30);
  textAlign(CENTER);
  fill(255);
  text('Click the screen to do what we all', width/2, 50);
  text('wish we could do every morning!', width/2, 100);
}

function alarmSound() {
  sequence1.start();
}


function mouseClicked() {
  clicked = true;
  if (toneStart == 0) {
    Tone.start();
    toneStart = 1;
  }
}
