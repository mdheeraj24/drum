


document.querySelectorAll(".drum").forEach(b => {
    b.addEventListener("click", handleDrumKeyClick);
})




function playSound(letter) {
    let audioFileName = "sounds/";
    switch (letter) {
        case "w":
            audioFileName += "crash.mp3";
            break;
        case "a":
            audioFileName += "kick-bass.mp3";
            break;
        case "s":
            audioFileName += "snare.mp3";
            break;
        case "d":
            audioFileName += "tom-1.mp3";
            break;
        case "j":
            audioFileName += "tom-2.mp3";
            break;
        case "k":
            audioFileName += "tom-3.mp3";
            break;
        case "l":
            audioFileName += "tom-4.mp3";
            break;
        default:
            return;
    }
    let audio = new Audio(audioFileName);
    audio.play();

}

function keyAnimation(key) {
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}

function handleDrumKeyClick() {
    
    let letter = this.innerHTML;
    playSound(letter);
    keyAnimation(letter);
    
}

function handleDrumKeyPressed(event) {
    console.log(event);
    playSound(event.key);
    keyAnimation(event.key);
}

document.addEventListener("keydown", handleDrumKeyPressed);