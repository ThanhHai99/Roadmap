let SortNoRecursive = (arr) => {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = i + 1; j < n; j++) {
			if (arr[i] > arr[j]) {
				// Swap
				let tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
		}
	}
	return arr;
}

console.log(SortNoRecursive([66, 3, 13, 10]));

let SortRecursive = (arr) => {};

