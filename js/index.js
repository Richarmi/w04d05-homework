const myCar = require('./Car');

console.log("increasing the car's speed (acceleration)");
myCar.accelerate(45);
console.log('\n');

console.log("decreasing the car's speed (deceleration)")
myCar.decelerate(25);

console.log('\n');
console.log('This is the car object: ' + myCar.color + " " + myCar.speed + " " + myCar.convertible);
