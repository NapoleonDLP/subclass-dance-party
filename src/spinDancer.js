var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('narwall');
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggleClass('upsideDown');
};