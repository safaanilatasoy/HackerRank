"use strict";

function getMaxLessThanK(n, k) {
  var max = 0;
  var current = -1;

  for (var i = 1; i < k; i++) {
    for (var j = i + 1; j <= n; j++) {
      current = i & j;

      if (current < k && current > max) {
        max = current;
      }
    }
  }

  return max;
}