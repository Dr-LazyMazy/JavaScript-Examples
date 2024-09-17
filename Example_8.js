/*
Get the mean of an array

It's the academic year's end, fateful moment of your school report. The averages must be calculated. 

All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/

function getAverage(scoreArray) {
// Aavearge sum(all the numbers) / count(all the numbers)
    const count = scoreArray.length;
    let sum = 0;

    for (let i = 0; i < count; i++) {
        sum = sum + scoreArray[i];
    }

    const avg = sum / count;
    const roundedDown = Math.floor(avg);

    return roundedDown;
}