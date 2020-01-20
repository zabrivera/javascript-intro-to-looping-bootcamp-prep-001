function forLoop(arr){
  for (var i = 0; i < 25; ++i) {
    arr.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`)
  }
  return arr
}

function whileLoop(n){
  while (n != 0 ) {
    console.log(--n)
  }
  return 'done'
}

function doWhileLoop(num){
  var i = 0;

  function incrementVariable() {
    i = i + 1;
    return i;
  }

  do {
    console.log('I run once regardless.')
  } while(incrementVariable() < num)
}
