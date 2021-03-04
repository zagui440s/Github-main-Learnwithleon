
// Please create a function that takes in two numbers.
// Print to the console the division of the these two numbers rounded down.
function takeTwoNums(num1,num2){
  console.log(Math.floor(num1/num2))
}

// Please create a function that takes in a number and a word. If the length of
// the word multiplied by the number passed into the function is greater than
// 100, alert "WINNER"!
function takesNumAndWord(number, word){
  if (word.length * number > 100) {
    alert("Winner!")
  }else {
    alert("Not enough")
  }
}

takesNumAndWord(20,'batman')
// Please create a function that takes in an array. The function should
// console.log() the sum of the first value in the array and the last value
// in the array
function takesInArray(arr){
  console.log(arr[0] + arr[arr.length-1])
}
takesInArray([1,2,3,4,5,])

// ORRRRRRRRRR
function takesInArray(arr){
  console.log(arr[0] + arr.pop())
}
takesInArray([1,2,3,4,5,])

// Please create a function that takes in the name of a person.
// This function should add this person to a names list and let them know
// their position on the list. The names list should be created outside of the function.
let namesListArray = ["James", "Gmo", "Keivn", "Ike"]

function takesNameAddsPos(nameForList){
  namesListArray.push(nameForList)
  console.log(`You are ${namesListArray.length} on the list!`);
}
takesNameAddsPos("zeus")

// Please create a function that takes in an array of numbers and returns a
// new array that only contains odd numbers.
function newArrayOdd(){
  let newArr = []
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    newArr.push(arr[i])
    }
  }
  return newArr
}
newArrayOdd([1,2,3,4,5])

// Please create a function that takes in a number. Print all the numbers
// from 1 to that number in the console, but skip any number that when
// multiplied by three is divisible by 2 evenly.
function takesNumberDivByThree(nums){
  for (let i = 1; i <= nums; i++) {
    if ((i * 3) % 2 !== 0) {
      console.log(i)
    }
  }
}
takesNumberDivByThree(100)
