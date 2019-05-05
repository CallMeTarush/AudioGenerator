var BassDrum = new Audio('src/audio/BassDrum.mp3');
var ClosedHiHat = new Audio('src/audio/ClosedHiHat.wav');
var OpenHiHat = new Audio('src/audio/OpenHiHat.wav');
var Snare = new Audio('src/audio/Snare.wav');

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

function playSound(x) { 
    console.log(x)
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