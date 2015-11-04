// closures
// function scope
// iterating methods on arrays
// css
// DOM

var jackInTheBox = function(){
  return 'boing!';
}

jackInTheBox; // this is a reference to the function

jackInTheBox(); // this invokes or calls the function

var jackInTheBox = function(){
  var littleJay = function(){
    return 'booooooo';
  }
  return littleJay;
}

jackInTheBox(); // returns a reference to littleJay

var box = jackInTheBox(); // returns a reference to littleJay

box() // this returns 'boo'
//  var box = function(){
//   return 'booooooo';
// }
jackInTheBox()() // this returns boo because we're invoking the return function

var tick = function(){
  var counter = 0;

  var updateCounter = function(){
    return counter++;
  }
  return updateCounter;
}

tick() // this spits out a function
 
var tock = tick();

tock(); // 0
tock(); // 1
tock();/// 2




var add = function(x) {
  return function(y) {
    return x + y;
  };
};

var sum = add(5);

sum(7) //returns 12

var add2 = function(x) {
  return function(y, z) {
    if (z) {
      return x + y + z;
    } else {
      return x +y;
    };
  };
};

var sum2 = add2(5);

sum(7) //returns 12












