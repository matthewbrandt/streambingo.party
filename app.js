// [p] = passive (occurs)
// [c] = chat
// [s] = streamer
const tilesArray = [
    "3+ subscriptions",
    "500+ bits",
    "chat spam (e.g. buy follows)",
    "comment on streamers appearance",
    "user banned",
    "user timeout",
    "gets SUPER lucky",
    "technical difficulties",
    "does a voice impression",
    "drinks water",
    "forgets a notification",
    "forgets to change scene",
    "forgets to mute mic",
    "gets raided",
    "mispronounces someone's username",
    "OBS/stream crashes",
    "runs a poll",
    "says \"i can't believe that worked\"",
    "says \"let's goooooo\"",
    "says \"what happened?!\"",
    "says to join discord",
    "sings a little",
    "stands up",
    "touches microphone by mistake"
];

// taken from https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
function shuffle(array, seed) {                
    var m = array.length, t, i;
  
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(random(seed) * m--);        
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     
    }
  
    return array;
  }
  
  function random(seed) {
    var x = Math.sin(seed++) * 10000; 
    return x - Math.floor(x);
  }

let boardConfig = shuffle(tilesArray,69);
console.log(boardConfig);

// DO NOT EVER ADD ANOTHER TABLE TO THE PAGE
function getMessages() {
    //let tableLength = document.getElementsByTagName("td").length;
    for (let i = 0; i < boardConfig.length; i++) {
        if (i < 12) { 
            document.getElementsByTagName("td")[i].innerText = boardConfig[i]; 
        }
        if (i >= 12) {
            document.getElementsByTagName("td")[i+1].innerText = boardConfig[i];
        }
    }
}
getMessages();

//https://pusher.com/docs/channels/getting_started/javascript/