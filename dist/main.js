/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 600;

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.pancakesOnBoard = [];
    this.burntPancakes = [];
    this.animate = this.animate.bind(this);
    this.gameOver = false;
    this.score = 0;
    this.lives = 3;
    this.player = new Player();
    this.addPancake();
    this.addBurntPancake();
    this.animate();
  }

  _createClass(Game, [{
    key: "drawScore",
    value: function drawScore() {
      ctx.font = 'bold 30px Sans-Serif';
      ctx.fillStyle = "#1f599b";
      ctx.strokeStyle = "#C5E0F5";
      ctx.fillText("SCORE: " + this.score, 10, 30);
      ctx.strokeText("SCORE: " + this.score, 10, 30);
    }
  }, {
    key: "drawLives",
    value: function drawLives() {
      ctx.font = 'bold 30px Sans-Serif';
      ctx.fillStyle = "#1f599b";
      ctx.strokeStyle = "#C5E0F5";
      ctx.fillText("LIVES: " + this.lives, 850, 30);
      ctx.strokeText("LIVES: " + this.lives, 850, 30);
    }
  }, {
    key: "drawGameOver",
    value: function drawGameOver() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 40px Sans-Serif';
      ctx.fillStyle = "#FBA7B6";
      ctx.strokeStyle = "black";
      ctx.fillText("GAME OVER", 380, 420);
      ctx.fillText("YOUR SCORE: " + this.score, 350, 460);
      ctx.fillText("Press SPACE to play again!", 250, 500);
      ctx.strokeText("GAME OVER", 380, 420);
      ctx.strokeText("YOUR SCORE: " + this.score, 350, 460);
      ctx.strokeText("Press SPACE to play again!", 250, 500);
      this.gameOver = true;
    }
  }, {
    key: "addPancake",
    value: function addPancake() {
      var _this = this;

      setInterval(function () {
        if (new Pancake() instanceof Object && _this.gameOver == false) {
          _this.pancakesOnBoard.push(new Pancake());
        }
      }, 1500);
    }
  }, {
    key: "addBurntPancake",
    value: function addBurntPancake() {
      var _this2 = this;

      setInterval(function () {
        if (new BurntPancake() instanceof Object && _this2.gameOver == false) {
          _this2.burntPancakes.push(new BurntPancake());
        }
      }, 3000);
    }
  }, {
    key: "removePancake",
    value: function removePancake(obj) {
      if (obj instanceof Pancake) {
        this.pancakesOnBoard.splice(this.pancakesOnBoard.indexOf(obj), 1);
      } else if (obj instanceof BurntPancake) {
        this.burntPancakes.splice(this.burntPancakes.indexOf(obj), 1);
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.player.movePlayer();
      this.player.makePlayer();
      this.pancakesOnBoard.forEach(function (pancake) {
        if (_this3.score <= 5) {
          pancake.movePancake();
          pancake.makePancake();
        } else if (_this3.score >= 6 && _this3.score <= 10) {
          pancake.speed = 2.5;
          pancake.movePancake();
          pancake.makePancake();
        } else if (_this3.score >= 11 && _this3.score <= 15) {
          pancake.speed = 3;
          pancake.movePancake();
          pancake.makePancake();
        } else {
          pancake.speed = 3.5;
          pancake.movePancake();
          pancake.makePancake();
        }

        if (pancake.y > 595) {
          _this3.removePancake(pancake);
        }
      });
      this.burntPancakes.forEach(function (pancake) {
        if (_this3.score <= 5) {
          pancake.movePancake();
          pancake.makeBurntPancake();
        } else if (_this3.score >= 6 && _this3.score <= 10) {
          pancake.speed = 1.75;
          pancake.movePancake();
          pancake.makeBurntPancake();
        } else if (_this3.score >= 11 && _this3.score <= 15) {
          pancake.speed = 2.5;
          pancake.movePancake();
          pancake.makeBurntPancake();
        } else {
          pancake.speed = 3;
          pancake.movePancake();
          pancake.makeBurntPancake();
        }

        if (pancake.y > 595) {
          _this3.removePancake(pancake);
        }
      });

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
  }, {
    key: "checkForCollision",
    value: function checkForCollision() {
      var _this4 = this;

      this.pancakesOnBoard.forEach(function (pancake) {
        if (pancake.collidesWith(_this4.player)) {
          _this4.score++;

          _this4.removePancake(pancake);
        }
      });
      this.burntPancakes.forEach(function (pancake) {
        if (pancake.collidesWith(_this4.player)) {
          _this4.lives--;

          _this4.removePancake(pancake);
        }
      });
    }
  }]);

  return Game;
}(); // --------- Player ---------------


var keys = [];
window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];
});

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.x = 200;
    this.y = 425;
    this.width = 170;
    this.height = 300;
    this.speed = 6;
  }

  _createClass(Player, [{
    key: "drawSprite",
    value: function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "makePlayer",
    value: function makePlayer() {
      var playerSprite = new Image();
      playerSprite.src = "./src/images/Player2.png";
      this.drawSprite(playerSprite, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "movePlayer",
    value: function movePlayer() {
      if (keys[37] && this.x > -30) {
        this.x -= this.speed;
      }

      if (keys[39] && this.x < 830) {
        this.x += this.speed;
      }
    }
  }]);

  return Player;
}();

; // --------- Pancakes ---------------

var Pancake = /*#__PURE__*/function () {
  function Pancake() {
    _classCallCheck(this, Pancake);

    this.x = Math.floor(Math.random() * Math.floor(820));
    this.y = -50;
    this.width = 60;
    this.height = 60;
    this.speed = 1.75;
  }

  _createClass(Pancake, [{
    key: "drawPancake",
    value: function drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "makePancake",
    value: function makePancake() {
      var pancakeSprite1 = new Image();
      pancakeSprite1.src = "./src/images/pancake.png";
      this.drawPancake(pancakeSprite1, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "movePancake",
    value: function movePancake() {
      this.y += this.speed;
    }
  }, {
    key: "collidesWith",
    value: function collidesWith(obj) {
      return this.x + this.width / 2 > obj.x + 50 && this.x < obj.x + 50 + obj.width - 80 && this.y + this.height > obj.y + 150 && this.y < obj.y + 150 + obj.height;
    }
  }]);

  return Pancake;
}();

var BurntPancake = /*#__PURE__*/function () {
  function BurntPancake() {
    _classCallCheck(this, BurntPancake);

    this.x = Math.floor(Math.random() * Math.floor(820));
    this.y = -50;
    this.width = 60;
    this.height = 60;
    this.speed = 1.75;
  }

  _createClass(BurntPancake, [{
    key: "drawPancake",
    value: function drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "makeBurntPancake",
    value: function makeBurntPancake() {
      var pancakeSprite2 = new Image();
      pancakeSprite2.src = "./src/images/burnt.png";
      this.drawPancake(pancakeSprite2, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "movePancake",
    value: function movePancake() {
      this.y += this.speed;
    }
  }, {
    key: "collidesWith",
    value: function collidesWith(obj) {
      return this.x + this.width / 2 > obj.x + 50 && this.x < obj.x + 50 + obj.width - 80 && this.y + (this.height - 10) > obj.y + 150 && this.y < obj.y + 150 + obj.height;
    }
  }]);

  return BurntPancake;
}();

window.addEventListener("keydown", function (e) {
  if (e.keyCode == 32) {
    new Game();
  }
});

var Splash = function Splash() {
  _classCallCheck(this, Splash);

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
};

new Splash();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJHYW1lIiwicGFuY2FrZXNPbkJvYXJkIiwiYnVybnRQYW5jYWtlcyIsImFuaW1hdGUiLCJiaW5kIiwiZ2FtZU92ZXIiLCJzY29yZSIsImxpdmVzIiwicGxheWVyIiwiUGxheWVyIiwiYWRkUGFuY2FrZSIsImFkZEJ1cm50UGFuY2FrZSIsImZvbnQiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImZpbGxUZXh0Iiwic3Ryb2tlVGV4dCIsImNsZWFyUmVjdCIsInNldEludGVydmFsIiwiUGFuY2FrZSIsIk9iamVjdCIsInB1c2giLCJCdXJudFBhbmNha2UiLCJvYmoiLCJzcGxpY2UiLCJpbmRleE9mIiwibW92ZVBsYXllciIsIm1ha2VQbGF5ZXIiLCJmb3JFYWNoIiwicGFuY2FrZSIsIm1vdmVQYW5jYWtlIiwibWFrZVBhbmNha2UiLCJzcGVlZCIsInkiLCJyZW1vdmVQYW5jYWtlIiwibWFrZUJ1cm50UGFuY2FrZSIsImRyYXdHYW1lT3ZlciIsImRyYXdTY29yZSIsImRyYXdMaXZlcyIsImNoZWNrRm9yQ29sbGlzaW9uIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY29sbGlkZXNXaXRoIiwia2V5cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsIngiLCJpbWciLCJzWCIsInNZIiwic1ciLCJzSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwicGxheWVyU3ByaXRlIiwiSW1hZ2UiLCJzcmMiLCJkcmF3U3ByaXRlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGFuY2FrZVNwcml0ZTEiLCJkcmF3UGFuY2FrZSIsInBhbmNha2VTcHJpdGUyIiwiU3BsYXNo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QUosQ0FBZSxrQkFBZixFQUFtQyxHQUFuQyxFQUF3QyxHQUF4QztBQUNBcEIsS0FBRyxDQUFDb0IsVUFBSixDQUFlLGlDQUFmLEVBQWtELEdBQWxELEVBQXVELEdBQXZEO0FBQ0EsT0FBS1gsUUFBTCxHQUFnQixJQUFoQjtBQUNELEM7O0FBR0gsSUFBSStELE1BQUosRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDEwMDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYW5jYWtlc09uQm9hcmQgPSBbXTtcbiAgICB0aGlzLmJ1cm50UGFuY2FrZXMgPSBbXTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5saXZlcyA9IDM7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyO1xuICBcbiAgICB0aGlzLmFkZFBhbmNha2UoKTtcbiAgICB0aGlzLmFkZEJ1cm50UGFuY2FrZSgpO1xuICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIFxuICB9XG5cbiAgZHJhd1Njb3JlKCkge1xuICAgIGN0eC5mb250ID0gJ2JvbGQgMzBweCBTYW5zLVNlcmlmJztcbiAgICBjdHguZmlsbFN0eWxlID0gXCIjMWY1OTliXCJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcIiNDNUUwRjVcIjtcbiAgICBjdHguZmlsbFRleHQoXCJTQ09SRTogXCIgKyB0aGlzLnNjb3JlLCAxMCwgMzApO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiU0NPUkU6IFwiICsgdGhpcy5zY29yZSwgMTAsIDMwKTtcbiAgfVxuXG4gIGRyYXdMaXZlcygpIHtcbiAgICBjdHguZm9udCA9ICdib2xkIDMwcHggU2Fucy1TZXJpZic7XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFmNTk5YlwiXG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjQzVFMEY1XCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiTElWRVM6IFwiICsgdGhpcy5saXZlcywgODUwLCAzMCk7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJMSVZFUzogXCIgKyB0aGlzLmxpdmVzLCA4NTAsIDMwKTtcbiAgfVxuXG4gIGRyYXdHYW1lT3ZlcigpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCA0MHB4IFNhbnMtU2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGQkE3QjZcIlxuICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBjdHguZmlsbFRleHQoXCJHQU1FIE9WRVJcIiwgMzgwLCA0MjApO1xuICAgIGN0eC5maWxsVGV4dChcIllPVVIgU0NPUkU6IFwiICsgdGhpcy5zY29yZSwgMzUwLCA0NjApO1xuICAgIGN0eC5maWxsVGV4dChcIlByZXNzIFNQQUNFIHRvIHBsYXkgYWdhaW4hXCIsIDI1MCwgNTAwKTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIkdBTUUgT1ZFUlwiLCAzODAsIDQyMCk7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJZT1VSIFNDT1JFOiBcIiArIHRoaXMuc2NvcmUsIDM1MCwgNDYwKTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIlByZXNzIFNQQUNFIHRvIHBsYXkgYWdhaW4hXCIsIDI1MCwgNTAwKTtcbiAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgfVxuXG4gIGFkZFBhbmNha2UoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKG5ldyBQYW5jYWtlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHRoaXMuZ2FtZU92ZXIgPT0gZmFsc2UgKSB7XG4gICAgICAgIHRoaXMucGFuY2FrZXNPbkJvYXJkLnB1c2gobmV3IFBhbmNha2UpO1xuICAgICAgfVxuICAgIH0sIDE1MDApO1xuICB9XG5cbiAgYWRkQnVybnRQYW5jYWtlKCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgQnVybnRQYW5jYWtlIGluc3RhbmNlb2YgT2JqZWN0ICYmIHRoaXMuZ2FtZU92ZXIgPT0gZmFsc2UgKSB7XG4gICAgICAgIHRoaXMuYnVybnRQYW5jYWtlcy5wdXNoKG5ldyBCdXJudFBhbmNha2UpO1xuICAgICAgfVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgcmVtb3ZlUGFuY2FrZShvYmopIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgUGFuY2FrZSkge1xuICAgICAgdGhpcy5wYW5jYWtlc09uQm9hcmQuc3BsaWNlKHRoaXMucGFuY2FrZXNPbkJvYXJkLmluZGV4T2Yob2JqKSwgMSk7XG4gICAgfSBlbHNlIGlmIChvYmogaW5zdGFuY2VvZiBCdXJudFBhbmNha2UpIHtcbiAgICAgIHRoaXMuYnVybnRQYW5jYWtlcy5zcGxpY2UodGhpcy5idXJudFBhbmNha2VzLmluZGV4T2Yob2JqKSwgMSk7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcblxuICAgIHRoaXMucGxheWVyLm1vdmVQbGF5ZXIoKTtcbiAgICB0aGlzLnBsYXllci5tYWtlUGxheWVyKCk7XG4gIFxuICAgIHRoaXMucGFuY2FrZXNPbkJvYXJkLmZvckVhY2goKHBhbmNha2UpID0+IHtcbiAgICAgIGlmICh0aGlzLnNjb3JlIDw9IDUpIHtcbiAgICAgICAgcGFuY2FrZS5tb3ZlUGFuY2FrZSgpO1xuICAgICAgICBwYW5jYWtlLm1ha2VQYW5jYWtlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPj0gNiAmJiB0aGlzLnNjb3JlIDw9IDEwKSB7XG4gICAgICAgIHBhbmNha2Uuc3BlZWQgPSAyLjU7XG4gICAgICAgIHBhbmNha2UubW92ZVBhbmNha2UoKTtcbiAgICAgICAgcGFuY2FrZS5tYWtlUGFuY2FrZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlID49IDExICYmIHRoaXMuc2NvcmUgPD0gMTUpe1xuICAgICAgICBwYW5jYWtlLnNwZWVkID0gMztcbiAgICAgICAgcGFuY2FrZS5tb3ZlUGFuY2FrZSgpO1xuICAgICAgICBwYW5jYWtlLm1ha2VQYW5jYWtlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYW5jYWtlLnNwZWVkID0gMy41O1xuICAgICAgICBwYW5jYWtlLm1vdmVQYW5jYWtlKCk7XG4gICAgICAgIHBhbmNha2UubWFrZVBhbmNha2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhbmNha2UueSA+IDU5NSkge1xuICAgICAgICB0aGlzLnJlbW92ZVBhbmNha2UocGFuY2FrZSk7XG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuYnVybnRQYW5jYWtlcy5mb3JFYWNoKChwYW5jYWtlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY29yZSA8PSA1KSB7XG4gICAgICAgIHBhbmNha2UubW92ZVBhbmNha2UoKTtcbiAgICAgICAgcGFuY2FrZS5tYWtlQnVybnRQYW5jYWtlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2NvcmUgPj0gNiAmJiB0aGlzLnNjb3JlIDw9IDEwKSB7XG4gICAgICAgIHBhbmNha2Uuc3BlZWQgPSAxLjc1O1xuICAgICAgICBwYW5jYWtlLm1vdmVQYW5jYWtlKCk7XG4gICAgICAgIHBhbmNha2UubWFrZUJ1cm50UGFuY2FrZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlID49IDExICYmIHRoaXMuc2NvcmUgPD0gMTUpIHtcbiAgICAgICAgcGFuY2FrZS5zcGVlZCA9IDIuNTtcbiAgICAgICAgcGFuY2FrZS5tb3ZlUGFuY2FrZSgpO1xuICAgICAgICBwYW5jYWtlLm1ha2VCdXJudFBhbmNha2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmNha2Uuc3BlZWQgPSAzO1xuICAgICAgICBwYW5jYWtlLm1vdmVQYW5jYWtlKCk7XG4gICAgICAgIHBhbmNha2UubWFrZUJ1cm50UGFuY2FrZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAocGFuY2FrZS55ID4gNTk1KSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUGFuY2FrZShwYW5jYWtlKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHRoaXMubGl2ZXMgPT0gMCkge1xuICAgICAgdGhpcy5kcmF3R2FtZU92ZXIoKTtcbiAgICAgIHRoaXMucGFuY2FrZXNPbkJvYXJkID0gW107XG4gICAgICB0aGlzLmJ1cm50UGFuY2FrZXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmRyYXdTY29yZSgpO1xuICAgIHRoaXMuZHJhd0xpdmVzKCk7XG4gICAgdGhpcy5jaGVja0ZvckNvbGxpc2lvbigpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xuICB9XG5cblxuICBjaGVja0ZvckNvbGxpc2lvbigpIHtcbiAgICB0aGlzLnBhbmNha2VzT25Cb2FyZC5mb3JFYWNoKChwYW5jYWtlKSA9PiB7XG4gICAgICBpZiAocGFuY2FrZS5jb2xsaWRlc1dpdGgodGhpcy5wbGF5ZXIpKSB7XG4gICAgICAgIHRoaXMuc2NvcmUrKztcbiAgICAgICAgdGhpcy5yZW1vdmVQYW5jYWtlKHBhbmNha2UpXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmJ1cm50UGFuY2FrZXMuZm9yRWFjaCgocGFuY2FrZSkgPT4ge1xuICAgICAgaWYgKHBhbmNha2UuY29sbGlkZXNXaXRoKHRoaXMucGxheWVyKSkge1xuICAgICAgICB0aGlzLmxpdmVzLS07XG4gICAgICAgIHRoaXMucmVtb3ZlUGFuY2FrZShwYW5jYWtlKVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLSBQbGF5ZXIgLS0tLS0tLS0tLS0tLS0tXG5jb25zdCBrZXlzID0gW107XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07XG59KTtcblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gMjAwXG4gICAgdGhpcy55ID0gNDI1XG4gICAgdGhpcy53aWR0aCA9IDE3MFxuICAgIHRoaXMuaGVpZ2h0ID0gMzAwXG4gICAgdGhpcy5zcGVlZCA9IDZcbiAgfVxuXG4gIGRyYXdTcHJpdGUoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKTtcbiAgfTtcblxuICBtYWtlUGxheWVyKCkge1xuICAgIGNvbnN0IHBsYXllclNwcml0ZSA9IG5ldyBJbWFnZSgpO1xuICAgIHBsYXllclNwcml0ZS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9QbGF5ZXIyLnBuZ1wiO1xuICAgIFxuICAgIHRoaXMuZHJhd1Nwcml0ZShwbGF5ZXJTcHJpdGUsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuXG4gIH07XG5cbiAgbW92ZVBsYXllcigpIHtcbiAgICBpZihrZXlzWzM3XSAmJiB0aGlzLnggPiAtMzApIHtcbiAgICAgIHRoaXMueCAtPSB0aGlzLnNwZWVkO1xuICAgIH1cbiAgICBpZihrZXlzWzM5XSAmJiB0aGlzLnggPCA4MzApIHtcbiAgICAgIHRoaXMueCArPSB0aGlzLnNwZWVkO1xuICAgIH1cbiAgfTtcbn07XG5cblxuLy8gLS0tLS0tLS0tIFBhbmNha2VzIC0tLS0tLS0tLS0tLS0tLVxuY2xhc3MgUGFuY2FrZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoODIwKSlcbiAgICB0aGlzLnkgPSAtIDUwXG4gICAgdGhpcy53aWR0aCA9IDYwXG4gICAgdGhpcy5oZWlnaHQgPSA2MFxuICAgIHRoaXMuc3BlZWQgPSAxLjc1XG4gIH1cblxuICBkcmF3UGFuY2FrZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpO1xuICB9XG5cbiAgbWFrZVBhbmNha2UoKSB7XG4gICAgY29uc3QgcGFuY2FrZVNwcml0ZTEgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYW5jYWtlU3ByaXRlMS5zcmMgPSBcIi4vc3JjL2ltYWdlcy9wYW5jYWtlLnBuZ1wiO1xuXG4gICAgdGhpcy5kcmF3UGFuY2FrZShwYW5jYWtlU3ByaXRlMSwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBtb3ZlUGFuY2FrZSgpIHtcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuICB9XG5cbiAgY29sbGlkZXNXaXRoKG9iaikge1xuICAgIHJldHVybiAoKCh0aGlzLnggKyB0aGlzLndpZHRoIC8gMikgPiAob2JqLnggKyA1MCkgJiYgKHRoaXMueCA8ICgob2JqLnggKyA1MCkgKyBvYmoud2lkdGggLSA4MCkpKSAmJiBcbiAgICAoKHRoaXMueSArIHRoaXMuaGVpZ2h0KSA+IChvYmoueSArIDE1MCkgJiYgKHRoaXMueSA8ICgob2JqLnkgKyAxNTApICsgb2JqLmhlaWdodCkpKSk7XG4gIH1cblxufVxuXG5jbGFzcyBCdXJudFBhbmNha2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDgyMCkpXG4gICAgdGhpcy55ID0gLSA1MFxuICAgIHRoaXMud2lkdGggPSA2MFxuICAgIHRoaXMuaGVpZ2h0ID0gNjBcbiAgICB0aGlzLnNwZWVkID0gMS43NVxuICB9XG5cbiAgZHJhd1BhbmNha2UoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpIHtcbiAgICBjdHguZHJhd0ltYWdlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKTtcbiAgfVxuXG4gIG1ha2VCdXJudFBhbmNha2UoKSB7XG4gICAgY29uc3QgcGFuY2FrZVNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYW5jYWtlU3ByaXRlMi5zcmMgPSBcIi4vc3JjL2ltYWdlcy9idXJudC5wbmdcIjtcblxuICAgIHRoaXMuZHJhd1BhbmNha2UocGFuY2FrZVNwcml0ZTIsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgbW92ZVBhbmNha2UoKSB7XG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcbiAgfVxuXG4gIGNvbGxpZGVzV2l0aChvYmopIHtcbiAgICByZXR1cm4gKCgodGhpcy54ICsgdGhpcy53aWR0aCAvIDIpID4gKG9iai54ICsgNTApICYmICh0aGlzLnggPCAoKG9iai54ICsgNTApICsgb2JqLndpZHRoIC0gODApKSkgJiYgXG4gICAgKCh0aGlzLnkgKyAodGhpcy5oZWlnaHQgLSAxMCkpID4gKG9iai55ICsgMTUwKSAmJiAodGhpcy55IDwgKChvYmoueSArIDE1MCkgKyBvYmouaGVpZ2h0KSkpKTtcbiAgfVxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGUua2V5Q29kZSA9PSAzMikge1xuICAgIG5ldyBHYW1lKCk7XG4gIH1cbn0pO1xuXG5jbGFzcyBTcGxhc2gge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZvbnQgPSAnYm9sZCA0MHB4IFNhbnMtU2VyaWYnO1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNGQkE3QjZcIjtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgY3R4LmZpbGxUZXh0KFwiV2VsY29tZSB0b1wiLCA0MjAsIDQyMCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiUHJvamVjdCBQYW5jYWtlIVwiLCAzNzAsIDQ2MCk7XG4gICAgY3R4LmZpbGxUZXh0KFwiUHJlc3MgU1BBQ0UgdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCAyMzAsIDUxMCk7XG4gICAgY3R4LnN0cm9rZVRleHQoXCJXZWxjb21lIHRvXCIsIDQyMCwgNDIwKTtcbiAgICBjdHguc3Ryb2tlVGV4dChcIlByb2plY3QgUGFuY2FrZSFcIiwgMzcwLCA0NjApO1xuICAgIGN0eC5zdHJva2VUZXh0KFwiUHJlc3MgU1BBQ0UgdG8gc3RhcnQgYSBuZXcgZ2FtZVwiLCAyMzAsIDUxMCk7XG4gICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gIH1cbn1cblxubmV3IFNwbGFzaCgpXG4iXSwic291cmNlUm9vdCI6IiJ9