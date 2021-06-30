let LinearSearch = (arr, keywordSearch) => {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] === keywordSearch) {
            return i;
        };
    };
    return -1;
};

let arr = [ "tran", "viet", "thanh", "hai" ];
console.log(LinearSearch(arr, "thanh")); // 2
