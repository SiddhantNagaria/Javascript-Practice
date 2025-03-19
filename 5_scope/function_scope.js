let sum = 55;

function add(a,b){
    let sum = a+b;
    console.log(sum);
    console.log(this.sum);
}

add(10,20);
console.log(sum);
