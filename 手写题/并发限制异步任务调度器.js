// 延迟函数
const sleep = time => new Promise(resolve => setTimeout(resolve, time));
class Scheduler{
    constructor(){
        this.max=max
        this.cout=0
        this.queue=[]
    }
    async add(func){
        if(this.cout>=this.max){
            await new Promise(resolve=>this.queue.push(resolve))
        }
        this.cout++
        const res= await func()
        this.cout--
        // 若队列中有值，将其resolve弹出，并执行
        // 以便阻塞的任务，可以正常执行
        this.queue.length && this.queue.shift()();
        return res
    }
}
// 同时进行的任务最多2个
const scheduler = new Scheduler(2);

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time, val) => {
    scheduler.add(() => {
        return sleep(time).then(() => console.log(val));
    });
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
// 2
// 3
// 1
// 4
