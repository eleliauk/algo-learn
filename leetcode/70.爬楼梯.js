/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let memo=new Array(n+1).fill(0)
  function dp(n){
    if(n<=2){
        return n
    }
    if(memo[n]>0){
        return memo[n]
    }
    memo[n]=dp(n-1)+dp(n-2)
    return memo[n]
  } 
  return dp(n)
};