/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  perimeter() {
    return this.sides.reduce((sum, side) => sum + side, 0);
  }

  area() {
    // Assuming the polygon is regular (all sides are equal length)
    const sideLength = this.sides[0];
    const numSides = this.sides.length;
    const apothem = sideLength / (2 * Math.tan(Math.PI / numSides));
    const perimeter = this.perimeter();

    return (perimeter * apothem) / 2;
  }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
