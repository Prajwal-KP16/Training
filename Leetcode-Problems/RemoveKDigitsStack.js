/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    for(let i = 0; i<num.length; i++){
        while(stack.length !== 0 && k>0 && (stack[stack.length - 1] - '0') > (num[i] - '0')){
            stack.pop();
            k--;
        }
        stack.push(num[i])
    }

    while(k>0){
        stack.pop();
        k--;
    }

    if(stack.length === 0) return '0';

    let res = "";
    while(stack.length !==0){
        res += stack[stack.length - 1];
        stack.pop();
    }

    while(res.length !== 0 && res[res.length - 1] === '0'){
        res = res.slice(0, -1);
    }

    let str = "";
    for(let i = res.length -1 ; i>=0; i--){
        str += res[i];
    }

    if(res.length === 0) return '0';

    return str;
};