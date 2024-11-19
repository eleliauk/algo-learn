#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int maxDP(vector<int>& nums) {
    unordered_map<int, int> freq;
    int maxValue = 0;
    for (int num : nums) {
        freq[num]++;
        maxValue = max(maxValue, num); 
    }
    vector<int> dp(maxValue + 1, 0);
    dp[0] = 0; 
    dp[1] = freq[1] * 1; 

    for (int i = 2; i <= maxValue; i++) {
        dp[i] = max(dp[i - 1], dp[i - 2] + freq[i] * i);
    }

    return dp[maxValue];
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) {
        cin >> nums[i];
    }
    cout << maxDP(nums) << endl;
    return 0;
}