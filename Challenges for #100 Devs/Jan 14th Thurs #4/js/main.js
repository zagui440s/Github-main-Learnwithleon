// Please create a function that takes in the name of a person.
//   This function should add this person to a names list and let them know
//   their position on the list. The names list should be created outside
//   of the function.

//************ two different ways on bottom, solutions



//
// let names = ["james","guermo","ike","kevin"];
//
// function newNamesList(arr){
//
// names.push(arr)
//
// console.log(names);
//
// }
// newNamesList("zeus")
//


let names = ["james","guermo","ike","kevin"];

function newNamesList(arr){

names.push(arr)

console.log(`${arr} you are #${names.length} in the array`);

}
newNamesList("zeus")
