let bubbleSort = (a) => {
	let k = a.length - 1;
	let step = 0;
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < k; j++) {
			if (a[j + 1] < a[j]) {
				// Swap
				let tmp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = tmp;
			}
			++step;
		}
		--k;
	}
	console.log("Total step: " + step);
};

let arr = [3, 5, -2, 14, -9, 30];
bubbleSort(arr);
console.log(arr);
