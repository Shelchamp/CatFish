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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascripts/catfish_entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascripts/cat_fish.js":
/*!*********************************!*\
  !*** ./javascripts/cat_fish.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass CatFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    this.color = \"rgba(193, 176, 23, 0)\";\n    this.pos = [350, 200];\n    this.vel = [0, 0];\n    this.height = 50;\n    this.width = 50;\n    this.radius = 25;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"assets/InBreadCat.png\";\n    this.fish_pic = fish_pic;\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n  }\n\n  update(vel, ctx) {\n    this.pos[0] += vel[0];\n    this.pos[1] += vel[1];\n    this.draw(ctx);\n    //drawImage(image, x, y, width, height)\n    ctx.drawImage(this.fish_pic, this.pos[0] - 3, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n\n  swim(move) {\n\n    if (this.vel[0] === CatFish.MAX_V_NEG) {\n      this.vel[0] = CatFish.MAX_V_NEG + .5;\n    } else if (this.vel[0] === CatFish.MAX_V_POS) {\n      this.vel[0] = CatFish.MAX_V_POS - 0.5;\n    } else {\n      this.vel[0] += move[0];\n    }\n\n    if (this.vel[1] === CatFish.MAX_V_NEG) {\n      this.vel[1] = CatFish.MAX_V_NEG + .50;\n    } else if (this.vel[1] === CatFish.MAX_V_POS) {\n      this.vel[1] = CatFish.MAX_V_POS - .50;\n    }{\n      this.vel[1] += move[1];\n    }\n\n    // changes cat facing direction based on whether\n    // pos[0] is being added or subtracted from\n    if (move[0] < 0) {\n      this.fish_pic.src = \"assets/InBreadCatFaceLeft.png\";\n    } else if (move[0] > 0) {\n      this.fish_pic.src = \"assets/InBreadCat.png\";\n    }\n  }\n\n  bindKeyHandlers() {\n\n    Object.keys(CatFish.MOVES).forEach(k => {\n      const move = CatFish.MOVES[k];\n      key(k, () => {\n        this.swim(move);\n      });\n    });\n  }\n\n}\n\nCatFish.MOVES = {\n  'w': [0, -0.5],\n  'a': [-0.5, 0],\n  's': [0, 0.5],\n  'd': [0.5, 0],\n\n  'up': [0, -0.5],\n  'left': [-0.5, 0],\n  'down': [0, 0.5],\n  'right': [0.5, 0]\n};\n\nCatFish.MAX_V_POS = 5;\nCatFish.MAX_V_NEG = -5;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9qYXZhc2NyaXB0cy9jYXRfZmlzaC5qcz9mYTM3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSAnLi9tb3Zpbmdfb2JqZWN0J1xuXG5jbGFzcyBDYXRGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTkzLCAxNzYsIDIzLCAwKVwiO1xuICAgIHRoaXMucG9zID0gWzM1MCwgMjAwXVxuICAgIHRoaXMudmVsID0gWzAsMF07XG4gICAgdGhpcy5oZWlnaHQgPSA1MFxuICAgIHRoaXMud2lkdGggPSA1MFxuICAgIHRoaXMucmFkaXVzID0gMjU7XG5cbiAgICBsZXQgZmlzaF9waWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBmaXNoX3BpYy5zcmM9XCJhc3NldHMvSW5CcmVhZENhdC5wbmdcIlxuICAgIHRoaXMuZmlzaF9waWMgPSBmaXNoX3BpY1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG5cbiAgfVxuXG4gIHVwZGF0ZSh2ZWwsIGN0eCl7XG4gICAgdGhpcy5wb3NbMF0gKz0gdmVsWzBdXG4gICAgdGhpcy5wb3NbMV0gKz0gdmVsWzFdXG4gICAgdGhpcy5kcmF3KGN0eClcbiAgICAvL2RyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMuZmlzaF9waWMsIHRoaXMucG9zWzBdLTMsIHRoaXMucG9zWzFdLTUsIHRoaXMud2lkdGgrMTAsIHRoaXMuaGVpZ2h0KzEwKVxuICB9XG5cbiAgc3dpbShtb3ZlKXtcblxuXG4gICAgaWYgKHRoaXMudmVsWzBdID09PSBDYXRGaXNoLk1BWF9WX05FRyl7XG4gICAgICB0aGlzLnZlbFswXSA9IENhdEZpc2guTUFYX1ZfTkVHICsgLjVcbiAgICB9IGVsc2UgaWYgKHRoaXMudmVsWzBdID09PSBDYXRGaXNoLk1BWF9WX1BPUykge1xuICAgICAgdGhpcy52ZWxbMF0gPSBDYXRGaXNoLk1BWF9WX1BPUyAtIDAuNVxuICAgIH1lbHNlIHtcbiAgICAgIHRoaXMudmVsWzBdICs9IG1vdmVbMF07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmVsWzFdID09PSBDYXRGaXNoLk1BWF9WX05FRyl7XG4gICAgICB0aGlzLnZlbFsxXSA9IENhdEZpc2guTUFYX1ZfTkVHICsgLjUwXG4gICAgfSBlbHNlIGlmICh0aGlzLnZlbFsxXSA9PT0gQ2F0RmlzaC5NQVhfVl9QT1MpIHtcbiAgICAgIHRoaXMudmVsWzFdID0gQ2F0RmlzaC5NQVhfVl9QT1MgLSAuNTBcbiAgICB9e1xuICAgICAgdGhpcy52ZWxbMV0gKz0gbW92ZVsxXTtcblxuICAgIH1cblxuICAgIC8vIGNoYW5nZXMgY2F0IGZhY2luZyBkaXJlY3Rpb24gYmFzZWQgb24gd2hldGhlclxuICAgIC8vIHBvc1swXSBpcyBiZWluZyBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb21cbiAgICBpZihtb3ZlWzBdIDwgMCl7XG4gICAgICB0aGlzLmZpc2hfcGljLnNyYz1cImFzc2V0cy9JbkJyZWFkQ2F0RmFjZUxlZnQucG5nXCJcbiAgICB9IGVsc2UgaWYgKG1vdmVbMF0gPiAwKXtcbiAgICAgIHRoaXMuZmlzaF9waWMuc3JjPVwiYXNzZXRzL0luQnJlYWRDYXQucG5nXCJcbiAgICB9XG4gIH1cblxuICBiaW5kS2V5SGFuZGxlcnMoKXtcblxuICAgIE9iamVjdC5rZXlzKENhdEZpc2guTU9WRVMpLmZvckVhY2goKGspID0+e1xuICAgICAgY29uc3QgbW92ZSA9IENhdEZpc2guTU9WRVNba107XG4gICAgICBrZXkoaywgKCkgPT4ge3RoaXMuc3dpbShtb3ZlKTsgfSlcbiAgICB9KVxuXG4gIH1cblxuXG5cblxuXG59XG5cbkNhdEZpc2guTU9WRVMgPSB7XG4gICd3JzogWzAsIC0wLjVdLFxuICAnYSc6IFstMC41LCAwXSxcbiAgJ3MnOiBbMCwgMC41XSxcbiAgJ2QnOiBbMC41LCAwXSxcblxuICAndXAnOiBbMCwgLTAuNV0sXG4gICdsZWZ0JzogWy0wLjUsIDBdLFxuICAnZG93bic6IFswLCAwLjVdLFxuICAncmlnaHQnOiBbMC41LCAwXVxufVxuXG5DYXRGaXNoLk1BWF9WX1BPUyA9IDU7XG5DYXRGaXNoLk1BWF9WX05FRyA9IC01O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgQ2F0RmlzaDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBdkVBO0FBQ0E7QUE2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./javascripts/cat_fish.js\n");

/***/ }),

/***/ "./javascripts/catfish_entry.js":
/*!**************************************!*\
  !*** ./javascripts/catfish_entry.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other_fish */ \"./javascripts/other_fish.js\");\n/* harmony import */ var _cat_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat_fish */ \"./javascripts/cat_fish.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game */ \"./javascripts/game.js\");\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const canvas = document.getElementById('canny');\n  // const canvasLeft = document.getElementById('canny-left');\n  // const canvasRight = document.getElementById('canny-right');\n  const c = canvas.getContext('2d');\n  // const cLeft = canvasLeft.getContext('2d');\n  // const cRight = canvasRight.getContext('2d');\n  const start = document.getElementById('start');\n\n  function gameStart() {\n\n    game.waves = setInterval(() => {\n      game.addFish();\n    }, 1000);\n\n    game.moment = setInterval(() => {\n      game.momentum(game.catFish);\n    }, 1000);\n\n    animate();\n\n    start.classList.add('hideStart');\n  }\n\n  start.addEventListener(\"click\", gameStart);\n\n  let game = new _game__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n  function animate() {\n\n    if (game.lost === false) {\n      requestAnimationFrame(animate);\n      game.drawGame(c);\n    } else {\n      clearInterval(game.waves);\n      clearInterval(game.moment);\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9jYXRmaXNoX2VudHJ5LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL2NhdGZpc2hfZW50cnkuanM/OWM0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgQ2F0RmlzaCBmcm9tICcuL2NhdF9maXNoJztcbmltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5ueScpO1xuICAvLyBjb25zdCBjYW52YXNMZWZ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nhbm55LWxlZnQnKTtcbiAgLy8gY29uc3QgY2FudmFzUmlnaHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FubnktcmlnaHQnKTtcbiAgY29uc3QgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAvLyBjb25zdCBjTGVmdCA9IGNhbnZhc0xlZnQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgLy8gY29uc3QgY1JpZ2h0ID0gY2FudmFzUmlnaHQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKTtcblxuXG5cbiAgZnVuY3Rpb24gZ2FtZVN0YXJ0KCl7XG5cbiAgICBnYW1lLndhdmVzID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgIGdhbWUuYWRkRmlzaCgpXG4gICAgfSwgMTAwMClcblxuICAgIGdhbWUubW9tZW50ID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgIGdhbWUubW9tZW50dW0oZ2FtZS5jYXRGaXNoKVxuICAgIH0sIDEwMDApXG5cbiAgICBhbmltYXRlKClcblxuICAgIHN0YXJ0LmNsYXNzTGlzdC5hZGQoJ2hpZGVTdGFydCcpO1xuICB9XG5cblxuXG4gIHN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnYW1lU3RhcnQpXG5cbiAgbGV0IGdhbWUgPSBuZXcgR2FtZVxuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKXtcblxuICAgIGlmIChnYW1lLmxvc3QgPT09IGZhbHNlKSB7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICBnYW1lLmRyYXdHYW1lKGMpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lLndhdmVzKVxuICAgICAgICBjbGVhckludGVydmFsKGdhbWUubW9tZW50KVxuICAgIH1cblxuICB9XG5cblxuXG5cblxuXG5cblxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBU0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./javascripts/catfish_entry.js\n");

/***/ }),

/***/ "./javascripts/game.js":
/*!*****************************!*\
  !*** ./javascripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n/* harmony import */ var _other_fish__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other_fish */ \"./javascripts/other_fish.js\");\n/* harmony import */ var _cat_fish__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cat_fish */ \"./javascripts/cat_fish.js\");\n\n\n\n\nclass Game {\n  constructor() {\n    this.lost = false;\n    this.allFish = [];\n    this.catFish = new _cat_fish__WEBPACK_IMPORTED_MODULE_2__[\"default\"](Game.CATFISH);\n    this.wow = [Game.WOW1, Game.WOW2, Game.WOW3];\n    this.meow = Game.MEOW;\n    this.purr = Game.PURR;\n    this.waves = null;\n    this.moment = null;\n\n    // CREATES FIRST BATCH OF FISH\n    for (let i = 0; i < Game.NUM_FISH; i++) {\n      this.addFish();\n    }\n\n    this.catFish.bindKeyHandlers();\n\n    // CREATE A FISH EVERYTHING SECOND\n\n\n    //constructor end\n  }\n\n  // ADDS A NEW FISH\n  addFish() {\n    let newFish = this.randomize(new _other_fish__WEBPACK_IMPORTED_MODULE_1__[\"default\"](Game.OTHERFISH));\n    this.allFish.push(newFish);\n    // console.log(\"add fish\")\n    // addFish end\n  }\n\n  // DRAWS EVERYTHING\n  drawGame(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.catFish.update(this.catFish.vel, ctx);\n\n    this.allFish.forEach((fish, idx) => {\n      if (fish.pos[0] < -fish.width || fish.pos[0] > 700) {\n        this.allFish.splice(idx, 1);\n      }\n\n      if (fish.isCollidedWith(this.catFish)) {\n        if (fish.height < this.catFish.height) {\n          // plays a random sound\n          this.wow[this.randomInt(this.wow.length)].play();\n          this.catFish.height += 2;\n          this.catFish.width += 2;\n          this.allFish.splice(idx, 1);\n        } else if (fish.height > this.catFish.height) {\n          // window.alert(\"Game over!\")\n          this.meow.play();\n          this.gameOver();\n        }\n      }\n\n      // draws each fish\n      this.allFish[idx].update(1, ctx);\n    });\n    this.allFish[this.allFish.length - 1].update(0, ctx);\n    this.wrap(this.catFish);\n    if (this.catFish.height > 400) {\n      this.catFish.height = 50;\n      this.catFish.width = 50;\n    }\n\n    // console.log(this.catFish.vel)\n    // drawGame end\n  }\n\n  // GIVES FISH A RANDOM POSITION\n  randomize(fish) {\n    let random_y = Math.random() * (Game.DIM_Y - fish.rad);\n    let num = Math.random();\n\n    // for squares\n    fish.height = this.catFish.height * 0.3 + this.catFish.height * .5 * num;\n    fish.width = this.catFish.width * 0.3 + this.catFish.width * .5 * num;\n\n    // for circles\n    fish.radius = fish.radius * 0.25 + fish.radius * 0.75 * num;\n\n    switch (Math.round(Math.random())) {\n\n      case 0:\n        //left\n        fish.pos = [0 - fish.radius, random_y];\n        fish.vel = Math.abs(fish.vel);\n        fish.fish_pic.src = \"assets/BulletCatFaceRight.png\";\n        return fish;\n\n      case 1:\n        //right\n        fish.pos = [Game.DIM_X - fish.rad, random_y];\n        fish.vel = -fish.vel;\n        return fish;\n\n      default:\n        fish.pos = [Game.DIM_X - fish.rad, random_y];\n        fish.vel = -fish.vel;\n        return fish;\n    }\n\n    // randomize end\n  }\n\n  wrap(fish) {\n    if (fish.pos[0] < -fish.width / 2) {\n      fish.pos[0] = Game.DIM_X - fish.width / 2;\n    } else if (fish.pos[0] > Game.DIM_X - fish.width / 2) {\n      fish.pos[0] = -fish.width / 2;\n    } else if (fish.pos[1] < -fish.height / 2) {\n      fish.pos[1] = Game.DIM_Y - fish.height / 2;\n    } else if (fish.pos[1] > Game.DIM_Y - fish.height / 2) {\n      fish.pos[1] = -fish.height / 2;\n    }\n  }\n\n  gameOver() {\n    this.lost = true;\n  }\n\n  randomInt(max) {\n    return Math.floor(Math.random() * Math.floor(max));\n  }\n\n  momentum(fish) {\n    if (fish.vel[0] !== 0 && fish.vel[0] > 0) {\n      fish.vel[0] -= 0.5;\n    } else if (fish.vel[0] !== 0 && fish.vel[0] < 0) {\n      fish.vel[0] += 0.5;\n    } else if (fish.vel[1] !== 0 && fish.vel[1] < 0) {\n      fish.vel[1] += 0.5;\n    } else if (fish.vel[1] !== 0 && fish.vel[1] > 0) {\n      fish.vel[1] -= 0.5;\n    } // else {\n    //   this.purr.play()\n    // }\n    // console.log(\"momentum\")\n  }\n\n  // class end\n}\n\n// CLASS CONSTANTS\nGame.DIM_X = 700;\nGame.DIM_Y = 400;\nGame.NUM_FISH = 10;\n\nGame.CATFISH = {\n  pos: [300, 150],\n  vel: 1,\n  rad: 25,\n  height: 100,\n  width: 50\n};\n\nGame.OTHERFISH = {\n  pos: [400, 400],\n  vel: 1,\n  rad: 25,\n  height: 50,\n  width: 50\n};\n\nGame.WOW1 = new Audio(\"assets/WowMeow.mov\");\nGame.WOW1.volume = 0.40;\n\nGame.WOW2 = new Audio(\"assets/WowMeow2.mov\");\nGame.WOW2.volume = 0.40;\n\nGame.WOW3 = new Audio(\"assets/WowMeow3.mov\");\nGame.WOW3.volume = 0.40;\n\nGame.MEOW = new Audio(\"assets/OneSecMeow.mov\");\nGame.MEOW.volume = 0.35;\n\nGame.PURR = new Audio(\"assets/Purr.mov\");\nGame.PURR.volume = 0.35;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL2dhbWUuanM/YzNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCc7XG5pbXBvcnQgT3RoZXJGaXNoIGZyb20gJy4vb3RoZXJfZmlzaCc7XG5pbXBvcnQgQ2F0RmlzaCBmcm9tICcuL2NhdF9maXNoJztcblxuY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5sb3N0ID0gZmFsc2VcbiAgICB0aGlzLmFsbEZpc2ggPSBbXVxuICAgIHRoaXMuY2F0RmlzaCA9IG5ldyBDYXRGaXNoKEdhbWUuQ0FURklTSClcbiAgICB0aGlzLndvdyA9IFtHYW1lLldPVzEsIEdhbWUuV09XMiwgR2FtZS5XT1czXVxuICAgIHRoaXMubWVvdyA9IEdhbWUuTUVPV1xuICAgIHRoaXMucHVyciA9IEdhbWUuUFVSUlxuICAgIHRoaXMud2F2ZXMgPSBudWxsO1xuICAgIHRoaXMubW9tZW50ID0gbnVsbDtcblxuICAgIC8vIENSRUFURVMgRklSU1QgQkFUQ0ggT0YgRklTSFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZS5OVU1fRklTSDsgaSsrKSB7XG4gICAgICB0aGlzLmFkZEZpc2goKVxuICAgIH1cblxuICAgIHRoaXMuY2F0RmlzaC5iaW5kS2V5SGFuZGxlcnMoKVxuXG4gICAgLy8gQ1JFQVRFIEEgRklTSCBFVkVSWVRISU5HIFNFQ09ORFxuXG5cblxuXG5cblxuICAgIC8vY29uc3RydWN0b3IgZW5kXG4gIH1cblxuXG4gIC8vIEFERFMgQSBORVcgRklTSFxuICBhZGRGaXNoKCl7XG4gICAgbGV0IG5ld0Zpc2ggPSB0aGlzLnJhbmRvbWl6ZShuZXcgT3RoZXJGaXNoKEdhbWUuT1RIRVJGSVNIKSlcbiAgICB0aGlzLmFsbEZpc2gucHVzaChuZXdGaXNoKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWRkIGZpc2hcIilcbiAgICAvLyBhZGRGaXNoIGVuZFxuICB9XG5cbiAgLy8gRFJBV1MgRVZFUllUSElOR1xuICBkcmF3R2FtZShjdHgpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgR2FtZS5ESU1fWCwgR2FtZS5ESU1fWSk7XG5cbiAgICB0aGlzLmNhdEZpc2gudXBkYXRlKHRoaXMuY2F0RmlzaC52ZWwsIGN0eCk7XG5cbiAgICB0aGlzLmFsbEZpc2guZm9yRWFjaCgoZmlzaCwgaWR4KSA9PntcbiAgICAgIGlmIChmaXNoLnBvc1swXSA8IC1maXNoLndpZHRoIHx8IGZpc2gucG9zWzBdID4gNzAwKSB7XG4gICAgICAgIHRoaXMuYWxsRmlzaC5zcGxpY2UoaWR4LCAxKVxuICAgICAgfVxuXG4gICAgICBpZiAoZmlzaC5pc0NvbGxpZGVkV2l0aCh0aGlzLmNhdEZpc2gpKSB7XG4gICAgICAgIGlmIChmaXNoLmhlaWdodCA8IHRoaXMuY2F0RmlzaC5oZWlnaHQpIHtcbiAgICAgICAgICAvLyBwbGF5cyBhIHJhbmRvbSBzb3VuZFxuICAgICAgICAgIHRoaXMud293W3RoaXMucmFuZG9tSW50KHRoaXMud293Lmxlbmd0aCldLnBsYXkoKVxuICAgICAgICAgIHRoaXMuY2F0RmlzaC5oZWlnaHQgKz0gMjtcbiAgICAgICAgICB0aGlzLmNhdEZpc2gud2lkdGggKz0gMjtcbiAgICAgICAgICB0aGlzLmFsbEZpc2guc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmlzaC5oZWlnaHQgPiB0aGlzLmNhdEZpc2guaGVpZ2h0KSB7XG4gICAgICAgICAgLy8gd2luZG93LmFsZXJ0KFwiR2FtZSBvdmVyIVwiKVxuICAgICAgICAgIHRoaXMubWVvdy5wbGF5KClcbiAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkcmF3cyBlYWNoIGZpc2hcbiAgICAgIHRoaXMuYWxsRmlzaFtpZHhdLnVwZGF0ZSgxLCBjdHgpXG5cblxuICAgIH0pXG4gICAgdGhpcy5hbGxGaXNoW3RoaXMuYWxsRmlzaC5sZW5ndGgtMV0udXBkYXRlKDAsIGN0eClcbiAgICB0aGlzLndyYXAodGhpcy5jYXRGaXNoKVxuICAgIGlmKHRoaXMuY2F0RmlzaC5oZWlnaHQgPiA0MDApe1xuICAgICAgdGhpcy5jYXRGaXNoLmhlaWdodCA9IDUwXG4gICAgICB0aGlzLmNhdEZpc2gud2lkdGggPSA1MFxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY2F0RmlzaC52ZWwpXG4gICAgLy8gZHJhd0dhbWUgZW5kXG4gIH1cblxuICAvLyBHSVZFUyBGSVNIIEEgUkFORE9NIFBPU0lUSU9OXG4gIHJhbmRvbWl6ZShmaXNoKXtcbiAgICBsZXQgcmFuZG9tX3kgPSBNYXRoLnJhbmRvbSgpICogKEdhbWUuRElNX1kgLSBmaXNoLnJhZCk7XG4gICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgICAvLyBmb3Igc3F1YXJlc1xuICAgIGZpc2guaGVpZ2h0ID0gdGhpcy5jYXRGaXNoLmhlaWdodCAqIDAuMyArICh0aGlzLmNhdEZpc2guaGVpZ2h0ICogLjUgKiBudW0pXG4gICAgZmlzaC53aWR0aCA9IHRoaXMuY2F0RmlzaC53aWR0aCAqIDAuMyArICh0aGlzLmNhdEZpc2gud2lkdGggKiAuNSAqIG51bSlcblxuICAgIC8vIGZvciBjaXJjbGVzXG4gICAgZmlzaC5yYWRpdXMgPSBmaXNoLnJhZGl1cyAqIDAuMjUgKyAoZmlzaC5yYWRpdXMgKiAwLjc1ICogbnVtKVxuXG4gICAgc3dpdGNoIChNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpKSB7XG5cbiAgICAgIGNhc2UgMDpcbiAgICAgIC8vbGVmdFxuICAgICAgICBmaXNoLnBvcyA9IFswIC0gZmlzaC5yYWRpdXMsIHJhbmRvbV95XTtcbiAgICAgICAgZmlzaC52ZWwgPSBNYXRoLmFicyhmaXNoLnZlbCk7XG4gICAgICAgIGZpc2guZmlzaF9waWMuc3JjID0gXCJhc3NldHMvQnVsbGV0Q2F0RmFjZVJpZ2h0LnBuZ1wiXG4gICAgICAgIHJldHVybiBmaXNoO1xuXG4gICAgICBjYXNlIDE6XG4gICAgICAvL3JpZ2h0XG4gICAgICAgIGZpc2gucG9zID0gW0dhbWUuRElNX1ggLSBmaXNoLnJhZCwgcmFuZG9tX3ldO1xuICAgICAgICBmaXNoLnZlbCA9IC1maXNoLnZlbDtcbiAgICAgICAgcmV0dXJuIGZpc2g7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGZpc2gucG9zID0gW0dhbWUuRElNX1ggLSBmaXNoLnJhZCwgcmFuZG9tX3ldO1xuICAgICAgICBmaXNoLnZlbCA9IC1maXNoLnZlbDtcbiAgICAgICAgcmV0dXJuIGZpc2g7XG4gICAgfVxuXG4gICAgLy8gcmFuZG9taXplIGVuZFxuICB9XG5cbiAgd3JhcChmaXNoKXtcbiAgICBpZiAoZmlzaC5wb3NbMF0gPCAtZmlzaC53aWR0aC8yKSB7XG4gICAgICBmaXNoLnBvc1swXSA9IEdhbWUuRElNX1ggLSBmaXNoLndpZHRoLzJcbiAgICB9IGVsc2UgaWYgKGZpc2gucG9zWzBdID4gR2FtZS5ESU1fWCAtIGZpc2gud2lkdGgvMiApe1xuICAgICAgZmlzaC5wb3NbMF0gPSAtZmlzaC53aWR0aC8yXG4gICAgfSBlbHNlIGlmIChmaXNoLnBvc1sxXSA8IC1maXNoLmhlaWdodC8yKXtcbiAgICAgIGZpc2gucG9zWzFdID0gR2FtZS5ESU1fWSAtIGZpc2guaGVpZ2h0LzJcbiAgICB9IGVsc2UgaWYgKGZpc2gucG9zWzFdID4gR2FtZS5ESU1fWSAtIGZpc2guaGVpZ2h0LzIpe1xuICAgICAgZmlzaC5wb3NbMV0gPSAtZmlzaC5oZWlnaHQvMlxuICAgIH1cbiAgfVxuXG4gIGdhbWVPdmVyKCl7XG4gICAgdGhpcy5sb3N0ID0gdHJ1ZVxuICB9XG5cbiAgcmFuZG9tSW50KG1heCl7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IobWF4KSk7XG4gIH1cblxuICBtb21lbnR1bShmaXNoKXtcbiAgICBpZiAoZmlzaC52ZWxbMF0gIT09IDAgJiYgZmlzaC52ZWxbMF0gPiAwKSB7XG4gICAgICBmaXNoLnZlbFswXSAtPSAwLjVcbiAgICB9IGVsc2UgaWYgKGZpc2gudmVsWzBdICE9PSAwICYmIGZpc2gudmVsWzBdIDwgMCkge1xuICAgICAgZmlzaC52ZWxbMF0gKz0gMC41XG4gICAgfSBlbHNlIGlmIChmaXNoLnZlbFsxXSAhPT0gMCAmJiBmaXNoLnZlbFsxXSA8IDApIHtcbiAgICAgIGZpc2gudmVsWzFdICs9IDAuNVxuICAgIH0gZWxzZSBpZiAoZmlzaC52ZWxbMV0gIT09IDAgJiYgZmlzaC52ZWxbMV0gPiAwKSB7XG4gICAgICBmaXNoLnZlbFsxXSAtPSAwLjVcbiAgICB9IC8vIGVsc2Uge1xuICAgIC8vICAgdGhpcy5wdXJyLnBsYXkoKVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIm1vbWVudHVtXCIpXG5cbiAgfVxuXG4gIC8vIGNsYXNzIGVuZFxufVxuXG4vLyBDTEFTUyBDT05TVEFOVFNcbkdhbWUuRElNX1ggPSA3MDA7XG5HYW1lLkRJTV9ZID0gNDAwO1xuR2FtZS5OVU1fRklTSCA9IDEwO1xuXG5HYW1lLkNBVEZJU0ggPSB7XG4gIHBvczogWzMwMCwgMTUwXSxcbiAgdmVsOiAxLFxuICByYWQ6IDI1LFxuICBoZWlnaHQ6IDEwMCxcbiAgd2lkdGg6IDUwXG59XG5cbkdhbWUuT1RIRVJGSVNIID0ge1xuICBwb3M6IFs0MDAsIDQwMF0sXG4gIHZlbDogMSxcbiAgcmFkOiAyNSxcbiAgaGVpZ2h0OiA1MCxcbiAgd2lkdGg6IDUwXG59XG5cbkdhbWUuV09XMSA9IG5ldyBBdWRpbyhcImFzc2V0cy9Xb3dNZW93Lm1vdlwiKTtcbkdhbWUuV09XMS52b2x1bWUgPSAwLjQwO1xuXG5HYW1lLldPVzIgPSBuZXcgQXVkaW8oXCJhc3NldHMvV293TWVvdzIubW92XCIpO1xuR2FtZS5XT1cyLnZvbHVtZSA9IDAuNDA7XG5cbkdhbWUuV09XMyA9IG5ldyBBdWRpbyhcImFzc2V0cy9Xb3dNZW93My5tb3ZcIik7XG5HYW1lLldPVzMudm9sdW1lID0gMC40MDtcblxuR2FtZS5NRU9XID0gbmV3IEF1ZGlvKFwiYXNzZXRzL09uZVNlY01lb3cubW92XCIpO1xuR2FtZS5NRU9XLnZvbHVtZSA9IDAuMzU7XG5cbkdhbWUuUFVSUiA9IG5ldyBBdWRpbyhcImFzc2V0cy9QdXJyLm1vdlwiKTtcbkdhbWUuUFVSUi52b2x1bWUgPSAwLjM1O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBb0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXZKQTtBQUNBO0FBeUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./javascripts/game.js\n");

/***/ }),

/***/ "./javascripts/moving_object.js":
/*!**************************************!*\
  !*** ./javascripts/moving_object.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass MovingObject {\n  constructor(props) {\n    this.pos = props.pos;\n    this.vel = props.vel;\n    this.rad = props.rad;\n    this.height = props.height;\n    this.width = props.width;\n    this.color = \"rgb(122, 71, 180)\";\n\n    // fish_pic.addEventListener(\"load\",\n    //   ()=>c.drawImage(fish_pic, 0 ,0),\n    //   false);\n  }\n\n  draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);\n    // ctx.beginPath();\n    // ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, false)\n    // // ctx.stroke();\n    // ctx.fill();\n\n    // ctx.drawImage(this.fish_pic, 0, 0)\n  }\n\n  move() {\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n  }\n\n  isCollidedWith(otherFish) {\n    // square collision\n    if (this.pos[0] < otherFish.pos[0] + otherFish.width && this.pos[0] + this.width > otherFish.pos[0] && this.pos[1] < otherFish.pos[1] + otherFish.height && this.height + this.pos[1] > otherFish.pos[1]) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  // bindKeyHandlers(){\n  //   const fish = this;\n  //\n  // }\n\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9tb3Zpbmdfb2JqZWN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL21vdmluZ19vYmplY3QuanM/MWRlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIE1vdmluZ09iamVjdCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICB0aGlzLnBvcyA9IHByb3BzLnBvcztcbiAgICB0aGlzLnZlbCA9IHByb3BzLnZlbDtcbiAgICB0aGlzLnJhZCA9IHByb3BzLnJhZDtcbiAgICB0aGlzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gcHJvcHMud2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IFwicmdiKDEyMiwgNzEsIDE4MClcIlxuXG5cblxuICAgIC8vIGZpc2hfcGljLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsXG4gICAgLy8gICAoKT0+Yy5kcmF3SW1hZ2UoZmlzaF9waWMsIDAgLDApLFxuICAgIC8vICAgZmFsc2UpO1xuICB9XG5cbiAgZHJhdyhjdHgpe1xuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgIGN0eC5maWxsUmVjdChcbiAgICAgIHRoaXMucG9zWzBdLFxuICAgICAgdGhpcy5wb3NbMV0sXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHRcbiAgICApXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xuICAgIC8vIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKVxuICAgIC8vIC8vIGN0eC5zdHJva2UoKTtcbiAgICAvLyBjdHguZmlsbCgpO1xuXG4gICAgLy8gY3R4LmRyYXdJbWFnZSh0aGlzLmZpc2hfcGljLCAwLCAwKVxuICB9XG5cbiAgbW92ZSgpe1xuICAgIHRoaXMucG9zID0gWyh0aGlzLnBvc1swXSArIHRoaXMudmVsWzBdKSwgKHRoaXMucG9zWzFdICsgdGhpcy52ZWxbMV0pXVxuICB9XG5cbiAgaXNDb2xsaWRlZFdpdGgob3RoZXJGaXNoKXtcbiAgICAvLyBzcXVhcmUgY29sbGlzaW9uXG4gICAgaWYodGhpcy5wb3NbMF0gPCBvdGhlckZpc2gucG9zWzBdICsgb3RoZXJGaXNoLndpZHRoICYmXG4gICAgdGhpcy5wb3NbMF0gKyB0aGlzLndpZHRoID4gb3RoZXJGaXNoLnBvc1swXSAmJlxuICAgIHRoaXMucG9zWzFdIDwgb3RoZXJGaXNoLnBvc1sxXSArIG90aGVyRmlzaC5oZWlnaHQgJiZcbiAgICB0aGlzLmhlaWdodCArIHRoaXMucG9zWzFdID4gb3RoZXJGaXNoLnBvc1sxXSl7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICAvLyBiaW5kS2V5SGFuZGxlcnMoKXtcbiAgLy8gICBjb25zdCBmaXNoID0gdGhpcztcbiAgLy9cbiAgLy8gfVxuXG5cblxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0O1xuIl0sIm1hcHBpbmdzIjoiOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUFDQTtBQTBEQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascripts/moving_object.js\n");

/***/ }),

/***/ "./javascripts/other_fish.js":
/*!***********************************!*\
  !*** ./javascripts/other_fish.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./javascripts/moving_object.js\");\n\n\nclass OtherFish extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(props) {\n    super(props);\n    let num = Math.random();\n    this.color = \"rgba(198, 85, 60, 0)\";\n    this.radius = 65 / 2;\n    this.height = 65;\n    this.width = 65;\n    this.vel = 1;\n    this.direction = 'fromRight';\n    this.rotated = false;\n\n    let fish_pic = new Image();\n    fish_pic.src = \"assets/BulletCat.png\";\n    this.fish_pic = fish_pic;\n  }\n\n  update(vel, ctx) {\n    if (this.vel < 0) {\n      vel = -vel;\n    }\n    this.pos[0] += vel;\n    this.draw(ctx);\n    ctx.drawImage(this.fish_pic, this.pos[0] - 4, this.pos[1] - 5, this.width + 10, this.height + 10);\n  }\n}\n\nOtherFish.RND_DM = Math.random();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (OtherFish);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0cy9vdGhlcl9maXNoLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2phdmFzY3JpcHRzL290aGVyX2Zpc2guanM/M2JlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gJy4vbW92aW5nX29iamVjdCdcblxuY2xhc3MgT3RoZXJGaXNoIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpO1xuICAgIHRoaXMuY29sb3IgPSBcInJnYmEoMTk4LCA4NSwgNjAsIDApXCI7XG4gICAgdGhpcy5yYWRpdXMgPSA2NS8yO1xuICAgIHRoaXMuaGVpZ2h0ID0gNjU7XG4gICAgdGhpcy53aWR0aCA9IDY1O1xuICAgIHRoaXMudmVsID0gMTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9ICdmcm9tUmlnaHQnO1xuICAgIHRoaXMucm90YXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IGZpc2hfcGljID0gbmV3IEltYWdlKCk7XG4gICAgZmlzaF9waWMuc3JjPVwiYXNzZXRzL0J1bGxldENhdC5wbmdcIlxuICAgIHRoaXMuZmlzaF9waWMgPSBmaXNoX3BpY1xuICB9XG5cbiAgdXBkYXRlKHZlbCwgY3R4KXtcbiAgICBpZiAodGhpcy52ZWwgPCAwKSB7XG4gICAgICB2ZWwgPSAtdmVsXG4gICAgfVxuICAgIHRoaXMucG9zWzBdICs9IHZlbFxuICAgIHRoaXMuZHJhdyhjdHgpXG4gICAgY3R4LmRyYXdJbWFnZSh0aGlzLmZpc2hfcGljLCB0aGlzLnBvc1swXS00LCB0aGlzLnBvc1sxXS01LCB0aGlzLndpZHRoKzEwLCB0aGlzLmhlaWdodCsxMClcblxuICB9XG59XG5cbk90aGVyRmlzaC5STkRfRE0gPSBNYXRoLnJhbmRvbSgpXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IE90aGVyRmlzaDtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXpCQTtBQUNBO0FBMkJBO0FBQ0E7QUFJQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./javascripts/other_fish.js\n");

/***/ })

/******/ });