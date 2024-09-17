/*
String repeat

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

// 1st sol
function repeatStr(numberOfRepeats, str) {
    let starterString = '';
    
    for (let i = 0; i < numberOfRepeats; i++) {
        starterString = starterString + str;
    }

    return starterString;
}



// 2nd sol

function repeatStr (n, s) {
    return s.repeat(n);
}
