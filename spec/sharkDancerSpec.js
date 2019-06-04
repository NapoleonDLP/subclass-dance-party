describe('sharkDancer', function() {

  var sharkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sharkDancer = new SharkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sharkDancer.$node).to.be.an.instanceof(jQuery);
  });

});