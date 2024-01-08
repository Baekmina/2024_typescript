// alias (타입을 직접 생성 가능함. 불필요한 반복을 피하고 타입 중심에서 관리할 수 있음.)
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString(); // 문자열로 변환
  }
  return result;
  // if (resultConversion === "as-number") {
  //   return +result; // +를 앞에 붙이면 숫자로 변환됨 (parseFloat도 숫자로 변환)
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number"); // 문자열인 숫자를 더하고 싶을 때
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
