document.addEventListener("keypress", beatIt);

function beatIt(event) {

var keyPressed = event.key ;
  //var htmlId = this.innerHTML; // here "this" tell us, which button click is heard by addEventListener,
  //  and "this.innerHTML" tell us what is content inside the button.


  if (keyPressed == 'w') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }

  if (keyPressed == 'a') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }

  if (keyPressed == 's') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }

  if (keyPressed == 'd') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }

  if (keyPressed == 'j') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }

  if (keyPressed == 'k') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }

  if (keyPressed == 'l') {
    buttonAnimation(keyPressed);
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  },150);
}
