let nums=[1,2,3,4,5,6,7,8,9,0];

let result = nums.reduce((acc,el)=>{
    if(el>acc){
        return el;
    }
    return acc;
},0);// 9

console.log(result);