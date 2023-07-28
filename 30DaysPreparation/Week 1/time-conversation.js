function timeConversion(s) {
  // Write your code here
  const timeArr = s.split(":");
  const hour = parseInt(timeArr[0]);
  const minute = timeArr[1];
  const second = timeArr[2].substring(0, 2);

  if (s.includes("PM") && hour !== 12) {
    return `${hour + 12}:${minute}:${second}`;
  } else if (s.includes("AM") && hour === 12) {
    return `00:${minute}:${second}`;
  } else {
    return `${timeArr[0].padStart(2, "0")}:${minute}:${second}`;
  }
}
