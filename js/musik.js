var context = new (window.AudioContext || window.webkitAudioContext)();
var analyser = context.createAnalyser();
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;
var gainNode = context.createGain();
var convolver = context.createConvolver();
var distortion = context.createWaveShaper();
    distortion.curve = makeDistortionCurve(0);
    distortion.oversample = "4x";
var compressor = context.createDynamicsCompressor();
var filter = context.createBiquadFilter();
var audioBuffers = [];
var isPlaying = false;
var soundSource;
var source;
var stream;
var tempo;

function makeDistortionCurve(amount) {
    var n_samples = 44100,
        curve = new Float32Array(n_samples);
    for (var i = 0; i < n_samples; ++i ) {
        var x = i * 2 / n_samples - 1;
        curve[i] = (Math.PI + amount) * x / (Math.PI + (amount * Math.abs(x)));
    }
    return curve;
};

for (var i = 0; i < 26; i++) {
   getAudioData(i);
}

function getAudioData(i) {
    var audioBuffer,
        request = new XMLHttpRequest();
        
        if(i < 13){
          request.open('GET',  "sounds/klavier/" + (i + 1) + ".wav", true);
        }
        
        if (i > 12) {
          request.open('GET',  "sounds/kick/k" + (i - 12) + ".wav", true);
        }
        request.responseType = 'arraybuffer';
        request.onload = function () {
        var undecodedAudio = request.response;
        context.decodeAudioData(undecodedAudio, function (buffer) {
            audioBuffers[i] = buffer;
            soundSource = context.createBufferSource();
        });
    };
    request.send();
}

// set up canvas context for visualizer
var canvas = document.querySelector('.visualisierungsBox');
var canvasCtx = canvas.getContext("2d");
var intendedWidth = document.querySelector('.mainArea').clientWidth;
    canvas.setAttribute('width',intendedWidth);
var drawVisual;


// visualizer
function visualize() {
    WIDTH = canvas.width;
    HEIGHT = canvas.height;
    analyser.fftSize = 8192;
    var bufferLengthAlt = analyser.frequencyBinCount;
    var dataArrayAlt = new Uint8Array(bufferLengthAlt);
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    var draw = function() {
      drawVisual = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArrayAlt);
      canvasCtx.fillStyle = 'rgba(0,0,0,0.7)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

      var barWidth = (WIDTH / bufferLengthAlt) * 4;
      var barHeight;
      var x = 0;

      for(var i = 0; i < bufferLengthAlt; i++) {
        barHeight = dataArrayAlt[i];
        //Change bar-Color inside visualizer with Gender:
        if(javaGender == 1){
          canvasCtx.fillStyle = 'rgb(' + (barHeight+120) + ',20,147)';
        }
        else if (javaGender == 2) {
          canvasCtx.fillStyle = 'rgb(255,' + (barHeight+130) + ',0)';
        }
        else if (javaGender == 3) {
          canvasCtx.fillStyle = 'rgb(0,' + (barHeight+150) + ',0)';
        }

        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight/1.2);

        x += barWidth + 1;
      }
    };
    draw();
}

// User-Age defines the tempo
// We get values from 1918 to 2017
  if(javaBirthYear < 1930){tempo = 55;}
  else if (javaBirthYear > 1929 && javaBirthYear < 1949) {tempo = 60;}
  else if (javaBirthYear > 1948 && javaBirthYear < 1959) {tempo = 65;}
  else if (javaBirthYear > 1958 && javaBirthYear < 1969) {tempo = 70;}
  else if (javaBirthYear > 1968 && javaBirthYear < 1979) {tempo = 75;}
  else if (javaBirthYear > 1978 && javaBirthYear < 1989) {tempo = 80;}
  else if (javaBirthYear > 1988 && javaBirthYear < 1999) {tempo = 90;}
  else if (javaBirthYear > 1998 && javaBirthYear < 2009) {tempo = 95;}
  else if (javaBirthYear > 2008) {tempo = 100;}


function playBeat(buffer, time) {
    source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(distortion);
    distortion.connect(compressor);
    compressor.connect(filter);
    filter.connect(analyser);
    analyser.connect(context.destination);
    source.start(time);
}

function playBackgroundSound() {
    isPlaying = true;
    var y = javaBirthDay,
        splitter = (60 / tempo) / 2,
        now = context.currentTime;

    var allPiano = [  pi0  = audioBuffers[0], pi1  = audioBuffers[1], pi2  = audioBuffers[2],
                      pi3  = audioBuffers[3], pi4  = audioBuffers[4], pi5  = audioBuffers[5],
                      pi6  = audioBuffers[6], pi7  = audioBuffers[7], pi8  = audioBuffers[8],
                      pi9  = audioBuffers[9], pi10 = audioBuffers[10], pi11 = audioBuffers[11],
                      pi12 = audioBuffers[12]
                    ];

    var beats =  [  beat1   = audioBuffers[13], beat2   = audioBuffers[14], beat3   = audioBuffers[15],
                    beat4   = audioBuffers[16], beat5   = audioBuffers[17], beat6   = audioBuffers[18],
                    beat7   = audioBuffers[19], beat8   = audioBuffers[20], beat9   = audioBuffers[21],
                    beat10  = audioBuffers[22], beat11  = audioBuffers[23], beat12  = audioBuffers[24],
                    beat13  = audioBuffers[25]
                ];

    var arr1  = [4,11,7,6,13,6,5,12,3,5,9,6,3,8,6,10,12,2,5,4,4,0,4,0,11,2,10,13,8,8,2,10,5,9,11,13,12,6,9,10,8,13,12],
        arr2  = [2,1,8,13,6,1,9,13,8,3,10,13,8,10,9,2,8,13,1,4,4,3,13,13,7,0,4,2,9,8,5,13,3,3,11,11,7,2,3,10,5,13,9],
        arr3  = [1,7,12,4,6,7,12,4,10,11,6,0,8,2,1,9,13,2,1,0,13,7,6,4,10,2,8,9,1,7,8,2,10,4,12,6,13,6,10,11,13,10,4],
        arr4  = [8,11,2,7,13,10,4,8,13,12,2,6,9,13,12,7,1,6,10,4,9,13,4,9,12,2,6,10,1,6,9,12,13,2,7,10,12,6,7,13,11,9,4],
        arr5  = [8,6,12,13,8,4,0,1,10,12,8,11,6,13,7,5,11,7,3,13,0,9,11,7,10,5,13,13,10,8,12,6,13,11,10,4,2,7,10,13,6,4,2],
        arr6  = [7,4,6,13,11,2,8,3,13,9,6,8,11,5,13,4,2,4,6,3,13,9,6,7,10,13,3,7,4,9,11,10,10,5,13,9,5,8,1,13,3,4,7],
        arr7  = [5,5,12,10,1,7,13,13,4,11,4,6,5,2,13,5,11,3,6,3,13,10,7,12,3,6,11,4,1,13,2,2,6,10,13,11,11,7,3,13,12,9,5],
        arr8  = [10,1,2,13,13,12,6,12,7,1,7,5,13,3,5,2,6,13,2,13,11,7,13,1,6,9,9,5,13,2,6,8,13,6,5,13,9,3,12,13,2,1,5],
        arr9  = [1,1,5,2,8,4,13,3,10,2,4,13,10,3,5,11,1,12,12,8,12,2,13,13,6,1,4,8,3,8,1,10,6,3,5,8,4,5,7,1,1,13,11],
        arr10 = [5,2,13,13,10,8,10,13,8,4,2,8,13,13,2,12,4,4,7,1,6,1,2,9,13,8,3,8,10,6,13,7,1,7,13,7,4,2,13,5,8,13,9],
        arr11 = [13,8,1,1,4,13,9,6,12,7,12,4,10,3,2,12,11,11,1,9,7,7,10,12,11,1,13,10,2,2,1,12,7,5,8,12,9,6,13,6,6,12,13],
        arr12 = [7,4,8,1,10,13,7,10,11,6,2,9,4,13,4,7,13,5,2,11,12,2,5,12,3,3,2,11,10,9,12,11,3,1,2,13,6,10,8,13,10,3,7],
        arr13 = [4,13,8,12,8,13,4,9,12,8,2,12,9,13,8,2,7,7,12,5,5,5,10,2,11,8,2,2,9,13,8,8,12,13,13,6,1,4,4,13,8,5,11],
        arr14 = [2,11,9,9,13,5,9,12,10,11,1,2,1,5,13,1,7,6,2,10,6,4,3,13,2,9,13,9,6,10,9,2,7,1,11,13,8,13,12,5,13,4,4],
        arr15 = [3,2,13,8,12,8,4,11,1,2,5,8,7,6,3,7,2,13,7,4,5,4,1,6,1,12,10,12,3,11,9,12,7,2,4,6,5,6,3,7,9,6,1],
        arr16 = [8,1,13,7,13,6,9,6,4,7,10,10,9,6,2,1,13,13,1,11,3,13,1,9,10,6,13,2,11,13,11,8,5,6,4,13,4,1,5,11,6,13,11,4],
        arr17 = arr16.reverse(), arr18 = arr15.reverse(), arr19 = arr14.reverse(), arr20 = arr13.reverse(), arr21 = arr12.reverse(),
        arr22 = arr11.reverse(), arr23 = arr10.reverse(), arr24 = arr9.reverse(), arr25 = arr8.reverse(), arr26 = arr7.reverse(),
        arr27 = arr6.reverse(), arr28 = arr5.reverse(), arr29 = arr4.reverse(), arr30 = arr3.reverse(), arr31 = arr2.reverse();

// We had an array inside an array, but JS and WebAudioAPI would playback the tones super slow...
// So here is the larger "trash" solution:

    for (var clock = 0; clock < 4; clock++){
      var time = now + clock * 45 * splitter;

      if (y == 1) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr1[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr1[dot]], time + dot * splitter);
          }
        }
      } else if (y == 2) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr2[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr2[dot]], time + dot * splitter);
          }
        }
      } else if (y == 3) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr3[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr3[dot]], time + dot * splitter);
          }
        }
      } else if (y == 4) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr4[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr4[dot]], time + dot * splitter);
          }
        }
      } else if (y == 5) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr5[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr5[dot]], time + dot * splitter);
          }
        }
      } else if (y == 6) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr6[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr6[dot]], time + dot * splitter);
          }
        }
      } else if (y == 7) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr7[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr7[dot]], time + dot * splitter);
          }
        }
      } else if (y == 8) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr8[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr8[dot]], time + dot * splitter);
          }
        }
      } else if (y == 9) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr9[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr9[dot]], time + dot * splitter);
          }
        }
      } else if (y == 10) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr10[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr10[dot]], time + dot * splitter);
          }
        }
      } else if (y == 11) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr11[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr11[dot]], time + dot * splitter);
          }
        }
      } else if (y == 12) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr12[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr12[dot]], time + dot * splitter);
          }
        }
      } else if (y == 13) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr13[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr13[dot]], time + dot * splitter);
          }
        }
      } else if (y == 14) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr14[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr14[dot]], time + dot * splitter);
          }
        }
      } else if (y == 15) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr15[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr15[dot]], time + dot * splitter);
          }
        }
      } else if (y == 16) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr16[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr16[dot]], time + dot * splitter);
          }
        }
      } else if (y == 17) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr17[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr17[dot]], time + dot * splitter);
          }
        }
      } else if (y == 18) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr18[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr18[dot]], time + dot * splitter);
          }
        }
      } else if (y == 19) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr19[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr19[dot]], time + dot * splitter);
          }
        }
      } else if (y == 20) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr20[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr20[dot]], time + dot * splitter);
          }
        }
      } else if (y == 21) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr21[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr21[dot]], time + dot * splitter);
          }
        }
      } else if (y == 22) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr22[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr22[dot]], time + dot * splitter);
          }
        }
      } else if (y == 23) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr23[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr23[dot]], time + dot * splitter);
          }
        }
      } else if (y == 24) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr24[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr24[dot]], time + dot * splitter);
          }
        }
      } else if (y == 25) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr25[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr25[dot]], time + dot * splitter);
          }
        }
      } else if (y == 26) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr26[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr26[dot]], time + dot * splitter);
          }
        }
      } else if (y == 27) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr27[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr27[dot]], time + dot * splitter);
          }
        }
      } else if (y == 28) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr28[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr28[dot]], time + dot * splitter);
          }
        }
      } else if (y == 29) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr29[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr29[dot]], time + dot * splitter);
          }
        }
      } else if (y == 30) {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr30[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr30[dot]], time + dot * splitter);
          }
        }
      } else {
        for(dot=0; dot < 44; dot++){
          playBeat(allPiano[arr31[dot]], time + dot * splitter);
          if(dot % 2 == 0){
              playBeat(beats[arr31[dot]], time + dot * splitter);
          }
        }
      }
    }
  }

// Button
document.getElementById("playMySong").addEventListener("click", function (e) {
        playBackgroundSound();
        visualize();
        $("div.bonus1").delay(1200).fadeIn(600);
        $("div.bedienelemente").fadeOut(300);
 });

// Code for show/hide Bonus Answers after Music is generated:
function end_of_Bonus1(){
  $("div.bonus1").fadeOut(400);
  $("div.bonus2").delay(900).fadeIn(500);
}

function BonusAnswer1_A() {
        end_of_Bonus1();
        distortion.curve = makeDistortionCurve(Number(2));
        compressor.attack.value = 10;
}

function BonusAnswer1_B() {
        end_of_Bonus1();
        distortion.curve = makeDistortionCurve(Number(1));
        compressor.attack.value = 16;
}

function BonusAnswer1_C() {
        end_of_Bonus1();
        distortion.curve = makeDistortionCurve(Number(1));
        compressor.attack.value = 27;
}

function BonusAnswer1_D() {
        end_of_Bonus1();
        distortion.curve = makeDistortionCurve(Number(2));
        compressor.attack.value = 40;
}

function end_of_Bonus(){
  $("div.bonus2").fadeOut(500);
  $("div.answerText").fadeOut(500);
  $("div.download_Area").delay(1200).fadeIn(700);
}

function BonusAnswer2_A() {
        end_of_Bonus();
        filter.frequency.value = (1660*javaBirthMonth);
}

function BonusAnswer2_B() {
        end_of_Bonus();
        filter.frequency.value = 8705;
}

function BonusAnswer2_C() {
        end_of_Bonus();
        filter.frequency.value = 20000;
}

function BonusAnswer2_D() {
        end_of_Bonus();
        filter.frequency.value = 70;
}
