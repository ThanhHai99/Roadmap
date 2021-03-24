#include <iostream>
#include <math.h>

using namespace std;

bool Eratosthene(int n) {
    if (n < 2) return false;
    for (int i = 2; i <= sqrt(n); i++) {
        if (n % i == 0) return false;
    };
    return true;
};

int main() {
    cout << Eratosthene(11);
    cout << Eratosthene(22);
    cout << Eratosthene(77);
    cout << Eratosthene(37);
    return 0;
};
