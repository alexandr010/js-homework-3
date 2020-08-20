// task 1
var counter = (function () {
  var count = 0;
  return function (n) {
    count = n !== undefined ? n : count;
    return count++;
  };
}());

console.log(counter());
console.log(counter());
console.log(counter(10));

//task 2
let counting = function () {
  let num = 0;

};

//task 3
function myPow(a, b, callback) {
  let pow = (x, n) => {
    if (n !== 1) {
      return x *= pow(x, n - 1);
    }
    else {
      return x;
    }
  };
  return callback(a, b, pow(a, b));
}

function myPrint(a, b, res) {
  return `${a} ^ ${b} = ${res}`;
}

console.log(myPow(3, 4, myPrint));
