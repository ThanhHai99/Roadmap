function Sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            };
        }
    }
    return arr;
};

(() => {
    let arr = [66, 23, 13, 10, 9, 11, 20, 5, 77, 7];
    Sort(arr);
    console.log(arr);
})();
