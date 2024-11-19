/**
 * @param {number} n
 * @return {number}
 */
//递归
var fib = function(n) {
    if(n==0||n==1){
        return n
    }
    return fib(n-1)+fib(n-2)
};
//优化 重叠子问题 带备忘录的递归解法
var fib = function(N) {
    // 备忘录全初始化为 0
    let memo = new Array(N + 1).fill(0);
    // 进行带备忘录的递归
    return dp(memo, N);
};

// 带着备忘录进行递归
var dp = function(memo, n) {
    // base case
    if (n == 0 || n == 1) return n;
    // 已经计算过，不用再计算了
    if (memo[n] != 0) return memo[n];
    memo[n] = dp(memo, n - 1) + dp(memo, n - 2);
    return memo[n];
};
//动态规划
var fib = function(n) {
    if(n==0||n==1){
        return n
    }
    let dp=new Array(n+1).fill(0)
    for(let i=2;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }
    return dp[n]
}