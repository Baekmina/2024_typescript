function add(n1: number, n2: number) {
  return n1 + n2;
}

// void (반환하지 않음) => 함수에 반환값이 없는 대부분의 경우에 사용
// function printResult(num: number): void {
function printResult(num: number) {
  console.log("Result: " + num);
}

printResult(add(5, 12)); // undefined

// let someValue: undefined; // undefined를 type으로 설정할 수 있음.
