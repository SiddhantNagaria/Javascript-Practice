function multiplegreet(func,n){
    for(let i =0;i<=n;i++){
        func();
    }
}
let greet= function(){
    console.log("hello");
}

multiplegreet(greet,5);
multiplegreet(function(){console.log("hello");}, 5);



//higher order function with returns
function oddEventest(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }else if(request=="even"){
        return function(n){
            console.log(n%2==0);
        }
    }else{
        return function(n){
            console.log("wrong request");
        }
    }
}
let isOdd = oddEventest("odd");
let isEven = oddEventest("even");
isOdd(5);
isEven(5);