
// let ar=[34,45,64,24,77,34];
// for(let i=0;i<ar.length;i++){
//     ar[i]=ar[i]*2;
// }

// console.log(ar);

// map 
// let ar=[34,45,64,24,77,34];
// // syntax of map 

// let result=ar.map(cur=>cur*2);

// console.log(result);


//filter
// let ar=[34,45,64,24,77,34];

// let even=ar.filter((cur)=>cur%2==0);//[ 34, 64, 24, 34 ]

// let double=even.map((cur)=>cur*2)
// console.log(double)

//reduce 
// let ar=[34,45,64,24,77,34];

// let sum=ar.reduce((acc,cur)=>acc+cur,0)
// console.log(sum)

// let ar=[34,45,64,24,77,34];

// calculate the even No . sum in the array 

// let sum=ar.filter((cur)=>cur%2==0).reduce((acc,cur)=>acc+cur,0);
// console.log(sum)


// print the sum of all element in the 2D array 
// let ar=[
// [23,21,67],
// [89,43,23],
// [90,80,10]
// ]
// let sum=ar.reduce((acc,cur)=>acc+cur.reduce((ac,cr)=>ac+cr,0),0);
// console.log(sum)
// console.log(ar[1][1])


// let cart=[
//     {
//         name:"laptop",
//         price:50000,
//     },
//     {
//         name:"Mouse",
//         price:5000,
//     },
//     {
//         name:"mobile",
//         price:20000,
//     }
// ]

// let sum=cart.filter((cur)=>cur.price>20000).reduce((acc,cur)=>acc+cur.price,0);
// console.log(sum)
// let name="arshpreet";
// let age=20;

// // console.log("My name is "+name+" and age is "+age)

// console.log(`My name is ${name} and age is ${age}`);