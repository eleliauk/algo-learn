function sort(nums){
    const  n = nums.length;
    let sortedIndex = 0;
    while(sortedIndex<n){
          // 寻找 nums[sortedIndex..] 中的最小值
        // 同时将这个最小值逐步移动到 nums[sortedIndex] 的位置
        for (let i = n - 1; i > sortedIndex; i--) {
            if (nums[i] < nums[i - 1]) {
                //  swap(nums[i], nums[i - 1])
                let tmp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = tmp;
            }
        }
        sortedIndex++;
    }
    console.log(nums)
}
// 进一步优化，数组有序时提前终止算法
function sort1(nums){
    const n = nums.length;
    let sortedIndex = 0;
    while (sortedIndex < n) {
        // 加一个布尔变量，记录是否进行过交换操作
        let swapped = false;
        for (let i = n - 1; i > sortedIndex; i--) {
            if (nums[i] < nums[i - 1]) {
                // swap(nums[i], nums[i - 1])
                let tmp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = tmp;
                swapped = true;
                console.log(1)
            }
        
        }
        // 如果一次交换操作都没有进行，说明数组已经有序，可以提前终止算法
        if (!swapped) {
            break;
        }
        sortedIndex++;
    }
}
sort1([1,6,3,6,7])