"use strict";
// 매개변수에 타입 할당하기 (값+콜론+타입) => : number & : string & : boolean
function add(n1, n2, showResult, parse) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //   throw new Error("Incorrect input");
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(parse + result);
    }
    else {
        return result;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultParse = "Result is: ";
const result = add(number1, number2, printResult, resultParse);
// console.log(result);
