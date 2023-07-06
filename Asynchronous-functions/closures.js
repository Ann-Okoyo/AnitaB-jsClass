// closure is a function whre the child remembers the parent even
// after the parent has been executed 
const add =(a)=>{
    let num=20;
    const subtract= (b)=>{
        return num - a + b; 

    }
    return subtract;


}
let nums =add(50);
console.log({nums});
console.log(nums(25));