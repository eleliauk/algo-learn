//参考这篇博客 https://github.com/campcc/blog/issues/25

// Promise 的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING; // 初始状态为 pending
    this.value = undefined; // 成功的值
    this.reason = undefined; // 失败的原因
    this.onFulfilledCallbacks = []; // 成功回调函数队列
    this.onRejectedCallbacks = []; // 失败回调函数队列

    // resolve 方法
    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.value = value;
        // 执行所有成功的回调
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };

    // reject 方法
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        // 执行所有失败的回调
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };

    try {
      // 立即执行executor
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  // then 方法，返回一个新的 Promise
  then(onFulfilled, onRejected) {
    // 参数可选，如果不是函数，则忽略
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

    // 返回一个新的 Promise
    const promise2 = new MyPromise((resolve, reject) => {
      // 成功状态处理
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      // 失败状态处理
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        }, 0);
      }

      // pending 状态处理
      if (this.status === PENDING) {
        // 将回调存储起来
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });

        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        });
      }
    });

    return promise2;
  }

  // catch 方法，用于处理 rejected 状态
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // finally 方法，无论成功或失败都会执行
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      reason => MyPromise.resolve(callback()).then(() => { throw reason })
    );
  }

  // 静态 resolve 方法
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }

  // 静态 reject 方法
  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }

  // 静态 all 方法
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'));
      }
      
      const results = [];
      let count = 0;
      
      // 如果传入空数组，直接 resolve
      if (promises.length === 0) {
        return resolve(results);
      }
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = value;
            count++;
            // 所有 promise 都成功时，返回结果数组
            if (count === promises.length) {
              resolve(results);
            }
          },
          reason => {
            // 只要有一个失败，就 reject
            reject(reason);
          }
        );
      });
    });
  }

  // 静态 race 方法
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'));
      }
      
      // 空数组永远不会 resolve 或 reject
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  }
  
  // 静态 allSettled 方法
  static allSettled(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'));
      }
      
      const results = [];
      let count = 0;
      
      // 如果传入空数组，直接 resolve
      if (promises.length === 0) {
        return resolve(results);
      }
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = { status: 'fulfilled', value };
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          },
          reason => {
            results[index] = { status: 'rejected', reason };
            count++;
            if (count === promises.length) {
              resolve(results);
            }
          }
        );
      });
    });
  }
  
  // 静态 any 方法
  static any(promises) {
    return new MyPromise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError('promises must be an array'));
      }
      
      const errors = [];
      let count = 0;
      
      // 如果传入空数组，返回 AggregateError
      if (promises.length === 0) {
        return reject(new AggregateError([], 'All promises were rejected'));
      }
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            // 只要有一个成功，就 resolve
            resolve(value);
          },
          reason => {
            errors[index] = reason;
            count++;
            // 所有 promise 都失败时，返回 AggregateError
            if (count === promises.length) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          }
        );
      });
    });
  }
}

// 处理 Promise 解析过程
function resolvePromise(promise, x, resolve, reject) {
  // 如果 promise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 promise
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise'));
  }

  // 记录是否已经调用过函数
  let called = false;

  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    // 如果 x 是对象或函数
    try {
      // 尝试将 x.then 作为函数调用
      const then = x.then;
      if (typeof then === 'function') {
        // 如果 then 是函数，则将 x 作为作用域 this 调用它
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            // 递归解析
            resolvePromise(promise, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        // 如果 then 不是函数，以 x 为参数执行 promise
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    // 如果 x 不是对象或函数，以 x 为参数执行 promise
    resolve(x);
  }
}

// 导出 MyPromise
module.exports = MyPromise;