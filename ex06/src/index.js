// Create lion object here
var lion = {
  name: "Simba",
  legs: 4,
  tails: 1,
};
// End of lion object

function myFunction(propName, propValue) {
  // Only change code below this line
  lion[propName] = propValue;
  return lion;
  // Only change code above this line
}
console.log(myFunction("roar", "roar-roar"));
myFunction("roar", "roar-roar");
module.exports = myFunction;
