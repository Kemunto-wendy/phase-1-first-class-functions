//My code
const chai = "chai"
const spies = "chai-spies"
function receivesAFunction(callback) {
    callback()
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
      console.log("The listed is a named function")
    }
  }
  
  function returnsAnAnonymousFunction() {
    return function(){
    console.log("The following is an anonymous function");
    }
  }