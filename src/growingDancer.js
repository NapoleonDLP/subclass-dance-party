var GrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('dolphin');
  this.timeBetweenSteps = 600;
};

GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.contstructor = GrowingDancer;

GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggleClass('big');
};