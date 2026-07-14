
// Synchronous / blocking

// console.log("one");
// console.log('two');//db -> time taken
// console.log("three");
// console.log("Four");


//Asynchronous / non-blocking

// console.log("one");

// setTimeout(()=>{
//    console.log("two")
// },5000)


// console.log("three")


//callback

// function welcome(){
//     console.log("I am Welcome function!");
// }

// function greet(callback){
//     //statment
//     return callback();
// }

// greet(welcome)

// callback hell 
// getUser(userId ,function(user){
//     getOrders(user.id,function(order){
//         getOrders(order[0],function(details){
//             processOrder(details,function(result){
//                 console.log("order placed")
//             })
//         })
//     })
// })


// Promises  

// let promise=new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Data Fetched Successfully");
//     }else{
//         reject("Error")
//     }
// })

// promise.then((data)=>console.log(data))
// .catch((error)=>console.log(error))


// function fetchStudent(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve("Student Data");
//         },2000);
//     })
// }

// async function fetchData(){
//     try{
//         let data= await fetchStudent();
//         console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }

// fetchData()

// fetchStudent().then((result)=>console.log(result))