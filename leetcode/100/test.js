class Group {
    constructor() {
        this.group = [];
    }

    add(item) {
        if (!this.group.includes(item)) {
            this.group.push(item);
        }
    }

    delete(item) {
        let index = this.group.indexOf(item);
        if (index !== -1) {
            this.group.splice(index, 1);
        }
    }

    has(item) {
        return this.group.includes(item);
    }

    static from(a) {
        let g = new Group();
        for (let item of a) {
            g.add(item);  // 将 item 正确添加到 g.group 中
        }
        return g;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);  // 传入 Group 实例本身
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group.group;  // 确保 group.group 是数组
    }

    next() {
        if (this.index >= this.group.length) {
            return { done: true };
        }
        let value = this.group[this.index];
        this.index++;
        return { value, done: false };
    }
}
for (const value of Group.from(["a", "b", "c"])) {
    console.log(value);  // 输出 a, b, c
}