function* chunkGen(collection, size = 2, i = 0) {
    for (; i < collection.length; i += size) {
        yield collection.slice(i, i + size);
    }
}

function chunkArray(collection, size = 1) {
    const chunked = [];
    const gen = chunkGen(collection, size);
    let c = gen.next();
    while (!c.done) {
        chunked.push(c.value);
        c = gen.next();
    }
    return chunked;
}

const result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(result);

//

const chunk = (cards) => {
    let chunkArray = [];
    let j = 0;
    i = 0;
    while (i < cards.length) {
        if (j % 2 == 0) {
            chunkArray.push(cards.slice(i, i + 3));
            i += 3;
        }
    }
    return chunkArray;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));