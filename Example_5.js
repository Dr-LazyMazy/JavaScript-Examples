/*
In this simple assignment you are given a number and have to make it negative. 
But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
*/
//1st sol
function makeNegative_1(num) {
if (num < 0) {
    return num
}else {
    return num * -1
  }
}

//2nd sol
function makeNegative_2(num){
    return num < 0 ? num : -num;
}


//3rd method

function makeNegative_3(num){


    return -Math.abs(num);
}

console.log(makeNegative_3(-1))