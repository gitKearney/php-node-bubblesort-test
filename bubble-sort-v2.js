const bubbleSort = require('./bubble-sort-core').bubbleSort;
const buildArray = require('./bubble-sort-core').buildArray;

const numberPool = 4096;

const myArray = buildArray(numberPool);
console.log();

const startTime = process.hrtime.bigint();
bubbleSort(myArray);
const endTime = process.hrtime.bigint();

console.log(`[V8] array contains ${myArray.length} elements, execution time:`,
    `${Number(endTime - startTime) / 1000000} ms`);
// console.log(myArray);
