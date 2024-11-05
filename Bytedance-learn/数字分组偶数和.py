def solution(numbers):
    # 将每个字符串转换成列表，便于遍历选择
    groups = [list(map(int, str(group))) for group in numbers]
    
    def dfs(index, current_sum):
        # 如果已处理所有数字组
        if index == len(groups):
            # 检查和是否为偶数
            return 1 if current_sum % 2 == 0 else 0
        
        # 初始化当前分组的组合总数
        count = 0
        
        # 遍历当前分组的每个数字
        for num in groups[index]:
            # 递归到下一组，并更新当前和
            count += dfs(index + 1, current_sum + num)
        
        return count

    # 从第0组开始，当前和为0
    return dfs(0, 0)

if __name__ == "__main__":
    #  You can add more test cases here
    print(solution([123, 456, 789]) == 14)
    print(solution([123456789]) == 4)
    print(solution([14329, 7568]) == 10)