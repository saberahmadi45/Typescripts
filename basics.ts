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
let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true,
// };

//3- Mix (Objects and Array)
let people: Person[];

//Type inference

let course = "React - The complete Guide";

// course = 12323;

//Union Types

let address: string | number = "7449 E 48th Street";

address = 74145;

//Function & Types
function add(a: number, b: number): number | string {
  return a + b;
}

//Special Void Function Return

function printOutput(value: any) {
  console.log(value);
}
