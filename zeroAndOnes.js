/**
 * Andrewid the Android is a galaxy-famous detective. In his free time he likes to think about strings
 * containing zeros and ones.Once he thought about a string of length n consisting of zeroes and ones.
 * Consider the following operation: we choose any two adjacent positions in the string, and if one them
 * contains 0, and the other contains 1, then we are allowed to remove these two digits from the string,
 * obtaining a string of length n - 2 as a result.Now Andreid thinks about what is the minimum length of
 * the string that can remain after applying the described operation several times (possibly, zero)? Help
 * him to calculate this number.
 */
let str = "01010";

//complexity O(n)
function calculateLength(string) {
  let array = [...string];
  let obj = {};
  array.forEach(element => {
    obj[element] ? obj[element]++ : (obj[element] = 1);
  });
  return Math.abs(obj["0"] - obj["1"]);
}

console.log(calculateLength(str));
