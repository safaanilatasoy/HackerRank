"use strict";

function timeConversion(s) {
  // Write your code here
  var timeArr = s.split(":");
  var hour = parseInt(timeArr[0]);
  var minute = timeArr[1];
  var second = timeArr[2].substring(0, 2);

  if (s.includes("PM") && hour !== 12) {
    return "".concat(hour + 12, ":").concat(minute, ":").concat(second);
  } else if (s.includes("AM") && hour === 12) {
    return "00:".concat(minute, ":").concat(second);
  } else {
    return "".concat(timeArr[0].padStart(2, "0"), ":").concat(minute, ":").concat(second);
  }
}