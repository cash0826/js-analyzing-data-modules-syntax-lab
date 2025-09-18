require('datejs');

//Create a function that merges all usernames into one.

const usernames1 = ["melang", "calderow", "dzumbado"]
const usernames2 = ["merodriguez", "wisoto", "dischultz"]

function combineUsers (...args) {
  let combineObject = {
    users: [],
  };
  //Loop through args ??
  combineObject.users = [].concat(...args)
  combineObject.merge_date = new Date().toString("M/d/yyyy");
  return combineObject
};

console.log(combineUsers(usernames1, usernames2));

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};