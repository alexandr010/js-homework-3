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
let counting = (function () {
  let count = 0;
  return {
    value(num) {
      if (num !== undefined) count = num;
      return count;
    },
    decrement() {
      count--;
    },
    increment() {
      count++;
    }
  };
}());

console.log(counting.value()); // 0
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value()); // 3
counting.decrement();
counting.decrement();
console.log(counting.value()); // 1
console.log(counting.value(100)); // 100
counting.decrement();
console.log(counting.value()); // 99
console.log(counting.value(200)); // 200
counting.increment();
console.log(counting.value()); // 201

//task 3
let myPow = (a, b, callback) => {
  let pow = (x, n) => {
    if (n !== 1) {return x *= pow(x, n - 1);}
      return x;
    };
  return callback(a, b, pow(a, b));
};

let myPrint = (a, b, res) => `${a} ^ ${b} = ${res}`;

console.log(myPow(3, 4, myPrint));

//task 4 - 6
function info() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}
let yearNow = new Date().getFullYear();
let car = {
  engine: 2000,
  model: 'Lacetti',
  name: 'Chevrolet',
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
  model: 'FX50 AWD',
  name: 'infinity',
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

//task 7
let list = [12, 23, 100, 34, 56, 9, 233];
let myMax = (arr) => Math.max.apply(Math, arr);


console.log(myMax(list)); // 233

//task 8

function myMul(a, b) {
  return a * b;
}
let myDouble = myMul.bind(null, 2);
let myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // = myMul(2, 3) = 6
console.log(myTriple(3)); // = myMul(3, 3) = 9


//task 9
function myUniq(arr) {
  let set = new Set(arr);
  // arr.forEach((value) => {
  //   set.add(value);
  // });
  return set;
}

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = ['Bob', 'Kate', 'Jhon', 'Tom', 'Jhon', 'Kate', 'Tom', 'Bob', 'Jhon', 'Tom'];

console.log(myUniq(notUniqNums));

console.log(myUniq(notUniqStrings));
