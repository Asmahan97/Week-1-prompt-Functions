//***Write a function which greets the user***

//write function that takes a string
//return greeting + str

function greetUser(str){
  return ("Hello, " + str)
 }
 
 console.log(greetUser("test")); 

 //***Write a function which returns the type of the argument we pass in***

function checkType(arg) {
  return typeof(arg)
}

console.log(checkType("hey"));
console.log(checkType([11, 44, 777, 9999])); //Arrays are considered objects in JS so object is returned
console.log(checkType(true))
console.log(checkType({name: "Asmahan"}));;
console.log(checkType(null)); //null always returns obj when using typeof opertor
console.log(checkType(undefined)); 

//***Write a function which returns the length of the string we pass in***

function strLength(str) {
  return str.length
}

console.log(strLength("string test"))
