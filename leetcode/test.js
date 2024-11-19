function deepEqual(m, n) {
    if (m === n) return true;
    else if (m == null || n == null || typeof m != "object" || typeof n != "object") {
        return false;
    } else {
        let a = Object.keys(m);
        let b = Object.keys(n);
        if (a.length !== b.length) return false; // 检查键的数量是否相等
        for (let key of a) {
            if (!deepEqual(m[key], n[key])) return false; // 检查每个键和值
        }
        return true;
    }
}
function deepEqual1(m,n){
    if (m===n) return true;
    else if(m==null||n==null||typeof m!="object"||typeof n!="object"){
        return false;
    }
    else{
        let a=Object.keys(m);
        let b=Object.keys(n);
        if (a.length!==b.length) return false;
            for (let i of a){
                if(!deepEqual(m[i],n[i])) return false;
            }
        }
        return true;
}   

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual1(obj, {here: {is: "an"}, object: 2}));
// → true