const removeFromArray = function(array, ...args) {
    let newArray = Array.from(arguments[0]);
    return newArray.filter( x => !args.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;
