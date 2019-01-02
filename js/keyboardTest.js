class Sound {
  constructor(context) {
    this.context = context;
  }
  init() {
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);
  }
  play(value, time) {
    this.init();
    this.oscillator.frequency.value = value;
    this.gainNode.gain.setValueAtTime(1, this.context.currentTime);
    this.oscillator.start(time);
    this.stop(time);
  }
  stop(time) {
    this.gainNode.gain.exponentialRampToValueAtTime(0.8, time + 1);
    this.oscillator.stop(time + 1); //länge des Notenklanges
  }
}

function getMelody() {
  //            c      d      e      f      g    a     h     c"     d"     f"   insg: 9 Stk: [0-8]
  var notes = [261.6, 293.7, 329.6, 349.2, 392, 440, 493.9, 523.3, 587.3, 659.3];
  let context = new (window.AudioContext || window.webkitAudioContext)();
  let note = new Sound(context);
  let now = context.currentTime;
  let letGain = context.createGain();


  if(javaBirthMonth < 2) {

    note.play(notes[0], now + 1);
    note.play(notes[1], now + 2);
    note.play(notes[2], now + 3);
    note.play(notes[3], now + 4);
    note.play(notes[4], now + 5);
    note.play(notes[5], now + 6);
    note.play(notes[6], now + 7);
    note.play(notes[7], now + 8);
    note.play(notes[8], now + 9);

    note.play(notes[0], now + 11);
    note.play(notes[1], now + 12);
    note.play(notes[2], now + 13);
    note.play(notes[3], now + 14);
    note.play(notes[4], now + 15);
    note.play(notes[5], now + 16);
    note.play(notes[6], now + 17);
    note.play(notes[7], now + 18);
    note.play(notes[8], now + 19);
  }


  else if (javaBirthMonth > 1) {
    note.play(notes[0], now + 1);
    note.play(notes[0], now + 1.5);
    note.play(notes[0], now + 2);
    note.play(notes[0], now + 2.5);
    note.play(notes[0], now + 3);
    note.play(notes[0], now + 3.5);
    note.play(notes[3], now + 4);
    note.play(notes[3], now + 4.5);
    note.play(notes[3], now + 5);
    note.play(notes[3], now + 5.5);
    note.play(notes[0], now + 6);
    note.play(notes[3], now + 6.5);
    note.play(notes[3], now + 7);
    note.play(notes[3], now + 7.5);
    note.play(notes[3], now + 8);
    note.play(notes[0], now + 8.5);
    note.play(notes[1], now + 9);
    note.play(notes[1], now + 9.5);
    note.play(notes[1], now + 10);
    note.play(notes[1], now + 10.5);
    note.play(notes[2], now + 11);
    note.play(notes[2], now + 11.5);
    note.play(notes[1], now + 12);
    note.play(notes[1], now + 12.5);
    note.play(notes[1], now + 13);
    note.play(notes[1], now + 13.5);
    note.play(notes[0], now + 14);
  }
}

document.getElementById("playMySong").addEventListener("click", function (e) {
    getMelody();
});
