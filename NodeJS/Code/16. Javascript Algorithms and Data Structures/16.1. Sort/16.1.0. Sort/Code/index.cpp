#include <iostream>
#include <vector>
using namespace std;

void Swap(int &a, int &b) {
    int tmp = a;
    a = b;
    b = tmp;
};

void Sort(vector<int> &arr) {
    for (int i = 0; i < arr.size() - 1; i++) {
        for (int j = i + 1; j < arr.size(); j++) {
            if (arr[i] > arr[j]) {
                Swap(arr[i], arr[j]);
            };
        };
    };
};

void print(vector <int> arr) {
   for(int i = 0; i < arr.size(); i++)
   cout << arr.at(i) << ' ';
}

int main() {
    vector<int> arr = { 66, 23, 13, 10, 9, 11, 20, 5, 77, 7 };
    Sort(arr);
    print(arr);
    return 0;
};
