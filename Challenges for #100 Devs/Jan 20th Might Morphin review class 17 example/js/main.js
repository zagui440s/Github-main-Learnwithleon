// // *Variables*
// // Declare a variable, reassign it to your fav holiday, make sure it is in
// all caps, and print the value to the console
let favHoliday = 'Halloween'
favHoliday = favHoliday.toUpperCase()
console.log(favHoliday);
// //Declare a variable, assign it a string, alert the last three characters in
// the string (Use your google-fu and the MDN)
let bestPizza = 'dominos'
alert(bestPizza.slice(-3))
// // *Functions*
// // Create a function that takes in 5 numbers. Subtract all five from 100.
// Alert the absolute value of the difference. Call the function.
function takeFirstFive(n1,n2,n3,n4,n5){
  let difference = (100-n1-n2-n3-n4-n5)
  alert(Math.abs(difference))
}
takeFirstFive(103,3,5,6,12)
// // Create a function that takes in 3 numbers. Console log lowest and highest
// values. Call the function.
function lowestAndHighestNum(num1,num2,num3){
  console.log(`The lowest is ${Math.min(num1,num2,num3)} and the highest is ${Math.max(num1,num2,num3)}`);
}
lowestAndHighestNum(84,12,309)
// // *Conditionals*
// //Create a function that returns heads or tails randomly and as fairly as
// possible. Call the function.
function headsOrTails(){
  let random = Math.random()
    if (random < .5) {
      return "heads"
    }else{
      return "tails"
    }
}
console.log(headsOrTails())

// ternary example of function above
return Math.random() < .5 ? 'heads' : 'tails'
console.log(headsOrTails());
// *Loops*
// Create a function that takes in a number. Console log the result of heads or
// tails using the previous function x times where x is the number passed into
// the function. Call the function.
function flipOfTheFunctions (num){
  for (let i = 1; i <= num; i++) {
    let result = headsOrTails()
    console.log(result)
  }
}
flipOfTheFunctions(5)
