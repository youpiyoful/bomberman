var player = document.getElementById("player1");
var map = document.getElementById("container");
var blockHeight = player.offsetHeight;
var blockWidth = player.offsetWidth;
var posPlayerTop = player.offsetTop/50;
console.log(posPlayerTop);
var posPlayerLeft = player.offsetLeft/50;
console.log(posPlayerLeft);
var blockI;
var block;


var blockElt = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 2, 2, 0, 1, 0, 1, 0, 1, 2, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 0, 1, 2, 1, 2, 2, 2, 1, 0, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];



document.addEventListener("keydown", function(e){

    posPlayerTop = player.offsetTop/50;
    posPlayerLeft = player.offsetLeft/50;

    if((e.keyCode === 39) && (player.offsetLeft < map.offsetWidth - player.offsetWidth)){
      console.log(blockElt[posPlayerTop][posPlayerLeft]);
      if(blockElt[posPlayerTop][posPlayerLeft + 1] == 1){

        player.style.left = (posPlayerLeft + 1) * 50 + "px";
      }
    }
    else if ((e.keyCode === 37) && (player.offsetLeft > 0)){
      console.log(blockElt[posPlayerTop][posPlayerLeft]);
      if(blockElt[posPlayerTop][posPlayerLeft - 1] == 1){
        posPlayerLeft -= 1;
        player.style.left = player.offsetLeft - 50 + "px";
      }
    }
    else if ((e.keyCode === 40) && (player.offsetTop < map.offsetHeight - player.offsetHeight)){
      console.log(blockElt[posPlayerTop][posPlayerLeft]);
      if(blockElt[posPlayerTop + 1][posPlayerLeft] == 1){
          player.style.top = (posPlayerTop + 1) * 50 + "px";
      }
    }
    else if ((e.keyCode === 38) && (player.offsetTop > 0)) {
      console.log(blockElt[posPlayerTop][posPlayerLeft]);
      if(blockElt[posPlayerTop - 1][posPlayerLeft] == 1){
        player.style.top = (posPlayerTop - 1) * 50 + "px";
        console.log("coucou");
      }
    }
    else if (e.keyCode === 32) {
      poseBombe();
    }
  });




function blockEltMaker(){
  var x = 0;
  var y = 0;
  for(x=0; x < 14; x++){
    for(y=0; y < 14; y++){
      if (blockElt[y][x] == 0){
        blockI = document.createElement('div');
        blockI.classList.add("blockI");
        map.appendChild(blockI);
        blockI.style.top = y * blockHeight + "px";
        blockI.style.left = x * blockWidth + "px";
      }
      else if (blockElt[y][x] == 2){
        block = document.createElement("div");
        block.classList.add("block");
        block.style.top = y * blockHeight + "px";
        block.style.left = x * blockWidth + "px";
        map.appendChild(block);
      }
    }
  }
}

function poseBombe(){
  var bombeElt = document.createElement("div");
  bombeElt.classList.add("bomb");
  bombeElt.style.top = player.offsetTop + 12.5 + "px";
  bombeElt.style.left = player.offsetLeft + 12.5 + "px";
  map.appendChild(bombeElt);
}
console.log(array[length]);


blockEltMaker();
// <<<<<<< HEAD
// console.log(array[length]);
//
// =======
// // var Map = new Object();
// // Map['X'] = 'darkgrey';
// // Map['x'] = 'white';
// // Map[' '] = 'black';
// //
// // var MapGrid = 'grey';
// //
// // var MapDimensions = {
// //   w: 10,
// //   h: 10
// // };
//
//
//
//
//
// // var array = [];
// //
// // for (i=0; i < 10; i++){
// //     array.push(i);
// // }
// // console.log(array[length]);
// >>>>>>> c4ed980df5d1efe9afe245b10ca0cf11b7114f7a
