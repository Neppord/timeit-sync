# timeit

timeit exposes one function timeit(func, iter=1000000, batch=100).

 * func is the function that are timed. It sould take no arguments.
 * iter is the numer of iterations in a batch
 * batch is the number of batches to do

 it returns a list where the first element is the fastest batch,
 and the second one is the average of that run. 
