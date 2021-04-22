var Bee = require('./Bee');

var HoneyMakerBee = function () {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};


HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  return this.honeyPot += 1;
}
HoneyMakerBee.prototype.giveHoney = function() {
  return this.honeyPot -= 1;
}


module.exports = HoneyMakerBee;
