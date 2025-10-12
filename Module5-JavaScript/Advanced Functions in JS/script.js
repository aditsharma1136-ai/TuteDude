// Named Functions.

// function greet(){
//     console.log("Good Morning from named function");
// }
// greet()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Anonymous Functions./ Function Expression.

// let greet2 = function(){
//     console.log("Good Afternoon from Anonymous Functions / Function Expression");
// }
// greet2()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Function.

// let greet3 = () => {
//     console.log("Good Evening from Arrow Function");
// }
// greet3()

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const greet = (count) => {
//     console.log("Hello World !!!",count);
// }

// greet(2)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const square = (num) => {
//     return num * num
// }

// const square = (num) =>  num * num

// console.log(square(2))

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Callback Function.

// const calculate = (a,b,operation) => {
//     return operation(a ,b)
// }

// Anonymous Function - method 1
// const summation = calculate(2,3,function(n1,n2){
//     return n1+n2
// })
// console.log(summation);

// Named Function - method 2
// function sub (a,b){
//     return a-b
// }
// const subtraction = calculate(2,3,sub)
// console.log(subtraction);

// Arrow Function - method 3
// const mul = (a,b) => a*b
// const multiplication = calculate(2,3,mul)
// console.log(multiplication);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const arr = [2, 5, 6, 8, 9, 0, -1, -6, -4];

// method 1
// const printFirstNegativeNumber = (num) => num < 0

// method 2
// const printFirstNegativeNumber = (num) =>{
//     return num < 0
// }

// method 3
// const printFirstNegativeNumber = (num) =>{
// if (num<0){
//     return num
// }
// } 

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// const result = arr.find(printFirstNegativeNumber)
// const result = arr.findIndex(printFirstNegativeNumber)
// console.log(result);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// arr.forEach((num, index)=>{
//     console.log("Elements:",num," index", index); 
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------