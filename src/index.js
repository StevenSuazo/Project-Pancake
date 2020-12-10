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
    // movePlayer();
    requestAnimationFrame(this.animate);
  }

}

// --------- Player ---------------
const player = {
  x: 200,
  y: 410,
  width: 170,
  height: 200,
  frameX: 0,
  frameY: 0,
  speed: 9,
  moving: false
}

const playerSprite = new Image();
playerSprite.src = "/src/images/Player.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function movePlayer() {
  if (keys[39] && player.x < 800) {
    player.x += player.speed;
  }
  if (keys[37] && player.x > 0) {
    player.x -= player.speed;
  }
}

// --------- Pancakes ---------------
const columns = [125, 250, 375, 500, 625, 750, 875];

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