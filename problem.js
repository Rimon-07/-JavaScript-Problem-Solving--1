 
 // 1. What will be the output of the following code and why?

function scopeTest() {
    if (true) {
      var varVariable = "I am var";
      let letVariable = "I am let";
      const constVariable = "I am const";
    }
    console.log(varVariable);        //output  i am var
    // console.log(letVariable);      //ReferenceError
    // console.log(constVariable);   //ReferenceError
}
  
  scopeTest();

//why 
//   console.log(varVariable);   "I am var" because var  is function-scoped and accessible  
//  console.log(letVariable);     a ReferenceError because let  is block-scoped and not accessible  
//  console.log(constVariable);   a ReferenceError because const  is block-scoped and not accessible  


//question 2 

function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
  }
  
  console.log(greet("Alice")); // "Hello, Alice!"
  console.log(greet("Bob", "Good morning")); // "Good morning, Bob!"
  

  //question 3 

  let sum = (function() {
    return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
    };
    })
    ();

    console.log(sum(1, 2, 3)); // 6
    console.log(sum(10, 20, 30, 40)); // 100
    console.log(sum(5)); // 5
 
//  question 4

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let mergedArray = [...array1, ...array2, ...array3];

console.log(mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//question 5 

let name = "John";
let age = 30;

let person = {
  name,
  age,
  greet() {
    return `Hello, my name is  ${this.name}  and I am   ${this.age} years old `;
  }
};

console.log(person.name); // John
console.log(person.age); // 30
console.log(person.greet()); // Hello, my name is John and I am 30 years old.

 
//question 6

let fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
};


//question 7 
{
    const name = "Alice";
    const age = 25;
    
    const message = `My name is ${name} and I am ${age} years old.`;
    console.log(message); // "My name is Alice and I am 25 years old."
};

//question 8 

const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  
  for (const student of students) {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
  };
  

  // question 9 

  const nestedArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (const innerArray of nestedArrays) {
    let sum = 0;
    for (const num of innerArray) {
      sum =+ num;
    }
    console.log(`Sum of [${innerArray}] is ${sum}`);
  };

  //question 10 
  const a = 5;
  const b = 10;

  const result = `The sum of ${a} and ${b} is ${a + b}.`;
  console.log(result); // "The sum of 5 and 10 is 15."

  