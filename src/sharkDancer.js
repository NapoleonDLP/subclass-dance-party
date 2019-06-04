var SharkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  moveAllToLeft();
  this.$node.addClass('shark');
  this.setPosition(500, 1000);
};

SharkDancer.prototype = Object.create(Dancer.prototype);

SharkDancer.prototype.constructor = SharkDancer;

SharkDancer.prototype.step = function() {

};