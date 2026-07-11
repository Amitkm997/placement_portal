
// CRUD -> C-create, R-Read , U-Update , D-Delete
// let ar=[23,45,78,12,"amit",true]; // create

//access 
// console.log(ar[2]);

//update
// ar[2]=50;


// array methods

// ar.push(90); // insert the element at the end
// ar.pop(); // removes the element from the end
// ar.shift();// removes the element from the start
// ar.unshift(12)// insert the element at the start
// console.log(ar);


// let ar=[23,45,78,12,"amit",true]; 
// console.log(ar.length)

// let marks=[34,12,65,76,34,76,34];

// for(let i=0;i<marks.length;i++){
//     // marks[i]=marks[i]*2;
//     // marks[i] *= 2;
// }

// console.log(marks);

// Print the sum of elements in the array
// let marks=[34,12,65,76,34,76,34];

// let sum=1;

// for(let i=0;i<marks.length;i++){
//     sum *= marks[i];
// }

// console.log(sum)


// Object 

// creating an object 

// let obj={
//     name:"Arshpreet", // pair/entry
//     profession:"Student",
//     marks:[76,89,12,45,78],
//     isStudent:true
// }

// console.log(Object.keys(obj)); //[ 'name', 'profession', 'marks', 'isStudent' ]
// console.log(Object.values(obj)); //[ 'Arshpreet', 'Student', 34, true ]
// console.log(Object.entries(obj)); // [[ 'name', 'Arshpreet' ],[ 'profession', 'Student' ],[ 'marks', 34 ],[ 'isStudent', true ]]

// console.log(obj.name)

// update value 
// obj.name="parmeet Kaur";
// obj.age=20;
// console.log(obj)


// console.log(obj.name)

// console.log(typeof(obj.name))



// let obj={
//     name:"Arshpreet", // pair/entry
//     profession:"Student",
//     marks:[76,89,12,45,78],
//     isStudent:true,
//     address:{
//         city:"Noida",
//         state:"U.P.",
//         pinCode:202099
//     }
// }

//how to access 12
// console.log(obj.address.state)

// console.log(obj.marks[2])

let Student=[
    {
        name:"Arshpreet",
        state:"U.P."
    },
    {
        name:"Lovepreet",
        state:"Delhi"
    },
    {
        name:"parmeet",
        state:"U.P."
    },
    {
        name:"Tanvi",
        state:"Delhi"
    }
]

for(let i=0;i<Student.length;i++){
    console.log(Student[i].name)
}



