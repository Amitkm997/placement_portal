

// let var and const 

// const name="Amit";

// console.log(name);

// var a=90; //

// //declaration
// var a; 

// //initilization
// a=90

// in case of var we can redeclare the varible 
// var b=89;
// var b=90;

// console.log(b);

// in case of let we can redeclare the varible 
// let a=67;
// let a=90; //'a' has already been declared

// console.log(a);


// in case of let we can redeclare the varible 

// const a=3.14;
// const a=90;
// console.log(a)

// var a;
// a=90
// console.log(a)


// let a;
// a=90
// console.log(a)

// const a;
// a=89;
// console.log(a)

// const pi=3.14

// console.log(a)

// hoisting 
// var a;
// console.log(a); //ReferenceError: a is not defined


// console.log(b); //Cannot access 'b' before initialization
// let b;


//function

// a. how to declare function 
// b how to call funtions

// types of function 
// 1. normal funtion 
// 2. function expression 
// 3. arrow function (important)
// 4 Immidiatly invoke funtion expression (IIFE)

// 1. normal funtion 

// a. how to declare function 
// function greet(name,profession){  // parameter
//     console.log("Hi There! "+name +" I'm a "+profession);
// }

// // b how to call funtions // invoke 
// greet("Amit","Trainer"); // arguments


// 2. function expression 
// a. how to declare function 
// let greet=function(name){
//     console.log("Hi There!")
// }

// // // b how to call funtions // invoke 
// greet("amit");

// 3. arrow function (important)
// a. how to declare function
// let greet=()=>{
//     return "Hi there"
// }

// // // // b how to call funtions // invoke 
// let output=greet();
// console.log(output)

// let greet=()=>"Hi threre";

// let greet=name=>name;

// console.log(greet("Amit"));

// // 4 Immidiatly invoke funtion expression (IIFE)
// (
//     function(){
//         console.log('Hi there')
//     }
// )();