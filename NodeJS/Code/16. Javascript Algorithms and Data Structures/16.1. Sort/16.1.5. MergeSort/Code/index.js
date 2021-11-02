let partition = (left, right) => {
	let a = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) a.push(left.shift());
		else a.push(right.shift());
		return [...a, ...left, ...right];
	}
};

let mergeSort = (a) => {
	const middle = Number.parseInt((a.length - 1) / 2);
	if (a.length < 2) return a;
	const left = a.splice(0, middle + 1);
	const right = [...a];
	return partition(mergeSort(left), mergeSort(right));
};

console.log(mergeSort([3, 5, -2, 14, -9, 30]));
