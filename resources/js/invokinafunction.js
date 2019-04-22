// Invoking a function

var test = function (val) {

    console.log(this);
    console.log(val);
    console.log(arguments); // Array like parameter because functions
                            // available for an array are not available for arguments property
    console.log(arguments[0]);
    console.log(arguments[1]);

};

var sumIt = function() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
}