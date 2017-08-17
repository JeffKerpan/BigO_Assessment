// PART TWO: In a new file, write examples of algorithms/functions for each of
// the Big O complexities below.
//   Upload your file to your repository when complete and submit in Learn --> Exercises.
//

//   1. O(1)
function iGot99Problems() {
  for (let i=0; i<99; i++) {
    console.log(i);
  }
}


//   2. O(n)

function timesTwo(array) {
  const newArray = new Array(array.length);
  for (let i=0; i<array.length; i++) {
    newArray[i] = array[i] * 2;
  }
  return newArray;
}


//   3. O(n^2)

function sumArrayNums(array) {
  let num = 0;
  let newArray = new Array(array.length);

  while(num < array.length) {
    let total = 0;
    let x = num;

    while(x < array.length) {
      total += array[x];
      x += 1;
    }
    newArray[num] = total;
    num +=1;
  }
  return newArray;
}
