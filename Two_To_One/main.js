//problem
//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string,
//the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//exp:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const firstString = s1.toString().split("");
  const secondString = s2.toString().split("");
  const joinedArr = firstString.concat(secondString).sort();
  const sortedString = [...new Set(joinedArr)];
  return sortedString.join("");
}
a = "zxyaabbbccccdefww";
b = "zxyavvvvaaaaabbbccccdefww";
longest(a, b);


//Lesson:
//1. Learnt how to use set operator to make an array unique
//2. Learnt how to use set operator to turn a string to an array


//clever solution from someone else
const longests = (s1, s2) => [...new Set(s1+s2)].sort().join('')