/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res=[],path=[]
    function back(_k,_n,sum,index){
        if(path.length==_k){
            if(sum==_n){
                res.push(path.slice())
            }
            return
        }
        for(let i=index;i<=9;i++){
            path.push(i)
            sum+=i
            back(_k,_n,sum,i+1)
            sum-=i
            path.pop(i)
        }
        
    }
    back(k,n,0,1)

    return res
};