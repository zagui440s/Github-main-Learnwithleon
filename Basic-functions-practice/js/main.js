// Please create a function that takes in a number.
// Print all the numbers from 1 to that number in the console,
// but skip any number that when multiplied by three is divisible by 2.

function printAllNumbers(nums){
  for (let i = 0; i <= nums; i++) {
    (i * 3) % 2 === 0 ? ("") : console.log(i)
  }
}
printAllNumbers(100)


// let text = '';
//
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   text = text + i;
// }
//
// console.log(text);
// // expected output: "012456789"
