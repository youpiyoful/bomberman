var player = document.getElementById("player1");
var map = document.getElementById("container");
document.addEventListener("keydown", function(e){
    console.log(e.keyCode) 
    if((e.keyCode === 39) && (player.offsetLeft < map.offsetWidth - player.offsetWidth)){
        player.style.left = player.offsetLeft + 10 + "px";
    }
    else if ((e.keyCode === 37) && (player.offsetLeft > 0)){
      player.style.left = player.offsetLeft - 10 + "px";
    }
    else if ((e.keyCode === 40) && (player.offsetTop < map.offsetHeight - player.offsetHeight)) {
      player.style.top = player.offsetTop + 10 + "px";
    }
    else if ((e.keyCode === 38) && (player.offsetTop > 0)) {
      player.style.top = player.offsetTop - 10 + "px";
    }
    else if (e.keyCode === 32) {
      poseBombe();
    }
  });

// var decor = new array(
//   'X', 'X', 'X', 'X', ' ', 'x', 'x', 'X', 'X', 'x',
// 	'X', ' ', 'x', ' ', 'X', 'x', 'x', ' ', ' ', 'x',
// 	'x', ' ', 'X', 'x', 'X', 'X', 'x', 'x', 'x', 'X',
// 	'X', 'x', 'x', 'x', 'x', 'x', 'x', 'X', 'x', 'X',
// 	'X', 'X', 'X', 'x', 'X', 'x', 'X', 'x', ' ', 'X',
// 	'x', 'x', 'X', 'x', 'x', 'X', 'x', 'x', 'x', 'X',
// 	'x', ' ', 'x', 'x', ' ', 'x', 'x', 'x', 'x', 'x',
// 	'X', 'x', 'x', 'X', 'x', 'X', 'x', 'X', 'x', 'X',
// 	'X', 'x', 'x', 'x', 'X', 'x', 'x', 'x', ' ', 'X',
//   'X', ' ', ' ', 'X', 'x', 'x', 'x', 'x', ' ', 'X'
// );


function poseBombe(){
  var bombeElt = document.createElement("div");
  bombeElt.classList.add("bombe");
  bombeElt.style.top = player.offsetTop + 25 + "px";
  bombeElt.style.left = player.offsetLeft + 25 + "px";
  map.appendChild(bombeElt);
}
console.log(array[length]);

