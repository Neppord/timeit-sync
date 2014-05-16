# timeit

timeit exposes one function timeit(func, iter=1000000, batch=100).

 * func is the function that are timed. It sould take no arguments.
 * iter is the numer of iterations in a batch
 * batch is the number of batches to do

 Returns a list of the total runtime of each batch. It is adviced to use the min
 of this list, or to look on it as a whole, not take the average.
 
 a example exists int example.js
