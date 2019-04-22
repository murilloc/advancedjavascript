// Using Strict Mode

"use strict";

var name = " global";

var func1 = function(){
    var name = "func1";
    console.log(this);
    console.log(this.name);
};

func1(); // Error because in the strict mode the global object is not available for binding