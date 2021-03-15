#include <iostream>
using namespace std;

int quickPow(int a, int n) {
    long result = 1;
    while(n > 0) {
        if (n % 2 == 1) {
            result *= a;
        }
        a *= a;
        n = n / 2;
    }
    return result;
};

int main() {
    cout << quickPow(2, 12); //4096
    return 0;
};
