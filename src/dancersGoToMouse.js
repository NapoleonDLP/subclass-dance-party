document.addEventListener('click', function(ev) {
  const x = ev.clientY;
  const y = ev.clientX;
  // call function to move to x, y
  if (x > 40) {
    dancerGoToPosition(x, y);
  }
}, false);

const dancerGoToPosition = function(x, y) {
  const dancers = Array.from(document.querySelectorAll('.dancer'));
  // let top = 50;
  var x = x.toString();
  var y = y.toString();

  for (let dancer of dancers) {
    dancer.style.top = x + 'px';
    dancer.style.left = y + 'px';
  }
};