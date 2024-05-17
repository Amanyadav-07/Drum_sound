var n = document.querySelectorAll(".drum").length;
var audio = new Audio('sounds/crash.mp3');
var audio1 = new Audio('sounds/kick-bass.mp3');
var audio2 = new Audio('sounds/snare.mp3');
var audio3 = new Audio('sounds/tom-1.mp3');
var audio4 = new Audio('sounds/tom-2.mp3');
var audio5 = new Audio('sounds/tom-3.mp3');
var audio6 = new Audio('sounds/tom-4.mp3');

for(var i = 0; i < n;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var innerHTML1 = this.innerHTML;
    switch(innerHTML1)
    {
        case "W":
            audio.play();
            break;
        
        case "A":
            audio1.play();
            break;
        case "S":
            audio2.play();
            break;
        case "D":
            audio3.play();
            break;
        case "J":
            audio4.play();
            break;
        case "K":
            audio5.play();
            break;
        case "L":
            audio6.play();
    }
});

}

document.addEventListener("keypress",function(event)
{
    console.log(event);
});