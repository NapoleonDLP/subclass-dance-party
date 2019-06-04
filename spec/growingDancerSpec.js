describe('growingDancer', function() {

  var growingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    growingDancer = new GrowingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(growingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that adds a class to it', function() {
    sinon.spy(growingDancer.$node, 'toggleClass');
    growingDancer.step();
    expect(growingDancer.$node.toggleClass.called).to.be.true;
  });
});
