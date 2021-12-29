// [p] = passive (occurs)
// [c] = chat
// [s] = streamer

const tileMessage = [
    ["[c]","3+ subscriptions)"],
    ["[c]","500+ bits"],
    ["[c]","chat spam (buy follows)"],
    ["[c]","comment on streamers appearance"],
    ["[c]","user banned"],
    ["[c]","user timeout"],
    ["[p]","gets SUPER lucky"],
    ["[p]","technical difficulties"],
    ["[s]","does a voice impression"],
    ["[s]","drinks water"],
    ["[s]","forgets a follow/sub/etc."],
    ["[s]","forgets to change scene"],
    ["[s]","forgets to mute mic"],
    ["[s]","gets raided"],
    ["[s]","mispronounces someone's username"],
    ["[s]","OBS/stream crashes"],
    ["[s]","runs a poll"],
    ["[s]","says \"i can't believe that worked\""],
    ["[s]","says \"let's goooooo\""],
    ["[s]","says \"what happened?!\""],
    ["[s]","says to join discord"],
    ["[s]","sings a little"],
    ["[s]","stands up"]
];

// get the entire array
// push a random value into each array grouping (math.random0-1)
// sort array by value
// populate tiles one by one with loop through array
// generate uuid for this particular combination and SAVE