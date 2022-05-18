// TODO: Implement the functions below to make the tests pass

// This function should return true if there are no elements in the array, false otherwise
function isArrayEmpty (array) {

  // TODO: write code in this function body to pass the tests
  let trueArray = false
  if (array.length === 0) {trueArray = true}

  return trueArray
}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {

  // TODO: write code in this function body to pass the tests
  let greaterThan = false
  if (num1 > num2) {greaterThan = true}

  return greaterThan
}

// This function should return the lowest number in the passed array
function findLowest (nums) {

  // TODO: write code in this function body to pass the tests
  nums.sort(function(a, b){return a-b});
  let  lowestNums = nums[0]

  return lowestNums
}


module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
