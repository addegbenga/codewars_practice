//problem
// #Find the missing letter

// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
function findMissingLetter(array) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const indArr = alphabet.findIndex(
    (item, ind) => array[0].toLowerCase() === item
  );
  const newArr = alphabet.slice(indArr, array.length + indArr);
  let result = [];
  const chk = newArr.findIndex((item, ind) =>
    item.localeCompare(array[0], "en")
  );
  if (chk === 1) {
    newArr.find((item, ind) => {
      !array.includes(item) ? (result += item.toLowerCase()) : "";
    });
  } else {
    newArr.find((item, ind) => {
      !array.includes(item.toUpperCase()) ? (result += item.toUpperCase()) : "";
    });
  }
  return result;
}

findMissingLetter(["c", "d", "e", "f", "h", "i"]);
