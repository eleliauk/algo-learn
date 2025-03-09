/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let res=0
  let set=new Set()
  for (let num of nums) {
    set.add(num);
}
  if(nums.length===0){
    return 0
  }  
  for(let num of set){
    if(set.has(num-1)){
        continue;
    }
    let curNum=num
    let curLen=1
    while(set.has(curNum+1)){
        curNum+=1
        curLen+=1
    }
    res=Math.max(res,curLen)

  }
  return res
};