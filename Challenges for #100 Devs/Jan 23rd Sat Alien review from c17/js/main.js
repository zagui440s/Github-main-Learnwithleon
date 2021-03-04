//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["pokemon", "simpsons", "seinfeld"]
tvShows.forEach(show => console.log(show))

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let nums = [2,7,118,18,9]
function onlyEvens(arr){
  return arr.filter(digit => digit % 2 ===0)
}
console.log(onlyEvens(nums));
//Create a function that takes in an array of numbers


//Alert the sum of the second lowest and the second highest number
function secondLowAndHigh(arr){
  let sorted = arr.sort((a,b) =>a-b)
  alert(sorted[1] + sorted[sorted.length - 2])
}
secondLowAndHigh([2,3,4,5,1]);
