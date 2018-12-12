var context = new (window.AudioContext || window.webkitAudioContext)();
var gain = context.createGain();
var audioBuffers = [];
var BaseBeat;

for (let i = 0; i < 3; i++) {
   getAudioData(i);
}
function getAudioData(i) {
    var audioBuffer,
        request = new XMLHttpRequest();

        //Wählt Sounds vom Server je nach ausgewählter Augenfarbe:
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

// Der Tag der Geburt bestimmt den Grundbeat(1-31):
function getBaseBeat() {
    var audioBuffer,
        request = new XMLHttpRequest();
        request.open('GET',  "sounds/bg/bg" + (javaGeburtstag) + ".wav", true);
        request.responseType = 'arraybuffer';
        request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            BaseBeat = buffer;
        });
    };
    request.send();
}

function playBeat(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(gain);
    gain.connect(context.destination);
    source.start(time);
}

function playExtras() {
    var tempo = (javaGeburtsmonat)*10, // BPM (beats per minute)
        eighthNoteTime = (60 / tempo) / 2,
        startTime = context.currentTime,
        bassdrum = audioBuffers[0],
        snaredrum = audioBuffers[1],
        hihat = audioBuffers[2];

    for (var takt = 0; takt < 2; takt++) {
        var time = startTime + takt * 8 * eighthNoteTime;
        //Play the bass drum on beats 1, 5
        playBeat(bassdrum, time + 0 * eighthNoteTime);
        playBeat(bassdrum, time + 1 * eighthNoteTime);
        playBeat(bassdrum, time + 4 * eighthNoteTime);

        // Play the snare drum on beats 3, 7
        playBeat(snaredrum, time + 2 * eighthNoteTime);
        playBeat(snaredrum, time + 3.5 * eighthNoteTime);
        playBeat(snaredrum, time + 4.5 * eighthNoteTime);
        playBeat(snaredrum, time + 6 * eighthNoteTime);
        playBeat(snaredrum, time + 7.5 * eighthNoteTime);

        // Play the hi-hat every eighth note.
        for (var i = 0; i < 8; ++i) {
          playBeat(hihat, time + i * eighthNoteTime);
        }
    }
}

function playBackgroundBeat() {
    var tempo = (javaGeburtsmonat)*10, // BPM (beats per minute)
        eighthNoteTime = (60 / tempo) / 2,
        startTime = context.currentTime,
        BaseBeat;

    for (var takt = 0; takt < 2; takt++) {
        var time = startTime + takt * 8 * eighthNoteTime;

        // Spiel den BaseBeat und loop selbigen:
        playBeat(BaseBeat, time + 0 * eighthNoteTime);
      }
}

document.getElementById("gainSlider").addEventListener("input", function (e) {
    var gainValue = (this.value / 20);
    gain.gain.value = gainValue;
});

document.getElementById("spielmeinsound").addEventListener("click", function (e) {
    playBackgroundBeat();
    playExtras();
});
