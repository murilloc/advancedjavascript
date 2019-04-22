/// Prototype

var obj = {};

//true
console.log("toString" in obj);

//false
console.log(obj.hasOwnProperty("toString"));

console.log(obj);

var arr = [1,2,3];
console.log(arr);

var date = new Date();
console.log(date);

// Overriding a method of a prototype
obj.toString = function(){
    console.log("object");
};

obj.toString();

//true
console.log("toString" in obj);

//true
console.log(obj.hasOwnProperty("toString"));


delete obj.toString;

//true
console.log("toString" in obj);

//false
console.log(obj.hasOwnProperty("toString"));

console.log(obj.toString());