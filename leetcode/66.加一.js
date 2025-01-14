/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   var len=digits.length-1
   digits[len]+=1;
   let num=len
   while(num>0){
        if(digits[num]==10){
            digits[num-1]+=1
            digits[num]=0
        }
        num--
   }
   if(digits[0]==10){
    digits.unshift(1)
    digits[0]=0
}
   return digits

};