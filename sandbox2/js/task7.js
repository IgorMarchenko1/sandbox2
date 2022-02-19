let obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};

function is_object(mixed_let) {
    if (mixed_let instanceof Array) {
        return false;
    } else {
        return (mixed_let !== null) && (typeof(mixed_let) == 'object');
    }
}

function objectToArray(obj) {
    let array = [],
        tempObject;
    for (let key in obj) {

        tempObject = obj[key];

        if (is_object(obj[key])) {
            tempObject = objectToArray(obj[key]);
        }
        array[key] = tempObject;
    }
    return array;
}
console.log(objectToArray(obj));