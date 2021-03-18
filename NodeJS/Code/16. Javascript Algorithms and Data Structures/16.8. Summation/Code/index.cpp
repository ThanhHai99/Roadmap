#include <iostream>
#include <math.h>
#include <string>

using namespace std;

long Summation0(long a, long b){
    return a + b;
};

string Summation1(string a, string b) {
    string numMax = (a.length() == max(a.length(), b.length())) ? a : b;
    string numMin = (a.length() == min(a.length(), b.length())) ? a : b;
    int m = 0, r0 = 0, j = min(a.length(), b.length()) - 1;
    string result = "";

    for (int i = numMax.length() - 1; i >= 0; --i) {
        if (j >= 0) {
            r0 = ((int)numMax[i] - 48) + ((int)numMin[j] - 48) + m;
            --j;
        } else {
            r0 = ((int)numMax[i] - 48) + 0 + m;
        };
        m = (r0 >= 10) ? 1 : 0;
        result += (r0 % 10) + 48;
        if (i == 0 && r0 >= 10) {
            result += "1";
        };
    };
    return string(result.rbegin(), result.rend());
};

int main() {
    cout << Summation0(11111, 22222) << endl;
    cout << Summation1("34539999345345675675685685", "549634088789789789789787898") << endl;
    return 0;
};
