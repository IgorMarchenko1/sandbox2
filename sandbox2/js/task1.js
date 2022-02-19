let x = {
    name: 'test'
};
let y = {
    name: 'test'
};
let deepEqual = function(x, y) {
    if (x === y) {
        return true;
    } else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
            return false;

        for (let prop in x) {
            if (y.hasOwnProperty(prop)) {
                if (!deepEqual(x[prop], y[prop]))
                    return false;
            } else
                return false;
        }

        return true;
    } else
        return false;
}
console.log(deepEqual(x, y)); //true

//another way

let obj1 = {
    name: 'test'
};
let obj2 = {
    name: 'test1'
};

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
console.log(deepEqual(obj1, obj2)); //false

//

let obj1 = {
    name: 'test',
    data: { value: 1 }
};
let obj2 = {
    name: 'test',
    data: { value: 2 }
};

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
console.log(deepEqual(obj1, obj2)); //false

//

letobj1 = {
    name: 'test'
};
let obj2 = {
    name: 'test',
    age: 10
};

function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
};
console.log(deepEqual(obj1, obj2)); //false