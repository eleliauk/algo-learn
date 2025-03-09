function myPromiseAll(iterable){
    const result = []
    let count = 0
   return new Promise((reject,resolve)=>{
    const addValue=(index, value)=>{
        result[index]=value
        count++
        if(count===iterable.length){
           resolve(result)
        }
    }
    iterable.forEach((promise,index)=>{
        if(promise instanceof Promise){
            promise.then(res => {
                addData(index, res)
            }, err => reject(err))
        }else{
            addValue(promise)
        }
    })
   })
}