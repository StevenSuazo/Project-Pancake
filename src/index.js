let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

class Game {
  constructor() {
    this.pancakesOnBoard = [];
    this.burntPancakes = [];
    this.animate = this.animate.bind(this);
    this.gameOver = false;
    this.score = 0;
    this.lives = 3;
    this.player = new Player;
  
    this.addPancake();
    this.addBurntPancake();
    this.animate();
    
  }

  drawScore() {
    ctx.font = 'bold 30px Sans-Serif';
    ctx.fillStyle = "#66A1E7"
    ctx.strokeStyle = "#C5E0F5";
    ctx.fillText("SCORE: " + this.score, 10, 30);
    ctx.strokeText("SCORE: " + this.score, 10, 30);
  }

  drawLives() {
    ctx.font = 'bold 30px Sans-Serif';
    ctx.fillStyle = "#66A1E7"
    ctx.strokeStyle = "#C5E0F5";
    ctx.fillText("LIVES: " + this.lives, 850, 30);
    ctx.strokeText("LIVES: " + this.lives, 850, 30);
  }

  drawGameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 40px Sans-Serif';
    ctx.fillStyle = "#FBA7B6"
    ctx.strokeStyle = "black";
    ctx.fillText("GAME OVER", 380, 420);
    ctx.fillText("YOUR SCORE: " + this.score, 350, 460);
    ctx.fillText("Press SPACE to play again!", 250, 500);
    ctx.strokeText("GAME OVER", 380, 420);
    ctx.strokeText("YOUR SCORE: " + this.score, 350, 460);
    ctx.strokeText("Press SPACE to play again!", 250, 500);
    this.gameOver = true;
  }

  addPancake() {
    setInterval(() => {
      if (new Pancake instanceof Object && this.gameOver == false ) {
        this.pancakesOnBoard.push(new Pancake);
      }
    }, 1500);
  }

  addBurntPancake() {
    setInterval(() => {
      if (new BurntPancake instanceof Object && this.gameOver == false ) {
        this.burntPancakes.push(new BurntPancake);
      }
    }, 3000);
  }

  removePancake(obj) {
    if (obj instanceof Pancake) {
      this.pancakesOnBoard.splice(this.pancakesOnBoard.indexOf(obj), 1);
    } else if (obj instanceof BurntPancake) {
      this.burntPancakes.splice(this.burntPancakes.indexOf(obj), 1);
    }
  }

  animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.player.movePlayer();
    this.player.makePlayer();
  
    this.pancakesOnBoard.forEach((pancake) => {
      if (this.score <= 5) {
        pancake.movePancake();
        pancake.makePancake();
      } else if (this.score >= 6 && this.score <= 10) {
        pancake.speed = 1.75;
        pancake.movePancake();
        pancake.makePancake();
      } else if (this.score >= 11 && this.score <= 15){
        pancake.speed = 2.5;
        pancake.movePancake();
        pancake.makePancake();
      } else {
        pancake.speed = 3;
        pancake.movePancake();
        pancake.makePancake();
      }

      if (pancake.y > 595) {
        this.removePancake(pancake);
      }
    })

    this.burntPancakes.forEach((pancake) => {
      if (this.score <= 5) {
        pancake.movePancake();
        pancake.makeBurntPancake();
      } else if (this.score >= 6 && this.score <= 10) {
        pancake.speed = 1.75;
        pancake.movePancake();
        pancake.makeBurntPancake();
      } else if (this.score >= 11 && this.score <= 15) {
        pancake.speed = 2.5;
        pancake.movePancake();
        pancake.makeBurntPancake();
      } else {
        pancake.speed = 3;
        pancake.movePancake();
        pancake.makeBurntPancake();
      }

      if (pancake.y > 595) {
        this.removePancake(pancake);
      }
    })

    if (this.lives == 0) {
      this.drawGameOver();
      this.pancakesOnBoard = [];
      this.burntPancakes = [];
    }

    this.drawScore();
    this.drawLives();
    this.checkForCollision();
    requestAnimationFrame(this.animate);
  }


  checkForCollision() {
    this.pancakesOnBoard.forEach((pancake) => {
      if (pancake.collidesWith(this.player)) {
        this.score++;
        this.removePancake(pancake)
      }
    });

    this.burntPancakes.forEach((pancake) => {
      if (pancake.collidesWith(this.player)) {
        this.lives--;
        this.removePancake(pancake)
      }
    });
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

class Player {
  constructor() {
    this.x = 200
    this.y = 425
    this.width = 170
    this.height = 300
    this.speed = 6
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
  };

  makePlayer() {
    const playerSprite = new Image();
    playerSprite.src = "./src/images/Player2.png";
    
    this.drawSprite(playerSprite, 0, 0, this.width, this.height, this.x, this.y,
      this.width, this.height)

  };

  movePlayer() {
    if(keys[37] && this.x > -30) {
      this.x -= this.speed;
    }
    if(keys[39] && this.x < 830) {
      this.x += this.speed;
    }
  };
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
    pancakeSprite1.src = "./src/images/pancake.png";

    this.drawPancake(pancakeSprite1, 0, 0, this.width, this.height, this.x, this.y,
      this.width, this.height)
  }

  movePancake() {
      this.y += this.speed;
  }

  collidesWith(obj) {
    return (((this.x + this.width / 2) > (obj.x + 50) && (this.x < ((obj.x + 50) + obj.width - 80))) && 
    ((this.y + this.height) > (obj.y + 150) && (this.y < ((obj.y + 150) + obj.height))));
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

  makeBurntPancake() {
    const pancakeSprite2 = new Image();
    pancakeSprite2.src = "./src/images/burnt.png";

    this.drawPancake(pancakeSprite2, 0, 0, this.width, this.height, this.x, this.y,
      this.width, this.height)
  }

  movePancake() {
      this.y += this.speed;
  }

  collidesWith(obj) {
    return (((this.x + this.width / 2) > (obj.x + 50) && (this.x < ((obj.x + 50) + obj.width - 80))) && 
    ((this.y + (this.height - 10)) > (obj.y + 150) && (this.y < ((obj.y + 150) + obj.height))));
  }
}

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    new Game();
  }
});

class Splash {
  constructor() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 40px Sans-Serif';
    ctx.fillStyle = "#FBA7B6";
    ctx.strokeStyle = "black";
    ctx.fillText("Welcome to", 420, 420);
    ctx.fillText("Project Pancake!", 370, 460);
    ctx.fillText("Press SPACE to start a new game", 230, 510);
    ctx.strokeText("Welcome to", 420, 420);
    ctx.strokeText("Project Pancake!", 370, 460);
    ctx.strokeText("Press SPACE to start a new game", 230, 510);
    this.gameOver = true;
  }
}

new Splash()
