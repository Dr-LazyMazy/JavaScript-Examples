/*
Remove First and Last Character

It's pretty straightforward. 

Your goal is to create a function that removes the 

first and last characters of a string. 

You're given one parameter, the original string. 

You don't have to worry about strings with less than two characters.
*/

//1st sol

function removeChar(str){
    const lengthOfString = str.length;

    return str.substr(1, lengthOfString - 2);
};



//2nd sol

function removeChar(str){
    return str.slice(1, -1);
}