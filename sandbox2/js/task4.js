let arr = [
        [5, 3, 6],
        [7, 11, 2],
        [15, 9, 4]
    ]
    .reduce(function(p, c) {
        return p.concat(c);
    });
let min = Math.min.apply(null, arr);
// =2


const doubleEveryEven = (arr) => {

    let doubled = [];

    for (let i = 0; i < arr.length; i++) {
        doubled.push(arr[i] % 2 ? arr[i] * 2 : arr[i]);
    }
    return doubled;
}
console.log(doubleEveryEven([5, 3, 6, 7, 11, 2, 15, 9, 4]));