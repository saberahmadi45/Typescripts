//Primitive (number, string, boolean, null, undefined)
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12;
var userName;
userName: "Ali";
var isInstructor;
isInstructor = true;
//More Complext types
//1-Working with Array
var hobbies;
hobbies = ["Sports", "Cooking"];
//2-Working with Objects
//Generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1); //[-1,1,2,3]
//Split calls on String
updatedArray[0].split("");
