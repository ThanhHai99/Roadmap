let partition = (array, left, right) => {
	let pivot = array[right];
	let i = left - 1;
	for (let j = left; j < right; j++) {
		if (array[j] <= pivot) {
			i++;
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}
	temp = array[i + 1];
	array[i + 1] = array[right];
	array[right] = temp;
	return i + 1;
};

let quickSort = (array, left, right) => {
	if (left < right) {
		let pivot = partition(array, left, right);
		quickSort(array, left, pivot - 1);
		quickSort(array, pivot + 1, right);
	}
};

let arr = [3, 5, -2, 14, -9, 30];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
