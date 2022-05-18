// This function should accept a boolean value and return the string
// "Well done, you passed!" if the value is true, or "Sorry, try again"
// if the value is false.
function getResult (didPass) {

  // TODO: write code in this function body to pass the tests
  let string = ""
  if (didPass === true) {string = "Well done, you passed!"}

  else {string = "Sorry, try again"}

  return string
}

module.exports = {
  a: getResult
}
