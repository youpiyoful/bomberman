var player = document.getElementById("player1");
var map = document.getElementById("container");
document.addEventListener("keydown", function(e){
    console.log(e.keyCode) 
    if((e.keyCode === 39) && (player.offsetLeft < map.offsetWidth - player.offsetWidth)){
        player.style.left = player.offsetLeft + 10 + "px";
    }
})

var array = [];

for (i=0; i < 10; i++){
    array.push(i);
}
console.log(array[length]);

