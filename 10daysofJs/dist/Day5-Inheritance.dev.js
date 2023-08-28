"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rectangle = function Rectangle(w, h) {
  _classCallCheck(this, Rectangle);

  this.w = w;
  this.h = h;
};
/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */


Rectangle.prototype.area = function () {
  return this.w * this.h;
};
/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */


var Square =
/*#__PURE__*/
function (_Rectangle) {
  _inherits(Square, _Rectangle);

  function Square(side) {
    _classCallCheck(this, Square);

    return _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, side, side));
  }

  return Square;
}(Rectangle);

if (JSON.stringify(Object.getOwnPropertyNames(Square.prototype)) === JSON.stringify(['constructor'])) {
  var rec = new Rectangle(3, 4);
  var sqr = new Square(3);
  console.log(rec.area());
  console.log(sqr.area());
} else {
  console.log(-1);
  console.log(-1);
}