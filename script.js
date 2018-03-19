var player = document.getElementById("player1");

document.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    if(e.keyCode === 39){
        player.style.left = player.offsetLeft + 10 + "px";
    }
})

var array = [];

for (i=0; i < 10; i++){
    array.push(i);
}
console.log(array[length]);