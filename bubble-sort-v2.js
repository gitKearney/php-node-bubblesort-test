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

// const myArray = [3, 4, 1, 3, 5, 1, 92, 2, 4124, 424, 52, 12];
const myArray = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const startTime = process.hrtime();
bubbleSort(myArray);
const endTime = process.hrtime(startTime);

console.log(`${endTime[0]} seconds ${endTime[1] / 1000000} milliseconds`);

console.log('sorted: ', myArray);
