var player = document.getElementById("player1");
var map = document.getElementById("container");

document.addEventListener("keydown", function(e){
    console.log(e.keyCode);
    if((e.keyCode === 39) && (player.offsetLeft < map.offsetWidth - player.offsetWidth)){
        if((map.offsetWidth - player.offsetLeft) <= 10){
          player.style.left = map.offsetWidth + "px";
        }
        else{
          player.style.left = player.offsetLeft + 10 + "px";
        }
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
// var Map = new Object();
// Map['X'] = 'darkgrey';
// Map['x'] = 'white';
// Map[' '] = 'black';
//
// var MapGrid = 'grey';
//
// var MapDimensions = {
//   w: 10,
//   h: 10
// };





// var array = [];
//
// for (i=0; i < 10; i++){
//     array.push(i);
// }
// console.log(array[length]);
