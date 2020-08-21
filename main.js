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
    } else {
      return x;
    }
  };
  return callback(a, b, pow(a, b));
}

function myPrint(a, b, res) {
  return `${a} ^ ${b} = ${res}`;
}

console.log(myPow(3, 4, myPrint));

//task 4
function info() {
  return `${this.model} ${this.name}, ${this.year}cc, year ${this.year}, ${this.used}`;
}
let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: 'Chevrolet',
  name: 'Lacetti',
  year: 2010,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) {
      this.year = yearNow;
    }
  },
  info: info
};

let car1 = {
  engine: 5000,
  model: 'infinity',
  name: 'FX50 AWD',
  year: 2020,
  get used() {
    return this.year !== yearNow ? 'used' : 'new';
  },
  set used(value) {
    if (value === 'new' && this.year < yearNow) {
      this.year = yearNow;
    }
  },
  info: info
};

console.log(car.info());
car.used = 'new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car1.info());
car.used = 'used';
console.log(car1.info());
