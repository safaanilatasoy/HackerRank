"use strict";

var res = document.getElementById("res");

var reset = function reset() {
  return res.innerHTML = "";
};

var input = function input(a) {
  return res.innerHTML += a;
};

function render() {
  var code = res.innerHTML;
  if (!code) return;
  var matches = code.match(/[0-1]+/g);

  if (matches) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = matches[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var match = _step.value;
        code = code.replace(match, parseInt(Number(match), 2));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  try {
    eval("code=(".concat(code, ")"));
  } catch (e) {
    console.error(e);
  }

  res.innerHTML = Math.round(code).toString(2);
}