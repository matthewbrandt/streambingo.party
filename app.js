// array of all possible tile messages
const tilesArray = [
    "gets 3 or more subs",
    "gets 500 or more bits",
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
    "mis-pronounces someone's username",
    "OBS/stream crashes",
    "runs a poll",
    "says \"i can't believe that worked\"",
    "says \"let's goooooo\"",
    "says \"what happened?!\"",
    "says to join discord",
    "sings a little",
    "stands up",
    "touches mic by mistake"
];

// taken from https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed
function shuffle(array, seed) {                
    var m = array.length, t, i;

    // While there remain elements to shuffle...
    while (m) {

        // ...pick a remaining element...
        i = Math.floor(random(seed) * m--);        

        // ...and swap it with the current element
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

// retrieve configurations for the board and solution from the URL params
const urlParams = new URLSearchParams(window.location.search);
const boardSeed = urlParams.get('id');
const boardSolution = urlParams.get('board');

// define test criteria for boardseed
const boardSeedRegex = new RegExp('^[0-9]{1,4}$');

// DO NOT EVER ADD ANOTHER TABLE TO THE PAGE
function getMessages() {
    let boardConfig = [];
    if (boardSeedRegex.test(boardSeed)) {
        // set noboard message to hidden as the board is shown
        document.getElementById('noBoard').style.display = "none";
        
        // shuffle the array of messages to randomise the board using the provided seed
        boardConfig = shuffle(tilesArray,boardSeed);
        for (let i = 0; i < boardConfig.length; i++) {
            if (i < 12) { 
                document.getElementsByTagName("td")[i].innerText = boardConfig[i];
            }
            if (i >= 12) {
                document.getElementsByTagName("td")[i+1].innerText = boardConfig[i];
            }
        }
    }
    else {
        // hide the board and the message will be shown
        document.getElementById('bingoBoardWrapper').classList.add("hidden");
    }
}

// add click listener to tiles
let table = document.getElementById("bingoBoard");
table.addEventListener("click", function(e) {
  e.target.id ==! 'freeTile' && e.target.classList.toggle("marked");
  // function to update the marked tiles in the URL
});

getMessages();



//https://pusher.com/docs/channels/getting_started/javascript/