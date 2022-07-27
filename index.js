
// this portion will detect mouse click and play sound
var docSelect = document.querySelectorAll(".drum");
for (let i = 0; i < docSelect.length; i++) {
   docSelect[i].addEventListener("click", function(){
        var buttonValue = this.innerHTML;
        makeSound(buttonValue);
        buttonPressed(buttonValue);
    })
}



// this protion will detect keyboard press and play sound
document.addEventListener("keydown", function(event){
    console.log(event);
    makeSound(event.key);
    buttonPressed(event.key);
})


function makeSound(keyValue){

    switch (keyValue) {
        case "w":
            var crash = new Audio('sounds/tom-1.mp3');
            crash.play();
            break;
        
        case "a":
            var kick = new Audio('sounds/tom-2.mp3');
            kick.play();
            break;

        case "s":
            var snare = new Audio('sounds/tom-3.mp3');
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio('sounds/tom-4.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/snare.mp3');
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio('sounds/kick-bass.mp3');
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio('sounds/crash.mp3');
            tom4.play();
            break;
        
        default:
            break;
    }

}

function buttonPressed(keyValue){
    document.querySelector("."+keyValue).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keyValue).classList.remove("pressed");
    }, 100);
}