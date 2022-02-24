function color(z) {
  var a = getComputedStyle(z);
  var b = a.backgroundColor;
  document.getElementsByClassName('grid')[0].style.backgroundColor = b;
}
function putcolor(z) {
  console.log('hola');
  var a = getComputedStyle(z);
  var b = a.backgroundColor;
  document.getElementsByClassName('grid 2')[0].style.backgroundColor = b;
}
