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

  let vowelCount = 0

  for (let i = 0; i < val1.length; i++) 

      {
        if (val1.charAt(i) === "a" || 
            val1.charAt(i) === "e" ||  
            val1.charAt(i) === "i" || 
            val1.charAt(i) === "o" || 
            val1.charAt(i) === "u" ||
            val1.charAt(i) === "A" || 
            val1.charAt(i) === "E" ||  
            val1.charAt(i) === "I" || 
            val1.charAt(i) === "O" || 
            val1.charAt(i) === "U") 

          {vowelCount += 1}
      }

  let vowelCountModulusOneIfOdd = vowelCount % 2

  let yesOdd = false

  if (vowelCountModulusOneIfOdd === 1) {yesOdd = true}

  return yesOdd
}


// this function should return the middle character of a string if it has an odd number
// of characters. If there are an even number of characters the function should return
// the middle two letters

function getMiddleLetter (val1) {
  // TODO: write code in this function body to pass the tests
  // val1.length /2 if odd  return charat val1.length/2 +0.5
  // val1.length /2 if even  return charat val1.length/2 as well as charat val1.length/2 +1

  let halfVal1LengthModulus1 = 0
  halfVal1LengthModulus1 = (val1.length/2) % 1

  let middleLetter = ""

  let middleLetterIfEvenLetters = val1.charAt((val1.length/2)-1) + val1.charAt((val1.length/2))

  let middleLetterIfOddLetters = val1.charAt((val1.length/2)-0.5)

  if (halfVal1LengthModulus1 === 0.5) {middleLetter = middleLetterIfOddLetters}
  else {middleLetter = middleLetterIfEvenLetters}

  return middleLetter
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

  let season = ""

  if (monthName === "March" || monthName === "April" || monthName === "May") 
      {season = "Spring"}
  else if (monthName === "June" || monthName === "July" || monthName === "August") 
      {season = "Summer"}
  else if (monthName === "September" || monthName === "October" || monthName === "November") 
      {season = "Autumn"}
  else if (monthName === "December" || monthName === "January" || monthName === "February") 
      {season = "Winter"}
  else 
      {season = ""}


  return season
}


module.exports = {
  a: isHello,
  b: isNotHello,
  c: isLongerThan,
  d: hasOddNumberVowels,
  e: getMiddleLetter,
  f: seasonForMonth
}
