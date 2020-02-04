/**
 * write a function which returns true if the given two inputs are annagrams else false
 */

//time complexity O(n)
function checkAnnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  obj1 = {};
  obj2 = {};
  keys = [];
  for (var i = 0; i < str1.length; i++) {
    obj1[str1[i]] ? obj1[str1[i]]++ : (obj1[str1[i]] = 1);
  }
  for (var i = 0; i < str2.length; i++) {
    obj2[str2[i]] ? obj2[str2[i]]++ : (obj2[str2[i]] = 1);
  }
  keys = Object.keys(obj1);
  for (var i = 0; i < keys.length; i++) {
    if (obj1[keys[i]] !== obj2[keys[i]]) {
      return false;
    }
  }
  return true;
}

console.log(checkAnnagram("saurav", "vauras"));
