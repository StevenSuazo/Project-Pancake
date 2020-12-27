let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;
const then = Date.now();
let now;

class Game {
  constructor() {
    this.pancakesOnBoard = [];
    this.animate = this.animate.bind(this);
    this.score = 0
  
    this.addPancake();
    this.animate();
  }

  addPancake() {
    setInterval(() => {
      if (new Pancake instanceof Object) {
        this.pancakesOnBoard.push(new Pancake);
      }
    }, 3000);
    setInterval(() => {
      if (new Pancake instanceof Object) {
        this.pancakesOnBoard.push(new BurntPancake);
      }
    }, 5500);
  }

  animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y,
      player.width, player.height);
  
    this.pancakesOnBoard.forEach((pancake) => {
      if (this.score <= 5) {
        pancake.movePancake();
        pancake.makePancake();
      } else if (this.score >= 6 && this.score <= 10) {
        pancake.speed = 1.5;
        pancake.movePancake();
        pancake.makePancake();
      } else {
        pancake.speed = 2;
        pancake.movePancake();
        pancake.makePancake();
      }
    })

    this.pancakesOnBoard.forEach((pancake) => {
      if (pancake.y + pancake.height == player.y + 150) {
        console.log("collison");
      }
    })
    movePlayer();
    requestAnimationFrame(this.animate);
  }


}

// --------- Player ---------------
const keys = [];

window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});

window.addEventListener("keyup", function(e) {
  delete keys[e.keyCode];
});

const player = {
  x: 200,
  y: 350,
  width: 170,
  height: 300,
  speed: 6,
};

const playerSprite = new Image();
playerSprite.src = "/src/images/Player2.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
};

function movePlayer() {
  if(keys[37] && player.x > -30) {
    player.x -= player.speed;
  }
  if(keys[39] && player.x < 830) {
    player.x += player.speed;
  }
};



// --------- Pancakes ---------------
class Pancake {
  constructor() {
    this.x = Math.floor(Math.random() * Math.floor(820))
    this.y = - 50
    this.width = 60
    this.height = 60
    this.speed = 1
  }

  drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  makePancake() {
    const pancakeSprite1 = new Image();
    pancakeSprite1.src = "/src/images/pancake.png";

    this.drawPancake(pancakeSprite1, 0, 0, this.width, this.height, this.x, this.y,
      this.width, this.height)
  }

  movePancake() {
      this.y += this.speed;

    // if (this.y == 595) {
    //   alert("GAMEOVER!");
    // }
  }


}

class BurntPancake {
  constructor() {
    this.x = Math.floor(Math.random() * Math.floor(820))
    this.y = - 50
    this.width = 60
    this.height = 60
    this.speed = 1
  }

  drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  }

  makePancake() {
    const pancakeSprite2 = new Image();
    pancakeSprite2.src = "/src/images/burnt.png";

    this.drawPancake(pancakeSprite2, 0, 0, this.width, this.height, this.x, this.y,
      this.width, this.height)
  }

  movePancake() {
      this.y += this.speed;

    // if (this.y == 595) {
    //   alert("GAMEOVER!");
    // }
  }


}

new Game();
