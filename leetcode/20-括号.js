/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const num=s.length;
   if(num%2===1){
    return false;
   }
   const pairs=new Map(
    [
        [')','('],
        ['}','{'],
        [']','[']
    ]
   );
   const stk=[];
   for(let ch of s){
    if(pairs.has(ch)){
        if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) 
    //•stk 是一个栈，用来存储遇到的左括号（或者其他待匹配的符号）。栈遵循“后进先出”的原则。
    //•!stk.length：如果栈是空的，说明当前还没有左括号等待匹配，但却遇到了一个闭合括号 ch，这意味着括号不匹配。
    //•stk[stk.length - 1] !== pairs.get(ch)：如果栈不为空，检查栈顶元素（stk[stk.length - 1]）
    //是否与 ch 对应的开符号匹配（pairs.get(ch) 返回对应的开符号）。如果栈顶元素与当前闭合符号不匹配，说明括号不匹配。
    //如果这两个条件中的任何一个为真，就返回 false，表示符号不匹配。
            {
            return false;
        }
        stk.pop();
    }else{
        stk.push(ch);
    }
   
   }
   return !stk.length
};
