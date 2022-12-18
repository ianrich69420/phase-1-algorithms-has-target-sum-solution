function hasTargetSum(array, target) {
  // Write your algorithm here
  let itHasTargetSum = false
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        itHasTargetSum = true
      }
    }
  }
  return itHasTargetSum
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  loop through array
  adds the nums in the array with each other
    if added sum equals target sum
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
  loops through each num in the array
  adds each num in the array with each other by looping through the array again and checking if the added sum is equal to the target sum
  the function returns true an added sum is equal to the target sum and false otherwise

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
function hasTargetSum(array, target) {
  // Write your algorithm here
  let itHasTargetSum = false
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        itHasTargetSum = true
      }
    }
  }
  return itHasTargetSum
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  loop through array
  adds the nums in the array with each other
    if added sum equals target sum
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
  loops through each num in the array
  adds each num in the array with each other by looping through the array again and checking if the added sum is equal to the target sum
  the function returns true an added sum is equal to the target sum and false otherwise

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
