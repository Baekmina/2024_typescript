function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

// callback (cb: () => void)
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// Function = 함수를 정의하는 타입 (어떤 타입의 함수를 사용할 것인지 정의)
// let combineValues: Function; // 아래와 같이 화살표 함수로 정의 가능
let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;
// combineValues = 5;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  // 함수 안에서 콜백 전달 시 결과가 숫자라는 것을 추론함.
  console.log(result);
});
