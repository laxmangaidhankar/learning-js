/*
console.log("Hello World");


let myAge = 18;
console.log(`My age is ${myAge}`);
console.log(typeof myAge);


let myName="Laxman Gaidhankar";
console.log(`My name is ${myName}`);
console.log(typeof myName);


let undefinedValue;
console.log(typeof undefineValue);


let nullValue=null;
console.log(typeof nullValue);


let booleanValue=true;
console.log(typeof booleanValue);


console.log("Non-Premitive Data Types");

const student={
    studName:"Laxman Gaidhankar",
    studRollNo:22501,
    studBranch:"ENTC",
    studAge:18,
};


console.log(student);


console.log(student["studRollNo"]);

console.log(student.studAge);


*/



//Operators is js
/*
let num1=10;
let num2=20;

console.log(`Addition = ${num1+num2}`);

console.log(`Substraction = ${num1-num2}`);

console.log(`Multiplication = ${num1*num2}`);

console.log(`Division = ${num1/num2}`);

console.log(`Modulus = ${num1%num2}`);

console.log(`Exponensial = ${num1**num2}`);

console.log(`Increment = ${num1++}`);

console.log(`Decrement = ${num1--}`);


*/

//Assignment Operators

// let a=10;
// let b=a;
// console.log(b);
// console.log(`a+=b is ${a+=b}`);
// console.log(`a-=b is ${a-=b}`);
// console.log(`a*=b is ${a*=b}`);
// console.log(`a/=b is ${a/=b}`);
// console.log(`a%=b is ${a%=b}`);
// console.log(`a**=b is ${a**=b}`);



//Comparision Operators in js

// let num1 = 10;
// let num2 = 10;

// console.log(`num1==num2 ${num1==num2}`);
// console.log(`num1!=num2 ${num1!=num2}`);
// console.log(`num1!==num2 ${num1!==num2}`);
// console.log(`num1===num2 ${num1===num2}`);
// console.log(`num1>num2 ${num1>num2}`);
// console.log(`num1>=num2 ${num1>=num2}`);
// console.log(`num1<num2 ${num1<num2}`);
// console.log(`num1<=num2 ${num1<=num2}`);


// let cond1=5>10;
// let cond2=50>10;

// console.log(`Logical AND ${cond1} ${cond2} = ${cond1 && cond2}`);
// console.log(`Logical OR ${cond1} ${cond2} = ${cond1 || cond2}`);
// console.log(`Logical NOT ${cond1} = ${!cond1}`);



// let age=25;
// console.log(`Current age = ${age}`);
// //if statement
// if(age>18){
//     console.log(`Greater than 18`);
// }

// //if-else statement
// age=45;
// console.log(`Current age = ${age}`);

// if(age>=65){
//     console.log(`Greater than 65`);
// } else{
//     console.log(`age is less than 65`);
// }


// //if-else-if statemnt
// let num1=18, num2=12, num3=8;
// if(num1>num2 && num1>num3){
//     console.log(`${num1} is greater than ${num2} and ${num3}`);
// }else if(num2>num1 && num2>num3){
//     console.log(`${num2} is greater than ${num1} and ${num3}`);
// }else{
//     console.log(`${num3} is greater than ${num1} and ${num2}`);
// }



// //Ternary operator 
// let age = 16;
// console.log(age >= 18 ? "Eligible to vote" : "Not eligible to vote");



// let choice="a";

// switch(choice){
//     case 'a':
//         console.log("a");
//         break;
//     case 'b':
//         console.log("b");
//         break;
//     case 'c':
//         console.log("c");
//         break;

//     default:
//         console.log("not available");
// }



// let num1=prompt("Enter a number");

// if(num1%5==0){
//     console.log(`  ${num1} number is divisible by 5`);

// }else{
//     console.log(`${num1} given number is not divisible by 5`);
// }


    //for loop 
    let sum=0
    for (let i=1; i<=5;i++){
        sum=sum+i;
    }
    console.log(sum);

    //while loop not execute if condition is false
    let i=10;
    while(i<=5){
        console.log("i=", i);
        i++;
    }

    

    //do while execute atleast ones
    let count=10;
    do{
        console.log(count);
        count++;
    }while(count<=5);
    

