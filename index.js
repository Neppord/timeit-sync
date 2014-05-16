var Microwatch = require('microwatch')

function batch(func, iterations) {
  var watch = new Microwatch() 
  watch.start();
  var loopvar = iterations;
  while (loopvar > 0) {
    func();
    loopvar--;
  }
  return watch.now();
}

module.exports = function (func, iterations, batches) {
  iterations = iterations || 1000000;
  batches = batches || 100;
  var res = [];
  var min = batch(func, iterations);
  batches --;
  while(batches > 0 ){
    res.push(batch(func, iterations));
    batches --;
  }
  return res;
}
