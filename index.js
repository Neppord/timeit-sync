var microtime = require('microtime')

function batch(func, iterations) {
  var start = microtime.nowStruct();
  var loopvar = iterations;
  while (loopvar > 0) {
    func();
    loopvar--;
  }
  var end = microtime.nowStruct()
  return (end[0] -  start[0]) * 1000000 + (end[1] - start[1]);
}

module.exports = function (func, iterations, batches) {
  iterations = iterations || 1000000;
  batches = batches || 100;
  var min = batch(func, iterations);
  batches --;
  while(batches > 0 ){
    min = Math.min(batch(func, iterations), min);
    batches --;
  }
  return [min, min / iterations];
}
