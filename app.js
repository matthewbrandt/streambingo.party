// [p] = passive (occurs)
// [c] = chat
// [s] = streamer

const tileMessage = [
    [1,"[c]","3+ subscriptions"],
    [2,"[c]","500+ bits"],
    [3,"[c]","chat spam (buy follows)"],
    [4,"[c]","comment on streamers appearance"],
    [5,"[c]","user banned"],
    [6,"[c]","user timeout"],
    [7,"[p]","gets SUPER lucky"],
    [8,"[p]","technical difficulties"],
    [9,"[s]","does a voice impression"],
    [10,"[s]","drinks water"],
    [11,"[s]","forgets a follow/sub/etc."],
    [12,"[s]","forgets to change scene"],
    [13,"[s]","forgets to mute mic"],
    [14,"[s]","gets raided"],
    [15,"[s]","mispronounces someone's username"],
    [16,"[s]","OBS/stream crashes"],
    [17,"[s]","runs a poll"],
    [18,"[s]","says \"i can't believe that worked\""],
    [19,"[s]","says \"let's goooooo\""],
    [20,"[s]","says \"what happened?!\""],
    [21,"[s]","says to join discord"],
    [22,"[s]","sings a little"],
    [23,"[s]","stands up"],
    [24,"[s]","touches microphone by mistake"]
];

// get the entire array
// push a random value into each array grouping (math.random0-1)
// sort array by value
// populate tiles one by one with loop through array
// generate uuid for this particular combination and SAVE

function getMessages() {
    messageArray = [];

    for (let i = 0; i < tileMessage.length; i++) {
        // do nothing yet
        let rn = Math.random();
        // console.log(tileMessage[i][1]);
        messageArray.push([rn,tileMessage[i][0],tileMessage[i][2]]);
        // console.log(messageArray);
    }

    bingoArray = messageArray.sort();
    // console.log(bingoArray);
    
}

getMessages();

//https://pusher.com/docs/channels/getting_started/javascript/