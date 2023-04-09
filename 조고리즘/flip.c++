#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

int n, answer;
vector<int> dest;

void multiple(int &v) {
    v = -v;
}

void flipper(vector<int> &arr, int start, int end) {
    reverse(arr.begin() + start, arr.begin() + end + 1);
    for(int i = start; i <= end; i++)
        multiple(arr[i]);
}

void recursion(vector<int> arr, int counter) {
    if(counter > 2)
        return;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            vector<int> temp = arr;
            if(dest == (flipper(temp, i, j), temp))
            {
                answer = min(answer, counter);
                return;
            }
            else
            {
                recursion(temp, counter+1);
            }
        }
    }
}

int main() {
    int testcase = 5;
    cin >> n;
    dest.resize(n);
    for(int i = 0; i < n; i++)
        dest[i] = i + 1;
    while(testcase--)
    {
        answer = 3;
        vector<int> arr(n);
        for(int i = 0; i < n; i++)
            cin >> arr[i];
        recursion(arr, 1);
        if(answer == 1)
            cout << "one" << endl;
        else if(answer == 2)
            cout << "two" << endl;
        else
            cout << "over" << endl;
    }
    return 0;
}
