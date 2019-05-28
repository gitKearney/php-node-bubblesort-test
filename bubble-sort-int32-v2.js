const bubbleSort = (a) => {
	const len = a.length;

	let sorted = false;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < len; i++) {
			let current = a[i];
			let next = a[i + 1];

			if (next < current) {
				a[i] = next;
				a[i + 1] = current;
				sorted = false;
			}
		}
	}
};

const numberPool = 4096;
function initArray() {
	const myArray = [];
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
	return new Int32Array(myArray);
};

function checkSort(myArray) {
	for (let i = 0; i < myArray.length - 1; i++) {
		if (myArray[i] > myArray[i + 1]) {
			console.error(myArray[i], myArray[i + 1]);
			break;
		}
	}
}

(function () {
	const myArray = initArray();

	initArray();

	const startTime = process.hrtime.bigint();
	bubbleSort(myArray);
	const endTime = process.hrtime.bigint();

	checkSort(myArray);

	console.log(`[V8] array contains ${myArray.length} elements, execution time:`,
		`${Number(endTime - startTime) / 1000000} ms`);
	initArray();
})();

(function () {
	const myArray = initArray().reverse();

	const startTime = process.hrtime.bigint();
	bubbleSort(myArray);
	const endTime = process.hrtime.bigint();

	checkSort(myArray);

	console.log(`Reverse input: [V8] array contains ${myArray.length} elements, execution time:`,
		`${Number(endTime - startTime) / 1000000} ms`);
})();