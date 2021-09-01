let lastQ = 0;
let lastE = 0;

const emoji = () => {
    let emojis = ["😀", "😂", "😐", "😜", "😲", "😈", "🤠", "🙄", "😎", "😅", "😃", "🤤", "😱", "😭", "🥶", "🤭"];
    let now = emojis[Math.floor(Math.random() * emojis.length)];
    
    while (now == lastE) {
        now = quoutes[Math.floor(Math.random() * quoutes.length)];
       
        break;
    }

    if (now != lastE) {
        lastE = now;
        return document.getElementById("emoji").innerHTML = now;
    }
    
}

const quote = () => {
    let quoutes = ["Yeah nah that's gay", "I hate Eddie Woo, with passion", "Joel Spranza is so inconsistent", "Eddie & Joel is the collab of the century", "Can i recommend this channel? 😏", "Ah, same horse different cow", "I'd three star your mum", "Why the fuck are there letters in math?"];
    let now = quoutes[Math.floor(Math.random() * quoutes.length)];

    while (now == lastQ) {
        now = quoutes[Math.floor(Math.random() * quoutes.length)];
       
        break;
    }

    if (now != lastQ) { 
        lastQ = now;
        return document.getElementsByClassName("current")[0].innerHTML = "\"" + now + "\""; 
    }

}

emoji();
quote();

const update = () => {
    emoji();
    quote();
}