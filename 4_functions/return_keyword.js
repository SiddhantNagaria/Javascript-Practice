function returnkeyword(num1,num2){
    return num1+num2;
}
console.log(returnkeyword(5,6));


function getSum(n){
    let sum=0;
    for(let i = 0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
console.log(getSum(5)); // 15