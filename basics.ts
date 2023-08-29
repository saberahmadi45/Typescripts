//Primitive (number, string, boolean, null, undefined)

let age: number;
age = 12;

let userName: string;
userName: "Ali";

let isInstructor: boolean;
isInstructor = true;

//More Complext types

//1-Working with Array
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

//Define your Alias Type

type Person = {
  name: string;
  age: number;
};

//2-Working with Objects

//Generics

function insertAtBeginning<T> (array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]

//Split calls on String
updatedArray[0].split("");
