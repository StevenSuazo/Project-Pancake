// import "./styles/index.scss";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  canvas.width = 1000; 
  canvas.height = 600;

// document.addEventListener("DOMContentLoaded", () => {

//   function player() {
//     const player = new Image();
//     player.src = "/src/images/Player.png"

//     player.onload = () => {
//       ctx.drawImage(player, 200, 375, player.width / 11.9, player.height / 11.9)
//     }
//   };
  
//   function chef() {
//     const chef = new Image();
//     chef.src = "/src/images/chef.png"

//     chef.onload = () => {
//       ctx.drawImage(chef, 415, 116, chef.width / 2, chef.height / 2)
//     }
    
//   };
  
//   function pancake() {
//     const pancake = new Image();
//     pancake.src = "/src/images/pancake-A.png"

//     pancake.onload = () => {
//       ctx.drawImage(pancake, 330, 300, pancake.width / 40, pancake.height / 40)
//     }
//   };

//   function animate() {
    
//     // change position
    
    
//   }
  
//   player()
//   chef()
//   pancake()

// })

const keys = [];
const columns = [125, 250, 375, 500, 625, 750, 875];

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
const pancake = {
  x: columns[Math.floor(Math.random() * columns.length)],
  y: 0,
  width: 200,
  height: 200,
  frameX: 0,
  frameY: 0,
  speed: 2,
  moving: false
}

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
  "/src/images/pancake-Z.png",
];

let startingPancakes = true;

// --------- Player ---------------
const playerSprite = new Image();
playerSprite.src = "/src/images/Player.png"

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function movePlayer(){
  if (keys[39] && player.x < 800) {
    player.x += player.speed;
  }
  if (keys[37] && player.x > 0) {
    player.x -= player.speed;
  }
}

// --------- Pancakes ---------------
const pancakeSprite = new Image();
pancakeSprite.src = allPancakes[Math.floor(Math.random() * allPancakes.length)]

function drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

function movePancake(){
  if (pancake.y < 540) {
    pancake.y += pancake.speed;
  }
  if (pancake.y == 540) {
    // gameOver();
  }
}

function makePanckaes() {
  drawPancake(pancakeSprite, 0, 0, pancake.width, pancake.height, pancake.x, pancake.y, 
    pancake.width, pancake.height);
}

// --------- Animimation ---------------
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, 
    player.width, player.height);

  if (startingPancakes){
    for(i=0; i < 7; i++){
      // makePanckaes();
    }
    startingPancakes = false
  }
  makePanckaes();
  movePlayer();
  movePancake();
  requestAnimationFrame(animate);
}
animate();


// window.addEventListener("keydown", function(e){
//   keys[e.keyCode] = true;
//   console.log(keys)
// });
// window.addEventListener("keyup", function(e){
//   delete keys[e.keyCode];
// });