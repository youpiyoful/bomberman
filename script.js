var player = document.getElementById("player1");
var map = document.getElementById("container");
var blockHeight = player.offsetHeight;
var blockWidth = player.offsetWidth;
var posPlayerTop = player.offsetTop / 50;
console.log(posPlayerTop);
var posPlayerLeft = player.offsetLeft / 50;
console.log(posPlayerLeft);
var blockI;
var block;
var autoBomb = 0;

var blockElt = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 2, 2, 0, 1, 0, 1, 0, 1, 2, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 1, 2, 1, 2, 2, 2, 1, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
blockHeight


document.addEventListener("keydown", function (e) {

  posPlayerTop = player.offsetTop / 50;
  posPlayerLeft = player.offsetLeft / 50;

  if ((e.keyCode === 39) && (player.offsetLeft < map.offsetWidth - player.offsetWidth)) {
    console.log(blockElt[posPlayerTop][posPlayerLeft]);
    if (blockElt[posPlayerTop][posPlayerLeft + 1] == 1) {
      player.style.left = (posPlayerLeft + 1) * 50 + "px";
    }
  } else if ((e.keyCode === 37) && (player.offsetLeft > 0)) {
    console.log(blockElt[posPlayerTop][posPlayerLeft]);
    if (blockElt[posPlayerTop][posPlayerLeft - 1] == 1) {
      posPlayerLeft -= 1;
      player.style.left = player.offsetLeft - 50 + "px";
    }
  } else if ((e.keyCode === 40) && (player.offsetTop < map.offsetHeight - player.offsetHeight)) {
    console.log(blockElt[posPlayerTop][posPlayerLeft]);
    if (blockElt[posPlayerTop + 1][posPlayerLeft] == 1) {
      player.style.top = (posPlayerTop + 1) * 50 + "px";
    }
  } else if ((e.keyCode === 38) && (player.offsetTop > 0)) {
    console.log(blockElt[posPlayerTop][posPlayerLeft]);
    if (blockElt[posPlayerTop - 1][posPlayerLeft] == 1) {
      player.style.top = (posPlayerTop - 1) * 50 + "px";
      console.log("coucou");
    }
  } else if (e.keyCode === 32) {
    if (autoBomb == 0) {
      autoBomb = 1;
      placeBomb();
      setTimeout(explode, 1000);
    }
    else{
      autoBomb = 0;
    }
  }
});

function blockEltMaker() {
  var x = 0;
  var y = 0;
  for (x = 0; x < 14; x++) {
    for (y = 0; y < 14; y++) {
      if (blockElt[y][x] == 0) {
        blockI = document.createElement('div');
        blockI.classList.add("blockI");
        map.appendChild(blockI);
        blockI.style.top = y * blockHeight + "px";
        blockI.style.left = x * blockWidth + "px";
      } else if (blockElt[y][x] == 2) {
        block = document.createElement("div");
        block.classList.add("block");
        block.style.top = y * blockHeight + "px";
        block.style.left = x * blockWidth + "px";
        map.appendChild(block);
      }
    }
  }
}
var bombeElt = document.createElement("div");

function placeBomb() {

  bombeElt.classList.add("bomb");
  bombeElt.style.top = player.offsetTop + 5.5 + "px";
  bombeElt.style.left = player.offsetLeft + 5.5 + "px";
  map.appendChild(bombeElt);

}

function explode() {

  //bombeElt.classList.remove("bomb");
  bombeElt.classList.add("boom");
  bombeElt.style.top = bombeElt.offsetTop + 5.5 + "px";
  bombeElt.style.left = bombeElt.offsetLeft + 5.5 + "px";


  //delete map[posPlayerTop-1][posPlayerLeft];
  // delete map[][blockWidth  ].object;
  // player.block++;

}

blockEltMaker();

var monster = document.getElementById("phantom");

function random() {
  var min = 1;
  var max = 4;

  var dir = Math.floor(Math.random() * Math.floor(max));
  var posBlockLeft = monster.offsetLeft / 50;
  var posBlockTop = monster.offsetTop / 50;
  console.log(dir == 4);
  if (dir == 0) {
    if (blockElt[posBlockTop][posBlockLeft + 1] == 1) {
      monster.style.left = monster.offsetLeft + 50 + "px";
    } //DROITE//
  } else if (dir == 1) {
    if (blockElt[posBlockTop][posBlockLeft - 1] == 1) {
      monster.style.left = monster.offsetLeft - 50 + "px";
    } //GAUCHE//
  } else if (dir == 3) {
    if (blockElt[posBlockTop + 1][posBlockLeft] == 1) {
      monster.style.top = monster.offsetTop + 50 + "px";
    } //BAS///

  } else if (dir == 2) { //
    if (blockElt[posBlockTop - 1][posBlockLeft] == 1) {
      monster.style.top = monster.offsetTop - 50 + "px";
    } //HAUT//
  }
}


setInterval(random, 200);