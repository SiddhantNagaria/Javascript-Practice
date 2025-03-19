function multiplegreet(func,n){
    for(let i =0;i<=n;i++){
        func();
    }
}
let greet= function(){
    console.log("hello");
}

multiplegreet(greet,5);