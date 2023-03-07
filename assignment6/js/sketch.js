let slider;

const synth = new Tone.AMSynth();
const reverb = new Tone.JCReverb(0);
synth.connect(reverb);

let notes = {

  'a': 'C4',
  's': 'D4',
  'd': 'E4',
  'f': 'F4',
  'g': 'G4',
  'h': 'A4',
  'j': 'B4',
  'k': 'C5'

}

function setup() {
  createCanvas(400, 400);

  slider = new Nexus.Slider("#slider");
  reverb.toDestination();

  synth.toDestination();

  slider.on('change', (v) =>  {
    reverb.roomSize.value = v;
  }); 

}

function draw() {
  background(220);
  textSize(15);
  text('Use your keyboard keys a-k to play notes!', 50, 150);
  text('Reverb slider', 10, 20);
}

function keyPressed() {
  let whatNote = notes[key]
  // console.log(whatNote);
  synth.harmonicity.value = 5;
  synth.triggerAttackRelease(whatNote, "8n");
}