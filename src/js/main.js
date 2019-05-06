var BassDrum = new Audio('src/audio/BassDrum.mp3');
var ClosedHiHat = new Audio('src/audio/ClosedHiHat.wav');
var OpenHiHat = new Audio('src/audio/OpenHiHat.wav');
var Snare = new Audio('src/audio/Snare.wav');

var audioNames = [
    "BassDrum",
    "ClosedHiHat",
    "OpenHiHat",
    "Snare"
]

var audios = {
    "BassDrum": BassDrum,
    "ClosedHiHat": ClosedHiHat,
    "OpenHiHat": OpenHiHat,
    "Snare": Snare
}

function beatHTML(num) {
    if(num==1)
        return(`
            <select id=beatval`+num+` >
                <option value="BassDrum" selected >BassDrum</option>
                <option value="ClosedHiHat">ClosedHiHat</option>
                <option value="OpenHiHat">OpenHiHat</option>
                <option value="Snare">Snare</option>
            </select>`
        )
    else if(num==2) 
        return(`
            <select id=beatval`+num+` >
                <option value="BassDrum" >BassDrum</option>
                <option value="ClosedHiHat" selected >ClosedHiHat</option>
                <option value="OpenHiHat">OpenHiHat</option>
                <option value="Snare">Snare</option>
            </select>`
        )
    else if(num==3)
        return(`
            <select id=beatval`+num+` >
                <option value="BassDrum" >BassDrum</option>
                <option value="ClosedHiHat">ClosedHiHat</option>
                <option value="OpenHiHat" selected >OpenHiHat</option>
                <option value="Snare">Snare</option>
            </select>`
        )
    else
        return(`
            <select id=beatval`+num+` >
                <option value="BassDrum" >BassDrum</option>
                <option value="ClosedHiHat">ClosedHiHat</option>
                <option value="OpenHiHat">OpenHiHat</option>
                <option value="Snare" selected >Snare</option>
            </select>`
        )
}

async function initSound(bpm) {
    document.getElementById("play").innerHTML = "Refresh to try again";
    window.secondsPerBeat = 60/bpm*1000;

    beat1 = $('#beatval1').val();
    beat2 = $('#beatval2').val();
    beat3 = $('#beatval3').val();
    beat4 = $('#beatval4').val();

    while(1) {
        
        await playSound([audios[beat1]]);
        await playSound([audios[beat2]]);
        await playSound([audios[beat3]]);
        await playSound([audios[beat4]]);
    }
}

async function playRandomSound(bpm) {

    document.getElementById("play2").innerHTML = "Refresh to try again";
    window.secondsPerBeat = 60/bpm*1000;

    beats = []

    for(var j = 0;j<4;j++) {
        
        to_push = []
        
        for(var i = 0;i<4;i++) {
            var rand = Math.random();    
            rand < 0.5 ? to_push.push( audios[audioNames[i]] ) : console.log("x")
            // if(rand<(0.25)) {

            // } else if(rand<0.5) {

            // } else if(rand<0.75) {

            // } else {

            // }
        }
        
        beats.push(to_push)
    }
    // console.log(beats);
    while(1) {        
        
        beats.forEach(element => {
            console.log( beats.indexOf(element) )
            element.forEach( x => {
                console.log(x.src);
            });
        });
        await playSound( beats[0] );
        // console.log(beats[1].src);
        await playSound( beats[1] );
        // console.log(beats[2].src);
        await playSound( beats[2] );
        // console.log(beats[3].src);
        await playSound( beats[3] );
    }
}

function playSound(x) { 
    for(var i in x)
        x[i].play();
        
    return new Promise(resolve => {
      setTimeout(() => {
        
        resolve("Done");
      }, window.secondsPerBeat);
    });    
}
  
function init() {
    $("#beat1").html(beatHTML(1));
    $("#beat2").html(beatHTML(2));
    $("#beat3").html(beatHTML(3));
    $("#beat4").html(beatHTML(4));
}
init();