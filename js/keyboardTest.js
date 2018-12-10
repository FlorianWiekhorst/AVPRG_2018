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
    this.gainNode.gain.exponentialRampToValueAtTime(0.1, time + 1);
    this.oscillator.stop(time + 1); //länge des Notenklanges
  }
}

function getMelodie() {

  var noten = [261.6, 293.7, 329.6, 349.2, 392, 440, 493.9, 523.3, 587.3, 659.3, 0];

  let context = new (window.AudioContext || window.webkitAudioContext)();
  let note = new Sound(context);
  let now = context.currentTime;

if(geburtsmonat == 4)

  note.play(noten[0], now + 0.5);
  note.play(noten[4], now + 1.5);
  note.play(noten[5], now + 2.5);
  note.play(noten[2], now + 3);
  note.play(noten[3], now + 3.5);
  note.play(noten[3], now + 4);
  note.play(noten[4], now + 4.5);
  note.play(noten[10], now + 6);
  note.play(noten[4], now + 8);
  note.play(noten[4], now + 9);
  note.play(noten[5], now + 10);
  note.play(noten[2], now + 11.5);
  note.play(noten[3], now + 12.5);
  note.play(noten[3], now + 13.5);
  note.play(noten[4], now + 15);
  note.play(noten[8], now + 15.5);
}


// function playMelodie() {
//     var tempo = (javaGeburtsmonat)*10, // BPM (beats per minute)
//         eighthNoteTime = (60 / tempo) / 2,
//         startTime = context.currentTime,
//         // Liste mit KeyboardNoten
//         var pianoNoten = {261.6,293.7,329.6,349.2,392,440,493.9,523.3,587.3,659.3}
//         };
//
//     for (var takt = 0; takt < 2; takt++) {
//         var time = startTime + takt * 8 * eighthNoteTime;
//         // Play the bass drum on beats 1, 5
//         getMelodie(pianoNoten[3], time + 0 * eighthNoteTime);
//         getMelodie(pianoNoten[7], time + 1 * eighthNoteTime);
//       }
// }

document.getElementById("spielmeinsound").addEventListener("click", function (e) {
    getMelodie();
});
