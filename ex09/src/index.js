function myFunction(myObj, checkProp) {
  // Only change code below this line
  var myObj = {
    title: "Titanic",
    song: "My Heart Will Go On",
    genre: "drama",
  };
  var answer = "Not Found";
  if (myObj.hasOwnProperty(checkProp)) {
    answer = myObj[checkProp];
  }
  return answer;
  // Only change code above this line
}
console.log(
  myFunction(
    { title: "Titanic", song: "My Heart Will Go On", drama: "drama" },
    "actor"
  )
);
module.exports = myFunction;
