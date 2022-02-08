//Problem 1
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar); // OUTPUT: Tesla
console.log(otherRandomCar); // OUTPUT: Mercedes

//Problem 2
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
console.log(name); // OUTPUT: UNDEFINED // 'name' is not defined
console.log(otherName); // OUTPUT: ELON

//Problem 3
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password); // OUTPUT: 12345
console.log(hashedPassword); // OUTPUT: UNDEFINED

// Problem 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers; // 2
const [, , , second] = numbers; // 5
const [, , , , , , , , third] = numbers; // 2
//Predict the output
console.log(first == second); // OUTPUT: 5 => FALSE
console.log(first == third); // OUTPUT: 2 => TRUE

// Problem 5
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key); // OUTPUT: value
console.log(secondKey); // OUTPUT: [1,5,1,8,3,3]
console.log(secondKey[0]); // OUTPUT: 1
console.log(willThisWork); // OUTPUT: 5
