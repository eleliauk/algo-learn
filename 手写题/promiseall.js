function myPromiseAll(iterable){
    return new Promise((reject,resolve)=>{
        let count=0
        let arr=Array.from(iterable)
        for(let i=0;i<arr.lengh;i++){
            Promise.resolve(arr[i]).then(
                res=>{arr[i]=res
                    count++
                    if(count===arr.length){
                        resolve(result)
                    }
                }
            ).catch(err=>reject(err))
        }
    })
}