/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr1=new Array(1001).fill(0)
    let arr2=new Array(1001).fill(0)
    for(let i=0;i<nums1.length;i++){
        arr1[nums1[i]]++
    }
    for(let i=0;i<nums2.length;i++){
        arr2[nums2[i]]++
    }
    let answer=[]
    for(let i=0;i<=1000;i++){
        if(arr1[i]&&arr2[i])
            answer.push(i)
    }
    return  answer

};