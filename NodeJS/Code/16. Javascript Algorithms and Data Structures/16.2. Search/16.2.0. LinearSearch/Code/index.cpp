#include <iostream>
#include <vector>

using namespace std;

bool LinearSearch(vector<string> arr, string keyword) {
    for (int i = 0; i < arr.size(); i++ ) {
        if (arr[i] == keyword) {
            return true;
        };
    };
    return false;
};

int main() {
    vector<string> arr = { "tran", "viet", "thanh", "hai" };
    cout << LinearSearch(arr, "thanh");
    return 0;
};
