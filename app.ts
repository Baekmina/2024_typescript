// unknown (사용자가 무엇을 입력할지 아직 모르기 때문에)
let userInput: unknown;

// any보다 unknown을 사용하는 이유 (unknown 타입의 값을 타입이 정해진 변수에 할당하기 위해서는 별도의 확인 작업이 필요함. = 모든 것을 허용하지 않음.)
let userName: string;

// 오류 없이 어떤 값이든 저장 가능
userInput = 5;
userInput = "Max";

// 추가 확인 작업
if (typeof userInput === "string") {
  userName = userInput;
}

// never (절대 아무것도 반환하지 않음.)
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const result = generateError("An error occurred!", 500);
console.log(result);
