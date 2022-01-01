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
    "something with perfect timing",
    "runs a poll",
    "says \"i can't believe that worked\"",
    "says \"let's goooooo\"",
    "says \"what happened?!\"",
    "plugs their discord",
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

// get configuration for the board from the URL params
let fullUrl = new URL(window.location);
let urlParams = new URLSearchParams(fullUrl.search);
let boardSeed = urlParams.get('id');

// define test criteria for seed and state
const boardSeedRegex = new RegExp('^[0-9]{1,4}$');
const boardStateRegex = new RegExp('^[0-1]{25}$');

// DO NOT EVER ADD ANOTHER TABLE TO THE PAGE!
function getMessages() {
    let boardConfig = [];
    if (boardSeedRegex.test(boardSeed)) {
        // set noboard message to hidden as the board is shown
        document.getElementById('noBoard').style.display = "none";
        
        // shuffle the array of messages to randomise the board using the provided seed
        boardConfig = shuffle(tilesArray,boardSeed);

        // get the state param from the URL if it exists
        let boardState = urlParams.get('state');

        // check if the URL has a state param first
        if (boardStateRegex.test(boardState)) {
            let stateSplit = boardState.split('');
            for (let i = 0; i < stateSplit.length; i++) {
                // check each tile by looking at the param from the URL in the correct position
                // if current position in string is 1 then add class
                if (i < 12) {
                    stateSplit[i] == 1 && document.getElementsByTagName("td")[i].classList.toggle("marked");
                    document.getElementsByTagName("td")[i].innerText = boardConfig[i];
                }
                if (i >= 12) {
                    if (document.getElementsByTagName("td")[i].id !== 'freeTile') {
                        stateSplit[i] == 1 && document.getElementsByTagName("td")[i].classList.toggle("marked");
                        document.getElementsByTagName("td")[i].innerText = boardConfig[i-1];
                    }       
                }
            }
        }
        else  {
            for (let i = 0; i < boardConfig.length; i++) {
                // if there is no boardState in the URL then just load the board unmarked
                if (i < 12) {
                    document.getElementsByTagName("td")[i].innerText = boardConfig[i];
                }
                if (i >= 12) {
                    document.getElementsByTagName("td")[i+1].innerText = boardConfig[i];
                }
            }
                       
            // override the state in the URL object for a blank board
            const initialState = '0000000000001000000000000';
            // push the state into the URL
            fullUrl.searchParams.set('state',initialState);
            

            // push the new state URL param to the address bar
            window.history.pushState({},'',fullUrl);
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
    

    // when a tile is clicked change the state param in the URL
    // first, get current state value

    // the problem is currently that when this state param is retrieved...
    // ...it's the OLD value (and not what was pushed)
    let urlStateParams = new URLSearchParams(window.location.search);
    let currentState = urlStateParams.get('state');

    if (currentState === undefined) {
        
    }

    if (boardStateRegex.test(currentState)) {
        // get the position of the currently clicked tile (one-indexed)
        let tilePosition = e.target.getAttribute('data-position');

        // if the tile is the middle one, ignore it
        if (tilePosition !== '12') {
            // split the state into an array to be able to mutate it
            let stateSplit = currentState.split('');

            // get the value of the tile currently clicked from the state
            let tileCurrentValue = stateSplit[tilePosition];
            let tileNewValue;

            // if the tile current value is 1 set the new value to 0 and vice-versa
            tileCurrentValue == 1 ? tileNewValue = '0' : tileNewValue = '1';
            
            // replace the old value in the state array with the new value
            stateSplit[tilePosition] = tileNewValue;

            // join the array back together as a string before putting it into the URL
            let newState = stateSplit.join("");
            //console.log('newState =',newState);

            const url = new URL(window.location);
            // override the state in the URL object
            url.searchParams.set('state',newState);

            // push the new state URL param to the address bar
            window.history.pushState({},'',url);
        }

    }

});

getMessages();