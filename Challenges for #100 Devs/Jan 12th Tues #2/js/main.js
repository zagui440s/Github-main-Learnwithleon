// Please create a function that takes in a number and a word. If the
// length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!

// let s = "Bird"
// function repeatStr(n, s){
//   return n * s
// }
// console.log(34, "Bird"(str.length));

function wordMultStr(num, str){
  let num1 = Number(num)
  let str1 = Number(str.length)
  if (num1 * str1 > 100){
    alert('WINNER')
  }else{
      alert('Chump Status')
    }
  }

wordMultStr(2, 'How many characters Am I you Donk?');

// const str = 'How many characters Am I you Donk?';{
// console.log(`${str.length}`);
// // expected output: 34 characters"
// }
// const num1 = 3
// function wordMultStr(){
//   if ((str.length * num1) > 100) {
// alert("WINNER")
// }else {
//   alert("Chump status")
//   }
// }
// wordMultStr(str, num1);
