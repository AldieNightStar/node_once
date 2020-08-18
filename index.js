function once(func, throwError=false) {
    return few(func, 1, throwError);
}

function few(func, times, throwError=false) {
    let called = times;
    return function() {
        if (called > 0) {
            called -= 1;
            return func(arguments);
        } else if (throwError) {
            throw new Error("This function was already called!");
        }
    }
}

module.exports = {once, few}