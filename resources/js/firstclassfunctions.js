// First Class Functio demostration

var sum = function(x,y){
    return x + y;
}

var run = function(fn, a,b){
    console.log(fn(a,b));
};

run(sum,10,5);

run(function(a,b){
    return a * b;
},5,10);