#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

long Sqrt(int n) {
    vector<int> result;
    int x0 = n;
    int index = 0;
    while(true) {
        x0 = (x0 + (n/x0)) / 2;
        result.insert(result.begin(), x0);
        if (result.size() >= 4)
            result.pop_back();
        int i = round(result[0]);
        int j = round(result[1]);
        int k = round(result[2]);
        if(k == j && j == i)
            return i;
    }
};

int main() {
    cout << Sqrt(603729); //777
    return 0;
};
