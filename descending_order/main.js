//Your task is to make a function that can take any non-negative integer as an
//argument and return it with its digits in descending order. Essentially,
//rearrange the digits to create the highest possible number.
//In this challenge i used sort for sorting the numbers

//my solution
function descendingOrder(n) {
  const numToArr = n.toString().split("");
  let desc = numToArr.sort((a, b) => b - a).join("");
  return console.log(Number(desc));
}

descendingOrder(5245);

//clever solution from some guru
function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

// for this challenge i learnt how sort work and also how to split a string to an array
// learnt how to use joins to separate strings of values
//learnt how to convert a string to a number;

//i was a bit clever here too. lol
