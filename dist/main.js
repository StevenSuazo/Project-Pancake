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
var then = Date.now();
var now;

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this.pancakesOnBoard = [];
    this.animate = this.animate.bind(this);
    this.score = 0;
    this.addPancake();
    this.animate();
  }

  _createClass(Game, [{
    key: "addPancake",
    value: function addPancake() {
      var _this = this;

      setInterval(function () {
        if (new Pancake() instanceof Object) {
          _this.pancakesOnBoard.push(new Pancake());
        }
      }, 3000);
      setInterval(function () {
        if (new Pancake() instanceof Object) {
          _this.pancakesOnBoard.push(new BurntPancake());
        }
      }, 5500);
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSprite(playerSprite, 0, 0, player.width, player.height, player.x, player.y, player.width, player.height);
      this.pancakesOnBoard.forEach(function (pancake) {
        if (_this2.score <= 5) {
          pancake.movePancake();
          pancake.makePancake();
        } else if (_this2.score >= 6 && _this2.score <= 10) {
          pancake.speed = 1.5;
          pancake.movePancake();
          pancake.makePancake();
        } else {
          pancake.speed = 2;
          pancake.movePancake();
          pancake.makePancake();
        }
      });
      movePlayer();
      requestAnimationFrame(this.animate);
    }
  }]);

  return Game;
}(); // --------- Player ---------------


var player = {
  x: 200,
  y: 350,
  width: 170,
  height: 300,
  speed: 6
};
var keys = [];
var playerSprite = new Image();
playerSprite.src = "/src/images/Player2.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

;

function movePlayer() {
  if (keys[37] && player.x > 0) {
    player.x -= player.speed;
  }

  if (keys[39] && player.x < 830) {
    player.x += player.speed;
  }
}

;
window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;
});
window.addEventListener("keyup", function (e) {
  delete keys[e.keyCode];
}); // --------- Pancakes ---------------

var Pancake = /*#__PURE__*/function () {
  function Pancake() {
    _classCallCheck(this, Pancake);

    this.x = Math.floor(Math.random() * Math.floor(820));
    this.y = -50;
    this.width = 60;
    this.height = 60;
    this.speed = 1;
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
      pancakeSprite1.src = "/src/images/pancake.png";
      this.drawPancake(pancakeSprite1, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "movePancake",
    value: function movePancake() {
      this.y += this.speed; // if (this.y == 595) {
      //   alert("GAMEOVER!");
      // }
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
    this.speed = 1;
  }

  _createClass(BurntPancake, [{
    key: "drawPancake",
    value: function drawPancake(img, sX, sY, sW, sH, dX, dY, dW, dH) {
      ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
    }
  }, {
    key: "makePancake",
    value: function makePancake() {
      var pancakeSprite2 = new Image();
      pancakeSprite2.src = "/src/images/burnt.png";
      this.drawPancake(pancakeSprite2, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
  }, {
    key: "movePancake",
    value: function movePancake() {
      this.y += this.speed; // if (this.y == 595) {
      //   alert("GAMEOVER!");
      // }
    }
  }]);

  return BurntPancake;
}();

new Game();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJ0aGVuIiwiRGF0ZSIsIm5vdyIsIkdhbWUiLCJwYW5jYWtlc09uQm9hcmQiLCJhbmltYXRlIiwiYmluZCIsInNjb3JlIiwiYWRkUGFuY2FrZSIsInNldEludGVydmFsIiwiUGFuY2FrZSIsIk9iamVjdCIsInB1c2giLCJCdXJudFBhbmNha2UiLCJjbGVhclJlY3QiLCJkcmF3U3ByaXRlIiwicGxheWVyU3ByaXRlIiwicGxheWVyIiwieCIsInkiLCJmb3JFYWNoIiwicGFuY2FrZSIsIm1vdmVQYW5jYWtlIiwibWFrZVBhbmNha2UiLCJzcGVlZCIsIm1vdmVQbGF5ZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJrZXlzIiwiSW1hZ2UiLCJzcmMiLCJpbWciLCJzWCIsInNZIiwic1ciLCJzSCIsImRYIiwiZFkiLCJkVyIsImRIIiwiZHJhd0ltYWdlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicGFuY2FrZVNwcml0ZTEiLCJkcmF3UGFuY2FrZSIsInBhbmNha2VTcHJpdGUyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FB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IGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG5sZXQgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbmNhbnZhcy53aWR0aCA9IDEwMDA7XG5jYW52YXMuaGVpZ2h0ID0gNjAwO1xuY29uc3QgdGhlbiA9IERhdGUubm93KCk7XG5sZXQgbm93O1xuXG5jbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYW5jYWtlc09uQm9hcmQgPSBbXTtcbiAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNjb3JlID0gMFxuICBcbiAgICB0aGlzLmFkZFBhbmNha2UoKTtcbiAgICB0aGlzLmFuaW1hdGUoKTtcbiAgfVxuXG4gIGFkZFBhbmNha2UoKSB7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKG5ldyBQYW5jYWtlIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICAgIHRoaXMucGFuY2FrZXNPbkJvYXJkLnB1c2gobmV3IFBhbmNha2UpO1xuICAgICAgfVxuICAgIH0sIDMwMDApO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgUGFuY2FrZSBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgICB0aGlzLnBhbmNha2VzT25Cb2FyZC5wdXNoKG5ldyBCdXJudFBhbmNha2UpO1xuICAgICAgfVxuICAgIH0sIDU1MDApO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodClcbiAgICBkcmF3U3ByaXRlKHBsYXllclNwcml0ZSwgMCwgMCwgcGxheWVyLndpZHRoLCBwbGF5ZXIuaGVpZ2h0LCBwbGF5ZXIueCwgcGxheWVyLnksXG4gICAgICBwbGF5ZXIud2lkdGgsIHBsYXllci5oZWlnaHQpO1xuICBcbiAgICB0aGlzLnBhbmNha2VzT25Cb2FyZC5mb3JFYWNoKChwYW5jYWtlKSA9PiB7XG4gICAgICBpZiAodGhpcy5zY29yZSA8PSA1KSB7XG4gICAgICAgIHBhbmNha2UubW92ZVBhbmNha2UoKTtcbiAgICAgICAgcGFuY2FrZS5tYWtlUGFuY2FrZSgpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnNjb3JlID49IDYgJiYgdGhpcy5zY29yZSA8PSAxMCkge1xuICAgICAgICBwYW5jYWtlLnNwZWVkID0gMS41O1xuICAgICAgICBwYW5jYWtlLm1vdmVQYW5jYWtlKCk7XG4gICAgICAgIHBhbmNha2UubWFrZVBhbmNha2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhbmNha2Uuc3BlZWQgPSAyO1xuICAgICAgICBwYW5jYWtlLm1vdmVQYW5jYWtlKCk7XG4gICAgICAgIHBhbmNha2UubWFrZVBhbmNha2UoKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIG1vdmVQbGF5ZXIoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlKTtcbiAgfVxuXG5cbn1cblxuLy8gLS0tLS0tLS0tIFBsYXllciAtLS0tLS0tLS0tLS0tLS1cbmNvbnN0IHBsYXllciA9IHtcbiAgeDogMjAwLFxuICB5OiAzNTAsXG4gIHdpZHRoOiAxNzAsXG4gIGhlaWdodDogMzAwLFxuICBzcGVlZDogNixcbn07XG5cbmNvbnN0IGtleXMgPSBbXTtcblxuY29uc3QgcGxheWVyU3ByaXRlID0gbmV3IEltYWdlKCk7XG5wbGF5ZXJTcHJpdGUuc3JjID0gXCIvc3JjL2ltYWdlcy9QbGF5ZXIyLnBuZ1wiXG5cbmZ1bmN0aW9uIGRyYXdTcHJpdGUoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpIHtcbiAgY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCk7XG59O1xuXG5mdW5jdGlvbiBtb3ZlUGxheWVyKCkge1xuICBpZihrZXlzWzM3XSAmJiBwbGF5ZXIueCA+IDApIHtcbiAgICBwbGF5ZXIueCAtPSBwbGF5ZXIuc3BlZWQ7XG4gIH1cbiAgaWYoa2V5c1szOV0gJiYgcGxheWVyLnggPCA4MzApIHtcbiAgICBwbGF5ZXIueCArPSBwbGF5ZXIuc3BlZWQ7XG4gIH1cbn07XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gIGtleXNbZS5rZXlDb2RlXSA9IHRydWU7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gIGRlbGV0ZSBrZXlzW2Uua2V5Q29kZV07XG59KTtcblxuXG4vLyAtLS0tLS0tLS0gUGFuY2FrZXMgLS0tLS0tLS0tLS0tLS0tXG5jbGFzcyBQYW5jYWtlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy54ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig4MjApKVxuICAgIHRoaXMueSA9IC0gNTBcbiAgICB0aGlzLndpZHRoID0gNjBcbiAgICB0aGlzLmhlaWdodCA9IDYwXG4gICAgdGhpcy5zcGVlZCA9IDFcbiAgfVxuXG4gIGRyYXdQYW5jYWtlKGltZywgc1gsIHNZLCBzVywgc0gsIGRYLCBkWSwgZFcsIGRIKSB7XG4gICAgY3R4LmRyYXdJbWFnZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCk7XG4gIH1cblxuICBtYWtlUGFuY2FrZSgpIHtcbiAgICBjb25zdCBwYW5jYWtlU3ByaXRlMSA9IG5ldyBJbWFnZSgpO1xuICAgIHBhbmNha2VTcHJpdGUxLnNyYyA9IFwiL3NyYy9pbWFnZXMvcGFuY2FrZS5wbmdcIjtcblxuICAgIHRoaXMuZHJhd1BhbmNha2UocGFuY2FrZVNwcml0ZTEsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0LCB0aGlzLngsIHRoaXMueSxcbiAgICAgIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KVxuICB9XG5cbiAgbW92ZVBhbmNha2UoKSB7XG4gICAgICB0aGlzLnkgKz0gdGhpcy5zcGVlZDtcblxuICAgIC8vIGlmICh0aGlzLnkgPT0gNTk1KSB7XG4gICAgLy8gICBhbGVydChcIkdBTUVPVkVSIVwiKTtcbiAgICAvLyB9XG4gIH1cblxuXG59XG5cbmNsYXNzIEJ1cm50UGFuY2FrZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMueCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoODIwKSlcbiAgICB0aGlzLnkgPSAtIDUwXG4gICAgdGhpcy53aWR0aCA9IDYwXG4gICAgdGhpcy5oZWlnaHQgPSA2MFxuICAgIHRoaXMuc3BlZWQgPSAxXG4gIH1cblxuICBkcmF3UGFuY2FrZShpbWcsIHNYLCBzWSwgc1csIHNILCBkWCwgZFksIGRXLCBkSCkge1xuICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCBzWCwgc1ksIHNXLCBzSCwgZFgsIGRZLCBkVywgZEgpO1xuICB9XG5cbiAgbWFrZVBhbmNha2UoKSB7XG4gICAgY29uc3QgcGFuY2FrZVNwcml0ZTIgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYW5jYWtlU3ByaXRlMi5zcmMgPSBcIi9zcmMvaW1hZ2VzL2J1cm50LnBuZ1wiO1xuXG4gICAgdGhpcy5kcmF3UGFuY2FrZShwYW5jYWtlU3ByaXRlMiwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQsIHRoaXMueCwgdGhpcy55LFxuICAgICAgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gIH1cblxuICBtb3ZlUGFuY2FrZSgpIHtcbiAgICAgIHRoaXMueSArPSB0aGlzLnNwZWVkO1xuXG4gICAgLy8gaWYgKHRoaXMueSA9PSA1OTUpIHtcbiAgICAvLyAgIGFsZXJ0KFwiR0FNRU9WRVIhXCIpO1xuICAgIC8vIH1cbiAgfVxuXG5cbn1cblxubmV3IEdhbWUoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=