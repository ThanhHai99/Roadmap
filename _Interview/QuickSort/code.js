let quickSort = (a) => {
    if (a.length <= 1) return a;

    const pivotIndex = a.length - 1;
    const pivot = a[pivotIndex];
    const left = [], right = [];
    
    for (let i = 0; i < pivotIndex; i++) {
        if (a[i] < pivot)
            left.push(a[i]);
        else
            right.push(a[i]);
    };
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([100, 2222, 5, 4, 7, 5, 6, 8, 0, 12, 34, 15]));
