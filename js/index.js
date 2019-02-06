//Geometry Basics: Circle Circumference in 2D
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius
}

//How new Works
var myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

//Beginner - Lost Without a Map
function maps(x) {
    return x.map(n=>n * 2)
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min.apply(null, args);
    }
}

//Understanding closures - the basics
function buildFun(n) {
    var res = []
    var fu = function(x) {
        return function() {
            return x;
        }
    }
    for (var i = 0; i < n; i++) {
        res.push(fu(i))
    }
    return res
}

//Closures and Scopes
function createFunctions(n) {
    var callbacks = [];
    var fu = function(x) {
        return function() {
            return x
        }
        ;
    };
    for (var i = 0; i < n; i++) {
        callbacks.push(fu(i))
    }
    return callbacks;
}

//Training JS #12: loop statement --for..in and for..of
function giveMeFive(obj) {
    let result = []
    for (let key in obj) {
        if (key.length === 5)
            result.push(key);
        if (obj[key].length === 5)
            result.push(obj[key]);
    }
    return result
}

//Training JS #13: Number object and its properties
function whatNumberIsIt(n) {
    if (n === Number.MAX_VALUE)
        return "Input number is Number.MAX_VALUE";
    if (n === Number.MIN_VALUE)
        return "Input number is Number.MIN_VALUE";
    if (Number.isNaN(n))
        return "Input number is Number.NaN";
    if (n === Number.NEGATIVE_INFINITY)
        return "Input number is Number.NEGATIVE_INFINITY";
    if (n === Number.POSITIVE_INFINITY)
        return "Input number is Number.POSITIVE_INFINITY";
    if (Number.isSafeInteger(n))
        return "Input number is " + n;
}
