const bubbleSort = (a) => {
	const len = a.length;

	let sorted = false;
	while(!sorted) {
		sorted = true;
		for (let i = 0; i < len; i++) {
			let current = a[i];
			let next    = a[i + 1];

			if(next < current) {
				a[i] = next;
				a[i + 1] = current;
				sorted = false;
			}
		}
	}
};

const myArray = [];
const numberPool = 4096;

// add numbers divisible by 2
for (let x = numberPool; x >= 0; x--) {
  if (x % 2 === 0) {
  myArray.push(x);
  }
}

// add numbers divisible by 3
for (let x = numberPool; x >= 0; x--) {
  if (x % 3 === 0) {
    myArray.push(x);
  }
}

// add numbers divisible by 7
for (let x = numberPool; x >= 0; x--) {
  if (x % 7 === 0) {
    myArray.push(x);
  }
}

console.log();

const startTime = process.hrtime.bigint();
bubbleSort(myArray);
const endTime = process.hrtime.bigint();

console.log(`[V8] array contains ${myArray.length} elements, execution time:`,
    `${Number(endTime - startTime) / 1000000} ms`);
// console.log(myArray);
