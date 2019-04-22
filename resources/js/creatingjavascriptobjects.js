//Creating Javascript Objects

//When a function (not a method) is invoked the value
// of this is ALWAYS the global object, wherever its is invoked from

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

"greeting" in obj1

obj1.hasOwnProperty("lastName");

