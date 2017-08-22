// require("./autojs.js");

var mainSound = new Pizzicato.Sound(
    { source: 'file',
      options: {
          path: './2channel.ogg',
          loop: true
      }
    },
    function() {
        console.log("Main Sound Loaded");
        mainSound.play();
    });

var pinkSound = new Pizzicato.Sound(
    { source: 'file',
      options: {
          path: './heavy-pink.ogg',
          volume: 0.0,
          loop: true          
      }
    },
    function() {
        console.log("Main Sound Loaded");
        pinkSound.volume = 0.0;
        pinkSound.play();
    });

function mixer(mix) {
    mainSound.volume = 1.0 - mix;
    pinkSound.volume = mix;
    return mix;
}

var autos = {
    mixer:       mixer,
    mainSound: mainSound,
    pinkSound: pinkSound
}

autoJSinstallCallbacks(autos);
