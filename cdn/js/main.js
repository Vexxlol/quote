const emoji = () => {
    let emojis = ["😀", "😂", "😐", "😜", "😲", "😈", "🤠", "🙄", "😎", "😅", "😃", "🤤", "😱", "😭", "🥶", "🤭"];
    return document.getElementById("emoji").innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
}

const quote = () => {
    let quoutes = ["Yeah nah that's gay", "I hate Eddie Woo, with passion", "Joel Spranza is so inconsistent", "Eddie & Joel is the collab of the century", "Can i recommend this channel? 😏", "Ah, same horse different cow", "I'd three star your mum", "Why the fuck are there letters in math?"];
    return document.getElementsByClassName("current")[0].innerHTML = "\"" + quoutes[Math.floor(Math.random() * quoutes.length)] + "\""; 
}

emoji();
quote();
const update = () => {
    emoji();
    quote();
}