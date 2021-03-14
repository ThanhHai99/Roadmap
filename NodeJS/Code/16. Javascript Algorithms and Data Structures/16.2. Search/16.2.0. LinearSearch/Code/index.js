let LinearSearch = (arr, keyword) => {
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] == keyword) {
            return true;
        };
    };
    return false;
};

(() => {
    let arr = [ "tran", "viet", "thanh", "hai" ];
    console.log(LinearSearch(arr, "thanh"));
})();
