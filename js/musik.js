var context = new AudioContext();
var audioBuffers = [];
for (let i = 0; i < 3; i++) {
   getAudioData(i);
}

function getAudioData(i) {
    var audioBuffer,
        request = new XMLHttpRequest();

        if(javaAugenfarbe == 1){
          request.open('GET',  "sounds/drumsounds/sound" + (i + 1) + ".wav", true);
        }
        else if (javaAugenfarbe == 2) {
          request.open('GET',  "sounds/box2/lead" + (i + 1) + ".wav", true);
        }
        else if (javaAugenfarbe == 3) {
          request.open('GET',  "sounds/box3/perc" + (i + 1) + ".wav", true);
        }
        else if (javaAugenfarbe == 4) {
          request.open('GET',  "sounds/box4/snare" + (i + 1) + ".wav", true);
        }
        else if (javaAugenfarbe == 5) {
          request.open('GET',  "sounds/box4/snare" + (i + 1) + ".wav", true);
        }

        request.responseType = 'arraybuffer';
        request.onload = function () {
        var undecodedAudio = request.response;

        context.decodeAudioData(undecodedAudio, function (buffer) {
            audioBuffers[i] = buffer;
        });
    };
    request.send();
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(time);
}

function playBeat() {
    var tempo = (javaGeburtsmonat)*10, // BPM (beats per minute)
        eighthNoteTime = (60 / tempo) / 2,
        startTime = context.currentTime,
        bassdrum = audioBuffers[0],
        snaredrum = audioBuffers[1],
        hihat = audioBuffers[2];

    for (var takt = 0; takt < 2; takt++) {
        var time = startTime + takt * 8 * eighthNoteTime;
        // Play the bass drum on beats 1, 5
        playSound(bassdrum, time + 0 * eighthNoteTime);
        playSound(bassdrum, time + 1 * eighthNoteTime);
        playSound(bassdrum, time + 4 * eighthNoteTime);

        // Play the snare drum on beats 3, 7
        playSound(snaredrum, time + 2 * eighthNoteTime);
        playSound(snaredrum, time + 3.5 * eighthNoteTime);
        playSound(snaredrum, time + 4.5 * eighthNoteTime);
        playSound(snaredrum, time + 6 * eighthNoteTime);
        playSound(snaredrum, time + 7.5 * eighthNoteTime);

        // Play the hi-hat every eighth note.
        for (var i = 0; i < 8; ++i) {
          playSound(hihat, time + i * eighthNoteTime);
        }
      }
}

document.getElementById("spielmeinsound").addEventListener("click", function (e) {
    playBeat();
});

// LautstärkeRegler
var VolumeSample = {};
// Gain node needs to be mutated by volume control.
VolumeSample.gainNode = null;

VolumeSample.play = function() {
  if (!context.createGain)
    context.createGain = context.createGainNode;
  this.gainNode = context.createGain();
  var source = context.createBufferSource();
  source.buffer = BUFFERS.techno;

  // Connect source to a gain node
  source.connect(this.gainNode);
  // Connect gain node to destination
  this.gainNode.connect(context.destination);
  // Start playback in a loop
  source.loop = true;
  if (!source.start)
    source.start = source.noteOn;
  source.start(0);
  this.source = source;
};

VolumeSample.changeVolume = function(element) {
  var volume = element.value;
  var fraction = parseInt(element.value) / parseInt(element.max);
  // Let's use an x*x curve (x-squared) since simple linear (x) does not sound as good.
  this.gainNode.gain.value = fraction * fraction;
};

VolumeSample.stop = function() {
  if (!this.source.stop)
    this.source.stop = source.noteOff;
  this.source.stop(0);
};

VolumeSample.toggle = function() {
  this.playing ? this.stop() : this.play();
  this.playing = !this.playing;
};
