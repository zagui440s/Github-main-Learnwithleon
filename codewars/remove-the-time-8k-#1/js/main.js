// You're re-designing a blog and the blog's posts have the following format for
// showing the date and time a post was made:
// Weekday Month Day, time e.g., Friday May 2, 7pm
// You're running out of screen real estate, and on some pages you want to
// display a shorter format, Weekday Month Day that omits the time.
// Write a function, shortenToDate, that takes the Website date/time in its
// original string format, and returns the shortened format.
// Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm".
// Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".

function shortenToDate(longDate){
return longDate.substring(0, longDate.indexOf(','));
}

//below solution alaso works
function shortenToDate(longDate) {
  return longDate.split(",")[0];
}

// function yourFutureCareer(){
//    let career = Math.random();
// 		if (career <= 0.32){
// 			return 'FrontEnd Developer'
//     }else if (career <= 0.65){
// 			return 'BackEnd Developer'
// 		}else {
//       return 'Full-Stack Developer'
//     }
//   }
// console.log(yourFutureCareer())
