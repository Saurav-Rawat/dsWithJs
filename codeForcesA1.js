testArray = [2];

/**
 * returns yes if sum is odd else no
 * @param array containing positive integers
 */
function checkOddSum(array) {
  if (!array.length) return "no";
  let obj = {};
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      obj["even"] ? obj["even"]++ : (obj["even"] = 1);
    } else {
      obj["odd"] ? obj["odd"]++ : (obj["odd"] = 1);
    }
  }

  if (!obj["even"] && obj["odd"] % 2 !== 0) return "yes";
  else if (!obj["even"] && obj["odd"] % 2 === 0) return "no";
  else if (!obj["odd"]) return "no";
  else if (obj["even"] && obj["odd"] % 2 === 0) return "no";
  else if (obj["even"] && obj["odd"] % 2 !== 0) return "yes";

  return (obj["even"] + obj["odd"]) % 2 === 0 ? "yes" : "no";
}

console.log(checkOddSum(testArray));
