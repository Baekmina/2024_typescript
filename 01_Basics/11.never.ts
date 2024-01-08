// never (절대 아무것도 반환하지 않음.)
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
  // while (true) {}
}

const result = generateError("An error occurred!", 500);
console.log(result);
