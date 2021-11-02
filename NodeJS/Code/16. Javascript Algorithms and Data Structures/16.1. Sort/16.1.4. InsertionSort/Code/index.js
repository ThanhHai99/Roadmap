let insertionSort = (array) => {
	for (let step = 1; step < array.length; step++) {
		let key = array[step];
		let j = step - 1;
		while (j >= 0 && key < array[j]) {
			array[j + 1] = array[j];
			--j;
		}
		array[j + 1] = key;
	}
};

let arr = [3, 5, -2, 14, -9, 30];
insertionSort(arr);
console.log(arr);
