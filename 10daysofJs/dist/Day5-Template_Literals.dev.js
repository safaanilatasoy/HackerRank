"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["The area is: ", ".\nThe perimeter is: ", "."], ["The area is: ", ".\\nThe perimeter is: ", "."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var inputString = "";
var currentLine = 0;
process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});
process.stdin.on("end", function (_) {
  inputString = inputString.trim().split("\n").map(function (string) {
    return string.trim();
  });
  main();
});

function readLine() {
  return inputString[currentLine++];
}
/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */


function sides(literals) {
  for (var _len = arguments.length, expressions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    expressions[_key - 1] = arguments[_key];
  }

  var area = expressions[0],
      perimeter = expressions[1]; // Destructure the expression values

  var s1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  var s2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4; // Return an array of the calculated values

  return [s1, s2].sort(function (a, b) {
    return a - b;
  });
}

function main() {
  var s1 = +readLine();
  var s2 = +readLine();

  var _sort = [s1, s2].sort();

  var _sort2 = _slicedToArray(_sort, 2);

  s1 = _sort2[0];
  s2 = _sort2[1];

  var _ref = sides(_templateObject(), s1 * s2, 2 * (s1 + s2)),
      _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      y = _ref2[1];

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}