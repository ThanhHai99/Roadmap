#include <iostream>

using namespace std;

int Euclidean(int a, int b) {
    int r = a % b;
    while (r != 0) {
        a =b;
        b = r;
        r = a % b;
    };
    return b;
};

int main() {
    cout << Euclidean(9, 15);
    return 0;
};
