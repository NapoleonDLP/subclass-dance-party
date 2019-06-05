document.addEventListener('click', function(ev) {
  const x = ev.clientY;
  const y = ev.clientX;
  // call function to move to x, y
  if (x > 40) {
    dancerGoToPosition(x, y);
  }
}, false);

const dancerGoToPosition = function(x, y) {
  const dolphins = Array.from(document.querySelectorAll('.dolphin'));
  const dots = Array.from(document.querySelectorAll('.redDot'));
  const narwhals = Array.from(document.querySelectorAll('.narwall'));
  const dancers = [...dolphins, ...dots, ...narwhals];


  // const dancers = Array.from(document.querySelectorAll('.dancer'));
  // let top = 50;

  // shark is at 500, 1000
  if ((x > 400 || x < 600) && (y > 900 || y < 1100)) {
    x -= 100;
    y -= 100;
  }

  var x = x.toString();
  var y = y.toString();

  for (let dancer of dancers) {
    dancer.style.top = x + 'px';
    dancer.style.left = y + 'px';
  }
};