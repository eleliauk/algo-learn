
function solution(A) {
    let N = A.length;
    if (N === 1) return 0; // 边界条件处理

    let sum = 0;
    A.sort((a, b) => a - b); // 对数组进行排序

    for (let i = 0; i < N; i++) {
        let right = N - i - 1; // 比当前分数高的学生数量
        let left = i; // 比当前分数低或相等的学生数量
        if (right < left) {
            sum++;
        }
    }

    return sum;
}
function main() {
    // Add your test cases here
    console.log(solution([100, 100, 100]) === 3);
    console.log(solution([2, 1, 3]) === 2);
    console.log(solution([30, 1, 30, 30]) === 3);
    console.log(solution([19, 27, 73, 55, 88]) === 3);
    console.log(solution([19, 27, 73, 55, 88, 88, 2, 17, 22]) === 5);
}

main();


