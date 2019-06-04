const moveAllToLeft = function() {
  // const $dancers = $('.dancer');
  const dancers = Array.from(document.querySelectorAll('.dancer'));
  let top = 50;
  for (let dancer of dancers) {
    dancer.style.top = top.toString();
    dancer.style.left = '0';
    top += 50;
  }
};