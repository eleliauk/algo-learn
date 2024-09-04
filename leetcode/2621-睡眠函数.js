//请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。
/**
 * @param {number} millis
 * @return {Promise}
 */
// 1.return
async function sleep(millis) {
   return new Promise(
    //成功失败判断
    reslove=>{
        setTimeout(reslove,millis)
    }
   )
}
//2.await
async function sleep(millis) {
    await new Promise (res=>setTimeout(res,millis))
 }
/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */