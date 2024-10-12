// 对选择排序进一步优化，想左侧有序数组中插入元素
// 这个算法有另一个名字，叫做插入排序
function sort(nums) {
    const n = nums.length;
    // 维护 [0, sortedIndex) 是有序数组
    let sortedIndex = 0;
    while (sortedIndex < n) {
        // 将 nums[sortedIndex] 插入到有序数组 [0, sortedIndex) 中
        for (let i = sortedIndex; i > 0; i--) {
            if (nums[i] < nums[i - 1]) {
                let tmp = nums[i];
                nums[i] = nums[i - 1];
                nums[i - 1] = tmp;
            } else {
                break;
            }
        }
        sortedIndex++;
    }
}