"use strict";
// object
// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
};
let favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // hobbies가 문자열 배열이라는 것을 알기 때문에 메소드(toUpperCase)가 붙음.
    // console.log(hobby.map()) // ERROR!! (map = 배열에서는 쓸 수 있으나 문자열에는 X)
}
