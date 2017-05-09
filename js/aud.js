var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
var oscillator2 = audioCtx.createOscillator();
var gainNode2 = audioCtx.createGain();

oscillator.connect(gainNode);
// gainNode.connect(audioCtx.destination);
oscillator2.connect(gainNode2);

oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = 250; // value in hertz
oscillator.start();

oscillator2.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator2.frequency.value = 250; // value in hertz
oscillator2.start();

gainNode.gain.value = .01;
gainNode2.gain.value = .01;
let press = false;

$(document).ready(function() {
  $('body').keydown(function(event){
    // if(!press){
      numberOfHalfSteps = event.keyCode-64
      multiplier = 1.059463094359;
      // console.log(event.keyCode);
      oscillator.frequency.value = 440*Math.pow(multiplier, numberOfHalfSteps);
      oscillator2.frequency.value = 440*Math.pow(multiplier, numberOfHalfSteps);
      if(event.keyCode < 186 && event.keyCode != 91){
        gainNode.connect(audioCtx.destination);
        gainNode2.connect(audioCtx.destination);
      }
      press = true;
    // }
  })
  $('body').keyup(function(event){
    gainNode.disconnect();
    gainNode2.disconnect();
    press = false;
  })

})
