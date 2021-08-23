arr = document.querySelectorAll("button.drum");
for (var i = 0; i < arr.length; i++)
  arr[i].addEventListener("click", handleClick);

function handleClick()
{
  var className = (this.innerHTML);
  makeSound(className);
  buttonAnimation(className);

}

document.addEventListener("keydown", function(event)
{
  var x=event.key;
  makeSound(x);
  buttonAnimation(x);

});

function makeSound(drum)
{
  switch (drum)
    {
      case "w":
        var audio = new Audio("sounds/crash.mp3");
        break;
      case "a":
        var audio = new Audio("sounds/kick-bass.mp3");
        break;
      case "s":
        var audio = new Audio("sounds/snare.mp3");
        break;
      case "d":
        var audio = new Audio("sounds/tom-1.mp3");
        break;
      case "j":
        var audio = new Audio("sounds/tom-2.mp3");
        break;
      case "k":
        var audio = new Audio("sounds/tom-3.mp3");
        break;
      case "l":
        var audio = new Audio("sounds/tom-4.mp3");
        break;

        default:console.log(x);

    }
  audio.play();
}

function buttonAnimation(currentKey)
{
var activeButton=document.querySelector("."+currentKey);
var delay = 0.1;
activeButton.classList.add("pressed");
setTimeout(function() {
  activeButton.classList.remove("pressed");
}, delay);

}
