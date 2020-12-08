import "./styles/index.scss";

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  function showBoard() {
    const player = new Image();
    player.src = "/src/images/Player.png"
    const chef = new Image();
    chef.src = "/src/images/chef.png"
    const pancake = new Image();
    pancake.src = "/src/images/pancake-A.png"
    // const background = new Image();
    // background.src = "/src/images/background.jpg"

    player.onload = () => {
      ctx.drawImage(player, 200, 375, player.width / 11.9, player.height / 11.9)
    }
    chef.onload = () => {
      ctx.drawImage(chef, 415, 116, chef.width / 2, chef.height / 2)
    }
    pancake.onload = () => {
      ctx.drawImage(pancake, 330, 300, pancake.width / 40, pancake.height / 40)
    }
    // background.onload = () => {
    //   ctx.drawImage(background, 0, 0, 1000, 600)
    // }
  }
  showBoard()

})