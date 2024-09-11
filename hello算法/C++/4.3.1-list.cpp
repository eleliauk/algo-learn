#include <iostream>
#include <vector>
using namespace std;
int main (){
    //初始化列表
    vector<int> nums1;
    vector<int> nums={1,3,2,5,4};
    //列表本质也是数组
    int num=nums[1];
    nums[1]=0;
    //清空
    nums.clear();
    //尾部加元素
    nums.push_back(1);
    nums.push_back(2);
    nums.push_back(3);
    // 中间插入元素
    //  在索引 3 处插入数字 6
    nums.insert(nums.begin()+3,6);
    //删除元素
    nums.erase(nums.begin()+3);
    int count=0;
    for (int i = 0; i < nums.size(); i++)
    {
      count+=nums[i];  
    }
    count=0;
    for(int num:nums){
        count+=num;
    }
    //拼接列表
    //vector<int> nums1={6,7,8,10,9};
    nums.insert(nums.end(),nums1.begin(),nums1.end());
    //排序
    sort(nums.begin(),nums.end());
    for (
      int i = 0; i < nums.size(); i++)
    {
      cout<<nums[i]<<endl;
    }
    
    return 0;
}