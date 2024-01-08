"use strict";
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// ADMIN = 0, READ_ONLY = 1, AUTHOR = 2
// 만약 숫자를 바꾸고 싶다면 다른 숫자(ADMIN = 5)로 설정하면 됨. 그 뒤 값들은 시작 값에서 1씩 더해서 값 할당 (= 5, 6, 7)
// enum Role {
//   // ADMIN = 5,
//   // ADMIN = 'ADMIN',
//   ADMIN,
//   READ_ONLY = '100',
//   AUTHOR = 'AUTHOR',
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // hobbies가 문자열 배열이라는 것을 알기 때문에 메소드(toUpperCase)가 붙음.
    // console.log(hobby.map()) // ERROR!! (map = 배열에서는 쓸 수 있으나 문자열에는 X)
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
