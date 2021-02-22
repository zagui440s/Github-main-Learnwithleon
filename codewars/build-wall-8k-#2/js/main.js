
function whoIsPaying(name){
  const shortName = [];
  if(name.length <= 2){
    shortName.push(name)
    return shortName;
  }else{
    shortName.push(name);
    shortName.push(name.slice(0,2));
  }
  return shortName;
}  
