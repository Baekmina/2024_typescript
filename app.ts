// object

// const person: {
//   name: string;
//   age: number;
// } = {
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple (몇 개의 값을 배열에 담을지 명확하고 각 값의 타입도 미리 알고 있으면 사용하는 것이 데이터 타입 처리에 유용)
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role = [0, "admin"];
// person.role.push('admin') // tuple에서 허용되는 일종의 예외 (오류)
// person.role = [0, 'admin', 'user'] // 위에서 정의한 role의 구조와 일치하지 X
// person.role[1] = 10 // ERROR!! 두번째 값은 문자열이기 때문에 오류가남

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // hobbies가 문자열 배열이라는 것을 알기 때문에 메소드(toUpperCase)가 붙음.
  // console.log(hobby.map()) // ERROR!! (map = 배열에서는 쓸 수 있으나 문자열에는 X)
}
