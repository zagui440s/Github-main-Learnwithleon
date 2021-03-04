// Please create a function that takes in an array of numbers and returns a new
// array that only contains odd numbers.
// Review our last practice problem from last class if you need some ideas.
function newArrOdd(arr){
  let newArr = []
  arr.forEach((item, i) => {
    if (item % 2 === 1) {
      newArr.push(item)
    }
  });
return newArr
}
console.log(newArrOdd([1,2,3,4,5,6,7,8,9,10,11]))
