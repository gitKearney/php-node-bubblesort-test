const bubbleSort = require('./bubble-sort-core').bubbleSort;
const buildArray = require('./bubble-sort-core').buildArray;
const http = require('http');
const url = require('url');

http.createServer(async function (req, res) {
    const query = url.parse(req.url,true).query;
    const numberPool = parseInt(query.num);
    const myArray = buildArray(numberPool);

    const startTime = process.hrtime.bigint();
    bubbleSort(myArray);
    const endTime = process.hrtime.bigint();

    const totalTime = Number(endTime - startTime) / 1000000;
   res.write(`[V8] array contains ${myArray.length} elements, execution time: ${totalTime} ms`);
   res.end();
}).listen(8080);