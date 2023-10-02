// Design a function which takes an array as input and returns a function 'next', calling which fetches a value one by one
function makeIterator(arr) {
    let nextIndex = 0;
    return function next() {
        if (nextIndex < arr.length) return arr[nextIndex++];
        return undefined
    }
}

const next = makeIterator([1, 2, 3])

console.log(next())
console.log(next())
console.log(next())
console.log(next()) // undefined
