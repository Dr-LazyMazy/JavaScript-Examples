/*
Century From Year

Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/


//1st sol
function century(year) {
    // if the year is less than 100, return 1
    if (year <= 100){
        return 1;
    }

    // calculate the century by dividing the year by 100
    const firstTwoDigits = Math.floor(year / 100);


    if (year % 100 === 0){
        return firstTwoDigits;
    } else{
        return firstTwoDigits + 1;
    }
}


//2nd sol
function century(year) {
    return Math.ceil(year / 100);
}