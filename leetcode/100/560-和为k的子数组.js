var subarraySum = function(nums, k) {
   let preSum=new Map()
   let sum=0;
   let res=0
   preSum.set(0,1)
    for(const x of nums){
        sum+=x
        res += preSum.get(sum - k) ?? 0;
        preSum.set(sum, (preSum.get(sum) ?? 0) + 1);
    }
    return res
};