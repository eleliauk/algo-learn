
function solution(cards) {
    let map =new Map();
    for(let num of cards){
        if(map.has(nums)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    for(let [key ,value]of map){
        if(value==1)
        return key
    }
    return 0;
}

function main() {
    // Add your test cases here
    console.log(solution([1, 1, 2, 2, 3, 3, 4, 5, 5]) === 4);
    console.log(solution([0, 1, 0, 1, 2]) === 2);
}

main();
