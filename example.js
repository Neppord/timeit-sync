var timeit = require("./index");
console.log(
  Math.min.apply(Math,
    timeit(function (){1+1}, 1000000)
  )
);
