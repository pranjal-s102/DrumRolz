var count=0;
var caps=false;
document.querySelector(".buttn").addEventListener("click",function(){
  if (count%2==0)
  {
      caps=true;
      document.querySelector(".buttn").classList.toggle("btn");
      document.querySelector(".buttn").classList.toggle("btn1");
      document.querySelector(".buttn").innerHTML="Please return my sensitivity!👼🙏";
  }
  else
  {
    caps=false;
    document.querySelector(".buttn").classList.toggle("btn1");
    document.querySelector(".buttn").classList.toggle("btn");
    document.querySelector(".buttn").innerHTML="Click me to be insensitive!😈";
  }
count++;
if(count==2)
{
  count=0;
}
})
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
 document.querySelectorAll(".drum")[i].addEventListener("click",function(){
   makeSound(this.innerHTML);
   buttonAnimation(this.innerHTML);
 });
}
addEventListener("keydown",function(event)
{
  console.log(event.key);/*yea i guessed*/
  if(caps==true)
  {
      makeSound(event.key.toLowerCase());
      buttonAnimation(event.key.toLowerCase());
  }
  else{
    makeSound(event.key);
    buttonAnimation(event.key);
  }

});
function makeSound(key)
{
  switch (key) {
    case "w":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case "a":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case "s":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case "d":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
    case "j":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case "k":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case "l":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    default:
    console.log(this.innerHTML);
  }
}

function buttonAnimation(currentKey)
{
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  }, 75);
}
