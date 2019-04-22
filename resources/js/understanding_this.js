// Understanding "this"

// Normal function invocation

var name = " global"

var func1 = function(){
    var name = "func1";
    console.log(" From func1 ----");
    console.log(this);
    console.log(this.name);
    func2();
};

var func2 = function(){
    var name = "func2";
    console.log(" From func2 ----");
    console.log(this);
    console.log(this.name);
};

var func1b = function(){
    var name = "func1b";
    console.log(" From func1b ----");
    console.log(this);
    console.log(this.name);
    return function func2b(){
        var name = "func2b";
        console.log(" From func2b ----");
        console.log(this);
        console.log(this.name);
    }
};


var func1c = function(func1d){
    var name = "func1c";
    console.log(" From func1c ----");
    console.log(this);
    console.log(this.name);
    func1d();
};

func1();

func1b()();

func1c(function func1d(){
    var name = "func1d";
    console.log(" From func1d ----");
    console.log(this);
    console.log(this.name);

});





























