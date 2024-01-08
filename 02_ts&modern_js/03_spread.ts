// spread - array
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies); // 전체 배열 요소를 가져오고 싶을 때

//spread - object
const person = {
  name: "Max",
  age: 30,
};

const copiedPerson = { ...person };
