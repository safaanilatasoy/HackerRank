"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
var Polygon =
/*#__PURE__*/
function () {
  function Polygon(sides) {
    _classCallCheck(this, Polygon);

    this.sides = sides;
  }

  _createClass(Polygon, [{
    key: "perimeter",
    value: function perimeter() {
      return this.sides.reduce(function (sum, side) {
        return sum + side;
      }, 0);
    }
  }, {
    key: "area",
    value: function area() {
      // Assuming the polygon is regular (all sides are equal length)
      var sideLength = this.sides[0];
      var numSides = this.sides.length;
      var apothem = sideLength / (2 * Math.tan(Math.PI / numSides));
      var perimeter = this.perimeter();
      return perimeter * apothem / 2;
    }
  }]);

  return Polygon;
}();

var rectangle = new Polygon([10, 20, 10, 20]);
var square = new Polygon([10, 10, 10, 10]);
var pentagon = new Polygon([10, 20, 30, 40, 43]);
console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());