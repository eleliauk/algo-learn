/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let res=[]
    intervals.sort((a,b)=>a[0]-b[0])
    res.push(intervals[0])
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][1]>intervals[i+1][0]){
            
        }
    }
    
    
};