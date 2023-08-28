"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function processData(input) {
  //Enter your code here
  var lines = input.split('\n');
  var n = parseInt(lines[0], 10);
  var phoneBook = {};

  for (var i = 1; i <= n; i++) {
    var _lines$i$split = lines[i].split(' '),
        _lines$i$split2 = _slicedToArray(_lines$i$split, 2),
        name = _lines$i$split2[0],
        phoneNumber = _lines$i$split2[1];

    phoneBook[name] = phoneNumber;
  }

  for (var _i2 = n + 1; _i2 < lines.length; _i2++) {
    var nameToQuery = lines[_i2].trim();

    if (phoneBook.hasOwnProperty(nameToQuery)) {
      console.log("".concat(nameToQuery, "=").concat(phoneBook[nameToQuery]));
    } else {
      console.log("Not found");
    }
  }
}