/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cap=capacity
    this.cache=new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache.has(key)){
        //更新时间 拿出来 放回去
        this.cache.update(key)
        return this.cache.get(key)

    }else{
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.cache.has(key)){
        this.cache.set(key,value)
        //gengxinshijian
        this.cache.update(key)
        return ;
    }
    if (this.cache.size >= this.cap) {
        // 链表头部就是最久未使用的 key
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
    this.cache.set(key, val); 
};
LRUCache.prototype.update=function(key){
    const val=this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key,val)
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */