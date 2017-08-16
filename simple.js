var mainSound = new Pizzicato.Sound(
    { source: 'file',
      options: {
          path: './2channel.wav',
          loop: true
      }
    },
    function() {
        console.log("Main Sound Loaded");
        mainSound.play();
    });

var autos = {
    mainSound: mainSound
}

var elms = document.getElementsByClassName("autojs");
for (var i = 0; i < elms.length; i++) {
    let name = elms[i].name;
    
    
}
