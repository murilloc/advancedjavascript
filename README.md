# Advanced Javascript
---

##### *Keep up to date with frameworks and libraries , but don't learn  then at the expense of pure Javascript* 

- www.javascripting.com

- Javascript primitive data types
    - Number
    - String 
    - NaN
    - Boolean
    - Null
    - Undefined
    - Symbols (ES6)

- Object: A collection of values
- Functions Declarations (or function statement) and Functions Expressions  
- Functions declarations are hoisted and you can invoke the function even if they are not defined yet
```
function doSomething(){
    console.log("Declare something");
}
```

- Function expressions are not hoisted
```
var something = function(){
    console.log("Express something");
};
```

- Functions are objects 
- First Class Functions
```javascript
var sum = function(x,y){
    return x + y;
}

var a = sum; 

// a is pointing to sum

var run = function(z) {
    z();
}

run(a);    

```

- Four ways to invoke a function 
   - as a function
   - as a method
   - as a constructor (new)
   - indirectly using call() and apply()
   
   

  
    





