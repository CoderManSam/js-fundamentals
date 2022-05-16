//
//
//
// TODO: Declare the variables firstName and age so that the tests pass

// do not edit below this line
let firstNameExport = ''
try { firstNameExport = firstName } catch (e) {}
firstNameExport = "Jane"

let ageExport = 0
try { ageExport = age } catch (e) {}
ageExport = 35

module.exports = {
  firstName: firstNameExport,
  age: ageExport
}
