function traverse(nums){
    let count=0;
    // 通过索引遍历数组
    for(let i=0;i<nums.length;i++){
        count+=nums[i];
    }
    // 直接遍历数组元素
    for(const num of nums){
        count+=num
    }
    
}