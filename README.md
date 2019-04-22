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
};

var a = sum; 

// a is pointing to sum

var run = function(z) {
    z();
};

run(a);    

```

**Four ways to invoke a function** 
   - as a function
   - as a method
   - as a constructor (new)
   - indirectly using call() and apply()
   
   
**Creating Javascript Objects**
- Two mwthods to create Javascript objects
    - Object Literal
    - Object Constructor
    
  
    
```javascript
// Object Literal
var obj ={
    firstName : "Murillo",
    lastName  : "Cesar"
};
```   
```javascript
// Object Constructor
var obj = new Object();
obj.firstName = " Murillo";
obj.lastName = " Cesar";

```  

- Manipulating objects properties  

```javascript
var obj1 = new Object();

obj1.firstName = "Murillo";
obj1.lastName = "Cesar";

obj1.greeting = function(){
    console.log("Hello!");
    console.log(arguments);
    console.log(this);
};


// Delete should only be used to delete a property
delete obj1.lastName;

// To know if a property exists
"lastName" in obj1;
"greeting" in obj1;
obj1.hasOwnProperty("lastName");
```

- Understanding "this"    
   - Determined at runtime when a function is invoked
   - Determined by how a function is invoked, not where the function is defined
   - A reference to the object
   - this is **NOT** the function itself. Though ti is established when the function is invoked, it is not the function
   - the binding of a value to this (this binding) can be implicit (set up by the JavaScript engine) or explicit (set by the programmer)
   - When a function **(not a method)** is invoked, the value of this is the global object, except when strict mode is active
   - In strict mode the global object is not available for binding



   
- Understanding Prototypes
    - Almost every object is linked to another object and that object is the prototype
    - An object inherits all the properties and methods from it's prototype ancestry 
    - A prototype is automatically assigned to any object
    - You can define an object prototype
    - You can change properties anf method a prototype

    
  
