const MyPromise = require('./promise');

// 基本使用示例
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
    // reject('error');
  }, 1000);
});

promise
  .then(value => {
    console.log('then 1:', value);
    return value + ' plus';
  })
  .then(value => {
    console.log('then 2:', value);
    throw new Error('then 2 error');
  })
  .catch(err => {
    console.log('catch:', err.message);
    return 'catch return';
  })
  .finally(() => {
    console.log('finally');
  })
  .then(value => {
    console.log('then after finally:', value);
  });

// Promise.all 示例
const p1 = MyPromise.resolve(1);
const p2 = new MyPromise(resolve => setTimeout(() => resolve(2), 1000));
const p3 = new MyPromise((resolve, reject) => setTimeout(() => resolve(3), 2000));

MyPromise.all([p1, p2, p3])
  .then(values => {
    console.log('all resolved:', values);
  })
  .catch(err => {
    console.log('all rejected:', err);
  });

// Promise.race 示例
MyPromise.race([p1, p2, p3])
  .then(value => {
    console.log('race resolved:', value); // 最快的是 p1
  })
  .catch(err => {
    console.log('race rejected:', err);
  });
