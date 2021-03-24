// ax + by = d (d = gcd(a, b))
#include <iostream>

using namespace std;

void EuclideanExtend(int a, int b) {
    if (a < b) {
        cout << "ĐK: a >= b";
        return;
    };
    int d, x, y, x1, x2, y1, y2, q, r;
    if (b == 0) {
        d = a, x = 1, y = 0;
    };
    x2 = 1, x1 = 0, y2 = 0, y1 = 1;
    while(b > 0) {
        q = ~~(a/b), r = a - q*b;
        x = x2 - q*x1;
        y = y2-q*y1;
        a = b;
        b = r;
        x2 = x1;
        x1 = x;
        y2 = y1;
        y1 = y;
    };

    cout << "x = " << x2 << ",y = " << y2 << ", d = " << a;
    return;
};

int main() {
    EuclideanExtend(4864, 3458);
    return 0;
};
