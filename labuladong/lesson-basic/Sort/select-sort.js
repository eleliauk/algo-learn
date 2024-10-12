//选择排序
function sort(nums) {
    // 你的代码，将 nums 中的元素从小到大排序
    const n = nums.length;
    let sortIndex=0;
    while(sortIndex<n){
        let minIndex=sortIndex;
        for(let i=sortIndex+1;i<n;i++){
            if(nums[minIndex]>nums[i]){
                minIndex=i;
            }
        }
        [nums[minIndex],nums[sortIndex]]=[nums[sortIndex],nums[minIndex]]
        sortIndex++;
        //console.log(sortIndex)
    }
    console.log(nums)
}

sort([1,2,4,5,6,8,3,1])