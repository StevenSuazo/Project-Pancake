let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1000; 
canvas.height = 600;

class Game {
  constructor() {
    this.pancakesOnBoard = [];
    this.playerOnBoard = [];
    this.animate = this.animate.bind(this);

    this.addPancakes();
    this.animate();

  }

  add(obj) {
    if (obj instanceof Pancakes && this.pancakesOnBoard.includes(obj.img) == false) {
      this.pancakesOnBoard.push(obj);
    }
  }
  
  addPancakes() {
    for (let i = 0; i < 7; i++) {
      this.add(new Pancakes(columns[i]))
    }
  }

  animate(pancake) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y,
      player.width, player.height);

    this.pancakesOnBoard.forEach((pancake) => {
      // debugger
      pancake.makePancake();
      pancake.movePancake();
    })

    // for (let i = 0; i < this.pancakesOnBoard.length; i++) {
    //   setTimeout(this.pancakesOnBoard[i].makePancake, 1000)
    //   setTimeout(this.pancakesOnBoard[i].movePancake, 1000)
    // }
    movePlayer();
    requestAnimationFrame(this.animate);
  }

}

// --------- Player ---------------
const player = {
  x: 200,
  y: 410,
  width: 170,
  height: 200,
  speed: 9,
};

const keys = [];

const playerSprite = new Image();
playerSprite.src = "/src/images/Player.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

function movePlayer() {
  if (column1.includes(keys[keys.length - 1])) {
    player.x = 25;
  } else if (column2.includes(keys[keys.length - 1])) {
    player.x = 150;
  } else if (column3.includes(keys[keys.length - 1])) {
    player.x = 275;
  } else if (column4.includes(keys[keys.length - 1])) {
    player.x = 400;
  } else if (column5.includes(keys[keys.length - 1])) {
    player.x = 525;
  } else if (column6.includes(keys[keys.length - 1])) {
    player.x = 650;
  } else if (column7.includes(keys[keys.length - 1])) {
    player.x = 775;
  }
};

window.addEventListener("keydown", function(e){
  // console.log(e.key);
  keys.push(e.key);
  // keys[e.keyCode] = true;
});
// window.addEventListener("keyup", function(e){
//   // delete keys[0];
// });


// --------- Pancakes ---------------
const columns = [125, 250, 375, 500, 625, 750, 875];
const column1 = ["a", "h", "o", "v"]
const column2 = ["b", "i", "p", "w"]
const column3 = ["c", "j", "q", "x"]
const column4 = ["d", "k", "r", "y"]
const column5 = ["e", "l", "s", "z"]
const column6 = ["f", "m", "t"]
const column7 = ["g", "n", "u"]

let allPancakes = [
  "/src/images/pancake-A.png",
  "/src/images/pancake-B.png",
  "/src/images/pancake-C.png",
  "/src/images/pancake-D.png",
  "/src/images/pancake-E.png",
  "/src/images/pancake-F.png",
  "/src/images/pancake-G.png",
  "/src/images/pancake-F.png",
  "/src/images/pancake-I.png",
  "/src/images/pancake-J.png",
  "/src/images/pancake-K.png",
  "/src/images/pancake-L.png",
  "/src/images/pancake-M.png",
  "/src/images/pancake-N.png",
  "/src/images/pancake-O.png",
  "/src/images/pancake-P.png",
  "/src/images/pancake-Q.png",
  "/src/images/pancake-R.png",
  "/src/images/pancake-S.png",
  "/src/images/pancake-T.png",
  "/src/images/pancake-U.png",
  "/src/images/pancake-V.png",
  "/src/images/pancake-W.png",
  "/src/images/pancake-X.png",
  "/src/images/pancake-Y.png",
  "/src/images/pancake-Z.png"
];

class Pancakes {
  constructor(x) {
    // this.x = columns[Math.floor(Math.random() * columns.length)]
    this.x = x
    this.y = 0
    this.img = allPancakes[Math.floor(Math.random() * allPancakes.length)]
    this.width = 200
    this.height = 200
    this.speed = 2
    this.drawPancake = this.drawPancake.bind(this)
    this.movePancake = this.movePancake.bind(this)
    this.makePancake = this.makePancake.bind(this)
    // this.make = this.makePancake
    // this.move = this.movePancake
  }
  
  drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }
  makePancake() {
    const pancakeSprite = new Image();
    pancakeSprite.src = this.img;

    this.drawPancake(pancakeSprite, 0, 0, this.width, this.height, this.x, this.y, 
      this.width, this.height);
  }
  
  movePancake(){
    if (this.y < 540) {
      this.y += this.speed;
    }
    // if (pancake.y == 540) {
    //   // gameOver();
    // }
  }
  

}

new Game();

// let newGame = new Game();

// for(let i = 0; i < newGame.pancakesOnBoard.length; i++) {
//   // debugger
//   newGame.animate(newGame.pancakesOnBoard[i]);
// }