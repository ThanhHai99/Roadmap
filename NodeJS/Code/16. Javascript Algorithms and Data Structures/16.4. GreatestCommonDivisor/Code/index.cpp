#include <iostream>
#include <math.h>

using namespace std;

int GreatestCommonDivisor0(int a, int b) {
    for (int i = min(a, b); i > 0; --i) {
        if (a%i == 0 && b%i == 0) {
            return i;
        }
    };
    return 1;
};

int GreatestCommonDivisor1(int a, int b) {
    if (a == 0 || b == 0) {
        return a + b;
    }
    while (a != b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
};

int GreatestCommonDivisor2(int a, int b) {
    while (a*b != 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        };
    };
    return a + b;
};

int main() {
    cout << "GreatestCommonDivisor0: " << GreatestCommonDivisor0(9, 15); // 3
    cout << "\nGreatestCommonDivisor1: " << GreatestCommonDivisor1(9, 15); // 3
    cout << "\nGreatestCommonDivisor2: " << GreatestCommonDivisor2(9, 15); // 3
    
    return 0;
};
