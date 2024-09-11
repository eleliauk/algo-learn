const map1=new Map()
const Mapfun =()=>{
    console.log('function')
    return 'return'
}
function Mapfun1(){
    console.info('function1')
    return 1111
}
map1.set('1111',"您好")
map1.set(Mapfun(),'2222')
map1.set('2222',Mapfun1)
console.log(map1.get(Mapfun1()))
//console.log(map1.get('2222'))
/* 遍历哈希表 */
// console.info('\n遍历键值对 Key->Value');
// for (const [k, v] of map1.entries()) {
//     console.info(k + ' -> ' + v);
// }
// console.info('\n单独遍历键 Key');
// for (const k of map1.keys()) {
//     console.info(k);
// }
// console.info('\n单独遍历值 Value');
// for (const v of map1.values()) {
//     console.info(v);
// }