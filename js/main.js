$(function(){
  console.log('hi, creating audio context');
  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  let osc1_wave = $('#osc1-wave').val();
  let osc1_mute = $('#osc1-mute').is(':checked');
  let osc1_oct  = $('#osc1-oct').val();
  let osc1_vol  = $('#osc1-vol').val();
  let osc1_fine = $('#osc1-fine').val();
  console.log(`
    osc1 values are:
    wave: ${osc1_wave}
    mute: ${osc1_mute}
    oct:  ${osc1_oct}
    vol:  ${osc1_vol}
    fine: ${osc1_fine}
  `);
  //build osc1
  let osc1 = audioCtx.createOscillator();
  osc1.frequency.value = 440;
  let osc1_gain = audioCtx.createGain();
  osc1_gain.gain.value = .5;
  osc1.connect(osc1_gain);
  osc1.start();
  console.log(osc1);
  //build osc2
  let osc2 = audioCtx.createOscillator();
  osc2.frequency.value = 440;
  let osc2_gain = audioCtx.createGain();
  osc2_gain.gain.value = .5;
  osc2.connect(osc2_gain);
  osc2.start();
  //build osc3
  let osc3 = audioCtx.createOscillator();
  osc3.frequency.value = 440;
  let osc3_gain = audioCtx.createGain();
  osc3_gain.gain.value = .5;
  osc3.connect(osc3_gain);
  osc3.start();

  $(document).on('input', function(e){
    // console.log(`${e.target.id}: ${e.target.value}`);
    let [osc, prop] = $(e.target).attr('id').split('-');
    let setting = e.target.value;
    console.log(`${osc}: ${prop} ${setting}`);

    if(osc == 'osc1'){
      if(prop == 'type')
        osc1[prop] = setting;
      if(prop == 'fine'){
        osc1.frequency.value = setting*3;
        //figure this out betta
      }
      if(prop == 'vol')
        osc1_gain.gain.value = setting/100;
    }

    if(osc == 'osc2'){
      if(prop == 'type')
        osc2[prop] = setting;
      if(prop == 'fine'){
        osc2.frequency.value = setting*3;
        //figure this out betta
      }
      if(prop == 'vol')
        osc2_gain.gain.value = setting/100;

    }
    if(osc == 'osc3'){
      if(prop == 'type')
        osc3[prop] = setting;
      if(prop == 'fine'){
        osc3.frequency.value = setting*3;
        //figure this out betta
      }
      if(prop == 'vol')
        osc3_gain.gain.value = setting/100;
    }
  })
  $(':checkbox').on('change',function(e){
    let [osc, prop] = $(e.target).attr('id').split('-');
    let setting = e.target.checked;
    console.log(`${osc} ${prop} ${setting}`);
    if(osc == 'osc1')
      if(setting)
        osc1_gain.disconnect(audioCtx.destination);
      else
        osc1_gain.connect(audioCtx.destination);
    if(osc == 'osc2')
      if(setting)
        osc2_gain.disconnect(audioCtx.destination);
      else
        osc2_gain.connect(audioCtx.destination);
    if(osc == 'osc3')
      if(setting)
        osc3_gain.disconnect(audioCtx.destination);
      else
        osc3_gain.connect(audioCtx.destination);
  })
  // osc1_gain.connect(audioCtx.destination);

})
