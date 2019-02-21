function memoize(fn) {
    const cache = {};
    return function(...args) {
        if(cache[args]) {
            return cache[args];
        }
        const result = fn.apply(this, args)
        cache[args] = result;

        return result;
    }
}

function slowfib(n) {
    if(n < 2) {
        return n;
    } else {
       return  slowfib(n - 1) + slowfib(n -2)
    }
}

// const fib = memoize(slowfib)
module.exports = slowfib;
// module.exports = fib;

