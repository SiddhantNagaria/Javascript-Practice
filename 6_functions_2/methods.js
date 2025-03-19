// actions performed on an object 
const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    multiply: function(a,b){
        return a*b;
    },
    divide: function(a,b){
        return a/b;
    }
}

//methods-shorthand
const calculator2 = {
    add(a,b){
    return a+b;
    },
    sub(a,b){
    return a-b;
    },
    multiply(a,b){
    return a*b;
    },
    divide(a,b){
    return a/b;
    }
};
