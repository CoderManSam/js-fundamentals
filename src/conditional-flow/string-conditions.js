// This function should return true if the passed string is equal to "Hello"
function isHello (val1) {

  // TODO: write code in this function body to pass the tests
  let yesHello =''
  if (val1 === "Hello") {yesHello = true}
  else [yesHello = false]

  return yesHello
}


// This function should return true if the passed string is not equal to "Hello"
function isNotHello (val1) {

  // TODO: write code in this function body to pass the tests
  let noHello =''
  if (val1 === "Hello") {noHello = false}
  else [noHello = true]

  return noHello
}


// This function should return true if the string val1 is is longer
// than string val2
function isLongerThan (val1, val2) {

  // TODO: write code in this function body to pass the tests
  let isLonger = ""
  if (val1.length > val2.length) {isLonger = true}
  else {isLonger = false}

  return isLonger
}


// This function should return true if the string passed in the function's first
// argument has an odd number of vowels

function hasOddNumberVowels (val1) {

  // TODO: write code in this function body to pass the tests

  // for charat index 0 if aeiou +1 to var and +1 to index

  let vowelCount = ""

  for (let i = 0; i < val1.length; i++){
      if (val1.charAt(i) === "a" || "e" || "i"|| "o" || "u") {vowelCount += 1}
  }

  let vowelOdd = ""
  vowelOdd = vowelCount % 2

  let yesOdd = ""

  if (vowelOdd === 0) {yesOdd = false}
  else {yesOdd = true}

  return yesOdd
}

console.log(hasOddNumberVowels("hello"))
console.log(val1.length);
console.log("vowelCount is", vowelCount);


// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
  // val1.length /2 if odd  return charat val1.length/2 +0.5
  // val1.length /2 if even  return charat val1.length/2 as well as charat val1.length/2 +1

  let test = ""
  test = val1.length/2

  let test2 = ""
  test2 = test % 1

  let oddTest = ""

  if (test2 === 0.5) {oddTest = val1.charAt((val1.length/2)+0.5)}
  else {oddTest = val1.charAt(val1.length/2), val1.charAt((val1.length/2)+1)}

  return oddTest
}

// This function should return the name of the season for the provided
// month name. For example, "January" should return "Winter". If the provided
// value is not a valid month, an empty string ("") should be returned. Use
// the below ranges for each season:
//
// Spring - March to May
// Summer - June to August
// Autumn - September to November
// Winter - December to February
function seasonForMonth (monthName) {

  // TODO: write code in this function body to pass the tests
}

module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
