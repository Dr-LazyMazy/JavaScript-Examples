/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples:
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/
//1st sol

function greet(name){
    if (name === "Johnny"){
        return "Hello, my love!"
    }

    return "Hello, " + name + "!"
}
console.log(greet("ABD"))


//2nd sol
function greet(name){
    return "Hello, " + (name === "Johnny" ? "my love" : name ) + "!"
}