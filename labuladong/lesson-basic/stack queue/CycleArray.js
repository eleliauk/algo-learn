class CycleArray {
    constructor(size = 1) {
        this.size = size;
        // 因为 JavaScript 允许创建数组，所以无需类型转换
        this.arr = new Array(size);
        // start 指向第一个有效元素的索引，闭区间
        this.start = 0;
        // 切记 end 是一个开区间，
        // 即 end 指向最后一个有效元素的下一个位置索引
        this.end = 0;
        this.count = 0;
    }

    resize(newSize) {
        // 创建新的数组
        var newArr = new Array(newSize);
        // 将旧数组的元素复制到新数组中
        for (var i = 0; i < this.count; i++) {
            // newArr[i] = this.arr[(this.start + i) % this.size];：
            // •	这行代码将 this.arr 中某个位置的元素赋值给 newArr[i]。
            // •	(this.start + i) % this.size 计算了从 this.arr 数组中要取的索引。
            // •	this.start 是原始数组 this.arr 中的起始索引，表示复制数据从哪里开始。
            // •	i 是当前循环的索引，表示从 this.start 开始的偏移量。
            // •	% this.size 是取模运算，确保数组索引不会超出 this.arr 的长度 (this.size)。
            // •	如果 (this.start + i) 大于或等于 this.size，取模操作会将索引“回绕”到数组的开头。
            newArr[i] = this.arr[(this.start + i) % this.size];
        }
        this.arr = newArr;
        // 重置 start 和 end 指针
        this.start = 0;
        this.end = this.count;
        this.size = newSize;
    }

    // 在数组头部添加元素，时间复杂度 O(1)
    addFirst(val) {
        // 当数组满时，扩容为原来的两倍
        if (this.isFull()) {
            this.resize(this.size * 2);
        }
        // 因为 start 是闭区间，所以先左移，再赋值
        this.start = (this.start - 1 + this.size) % this.size;
        this.arr[this.start] = val;
        this.count++;
    }

    // 删除数组头部元素，时间复杂度 O(1)
    removeFirst() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        // 因为 start 是闭区间，所以先赋值，再右移
        this.arr[this.start] = null;
        this.start = (this.start + 1) % this.size;
        this.count--;
        // 如果数组元素数量减少到原大小的四分之一，则减小数组大小为一半
        if (this.count > 0 && this.count == this.size / 4) {
            this.resize(this.size / 2);
        }
    }

    // 在数组尾部添加元素，时间复杂度 O(1)
    addLast(val) {
        if (this.isFull()) {
            this.resize(this.size * 2);
        }
        // 因为 end 是开区间，所以是先赋值，再右移
        this.arr[this.end] = val;
        this.end = (this.end + 1) % this.size;
        this.count++;
    }

    // 删除数组尾部元素，时间复杂度 O(1)
    removeLast() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        // 因为 end 是开区间，所以先左移，再赋值
        this.end = (this.end - 1 + this.size) % this.size;
        this.arr[this.end] = null;
        this.count--;
        // 缩容
        if (this.count > 0 && this.count == this.size / 4) {
            this.resize(this.size / 2);
        }
    }

    // 获取数组头部元素，时间复杂度 O(1)
    getFirst() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        return this.arr[this.start];
    }

    // 获取数组尾部元素，时间复杂度 O(1)
    getLast() {
        if (this.isEmpty()) {
            throw new Error("Array is empty");
        }
        // end 是开区间，指向的是下一个元素的位置，所以要减 1
        return this.arr[(this.end - 1 + this.size) % this.size];
    }

    isFull() {
        return this.count === this.size;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}