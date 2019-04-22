var name = "global";

// Observe that the function is invoked as a obj1 method
var obj1 = {
    name: "obj1",
    func1: function () {
        console.log("From func1 in  obj1");
        console.log(this);
        console.log(this.name);
    }
};


obj1.func1();


var obj2 = {
    name: "obj2",
    func2: obj1.func1
}

obj2.func2();

var func3 = function () {
    console.log("From func3 --");
    console.log(this);
    console.log(this.name);
};

this.func3();

var obj3 = {
    name: "Obj3",
    func3: func3
};

obj3.func3();


var obj4 = {
    name: "obj4",
    obj5: {
        name: "obj5",
        func5: function () {
            console.log("From obj5 func5 --");
            console.log(this);
            console.log(this.name);

        }
    }
};

obj4.obj5.func5();

var func6 = function () {
    console.log("func6");
};

func6.name = "func6";

func6.func7 = function () {
    console.log("From func7 in func6 --");
    console.log(this);
    console.log(this.name);

};

func6.func7();






