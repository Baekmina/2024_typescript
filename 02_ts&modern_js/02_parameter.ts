const userMame = "Max";

let age = 30;
age = 29;

// function
// 기본 인수가 아닌 매개 변수는 기본 매개변수보다 먼저 와야함.
// const add = (a: number = 1, b: number) => { // ERROR!! printOutput(add(5))에서 5는 항상 첫번째 인수이고, 두번째 인수가 정해지지 않았음.
const add = (a: number, b: number = 1) => {
  return a + b;
};

const printOutput: (a: number | string) => void = (output) => {
  console.log(output);
};

// printOutput(add(5, 2));
printOutput(add(5));
