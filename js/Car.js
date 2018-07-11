

module.exports.color = 'red';
module.exports.speed = 0;
module.exports.convertible = false;

module.exports.accelerate = (newSpeed) => {
  console.log("old speed: " + module.exports.speed);
  module.exports.speed = newSpeed;
  console.log("new speed: " + module.exports.speed);
}

module.exports.decelerate = (speedReduction) => {
  let finalSpeed = module.exports.speed - speedReduction;

  if(finalSpeed < 0) { finalSpeed = 0; }

  console.log("old speed: " + module.exports.speed);
  console.log("new speed: " + finalSpeed);
}

console.log('end of my module.js file');
