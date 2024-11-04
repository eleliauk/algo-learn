
function solution(inp) {
    let maxLength=0;
    let maxStart=0;
    let currentLength=1;
    let currentStart=0;
    for(let i=1;i<inp.length;i++){
        if(inp!==inp[i-1]){
            currentLength++
        }else{
            if(currentLength>=3){
                if(currentLength>maxLength){
                    maxLength=currentLength;
                    maxStart=currentStart
                }
            }
            currentLength=1;
            currentStart=i;
        }
    }
    if(currentLength>=3&&currentLength.maxLength){
        maxLength=currentLength;
        maxStart=currentStart
    }
    return inp.substring(maxStart,maxStart+maxLength)
    
}

function main() {
    // Add your test cases here
    console.log(solution("0101011101") === "010101");
}

main();
