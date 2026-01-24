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
    // let sum=0
    // for (let i=1; i<=5;i++){
    //     sum=sum+i;
    // }
    // console.log(sum);

    // //while loop not execute if condition is false
    // let i=10;
    // while(i<=5){
    //     console.log("i=", i);
    //     i++;
    // }

    

    // //do while execute atleast ones
    // let count=10;
    // do{
    //     console.log(count);
    //     count++;
    // }while(count<=5);
    

    // //for-of

    // let str="abcd";
    // for(let newStr of str){
    //     console.log(newStr);
    // }

    // //for-in 

    // const student ={
    //     fullName:"abcd",
    //     age:18,
    // };

    // for(let key in student){
    //     console.log("key = ", key ,"value=",student[key]);
    // }



    //print all even numbers between 1-100

    
    // for(let i=1;i<=100;i++){
    //     if(i%2==0){
    //         console.log(i);
           
    //     }
    // }

    // let theNumber=251107;
    // let inputNumber=prompt("Enter a number");

    // if(theNumber==inputNumber){
    //     console.log("Number Matched");
    // }else{
    //     console.log("Number not matched");
    // }



    //String
    // let str=" Java Script";
    // console.log(str);
    // console.log(str.length);

    // console.log(typeof str);

    // console.log(str.toUpperCase());
    // console.log(str.toLowerCase());
    // console.log(str.trim());
    // console.log(str.charAt(1)); //0= , 1=J ....
    // console.log(str.slice(1, 5));


    // str1="java";
    // str2="script";

    // console.log(str1.concat(str2));

    // console.log(str2.replace("s","S"));


    // let userInput = prompt("Enter your full name");
    // let trimmedName = userInput.trim(); 
    // let userName = `@${trimmedName}${trimmedName.length}`;

    // console.log(userName);


    //array in js

    // let marks=[23,25,67,99,100];
    // console.log(marks);
    // console.log(typeof marks);

    // console.log(marks[0]);
    // console.log(marks[1]);

    // marks[0]=99;
    // console.log(marks);


    //iterating over the array

    // for(let idx=0;idx<marks.length;idx++){
    //     console.log(marks[idx]);
    // }

    //for of
    // let i;
    // for (i of marks){
    //     console.log(i);

    // }

    // let marks=[85,97,44,37,76,60];
    // let sum=0;
    // for(let i of marks){
    //     sum=sum+i;
    // }
    // console.log(sum);
    // let avg=sum/marks.length;
    // console.log(avg);


//     let prices=[250,645,300,900,50];
//     // let i=0
//     // for(let val of prices){
//     //     console.log(`Prices before applying offer of ${i} - ${val}`);
        
//     //     let offer=val/10;
//     //     prices[i]=prices[i]-offer;
//     //     console.log(`Prices after applying offer of ${i} - ${prices[i]}`);
//     //     i++;

//     // }
// console.log(`Before offer ${prices}`);
// let i=0
//     for( i =0;i<prices.length;i++){
       
        
//         let offer=prices[i]/10;
//         prices[i]=prices[i]-offer;

//     }
//             console.log(`after offer ${prices}`);



// let prices=[250,645,300,900,50];

// for (let i=0;i<prices.length;i++){
//     let offer=prices[i]/10;
//     prices[i]-=offer;
// }
// console.log(prices);

//array methods

// let marks=[20,50,30,40];

// console.log(marks);

// marks.push(500);
// marks.push(800);

// console.log(marks);

// let deletedMark=marks.pop();
// console.log(`Deleted mark is ${deletedMark}`);
// console.log(marks);


// console.log(marks);
// console.log(marks.toString());


// let class1=["abc", "xyz"];
// let class2=["pqr", "olp"];

// class1.concat(class2);
// console.log(class1.concat(class2));



// class1.unshift("lbg", "ght"); //add to starting position
// console.log(class1)
// class1.shift();
// console.log(class1);


// console.log(class1.slice(1,2));

// class1.splice(0,3,"pqe" );

// console.log(class1);



// let companies=["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
// console.log(companies);

// companies.shift();

// console.log(companies);


// companies.splice(1,1,"ola");
// console.log(companies);

// companies.push("amazon");

// console.log(companies);



//learning Functions

//function without parameters
// function myFunction(){
//     console.log("Hello World");
// }
// myFunction();


// //function with parameters
// function sum(num1,num2){
//     let add=num1+num2;
//     console.log(add);
// }
// sum(5,5);

// const arrowSum= (num1, num2) =>{
//     return num1+num2;
// }



// const arrowMul=(num1, num2)=>{
//     return num1*num2;
// }

// function findVowel(str) {
//     let count = 0;
//     for (let val of str) {
//         if (
//             val === 'a' ||
//             val === 'e' ||
//             val === 'i' ||
//             val === 'o' ||
//             val === 'u'
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(findVowel("aeiou"));



// const arrowFindVowel = (str) =>{
//     let count = 0;
//     for (let val of str) {
//         if (
//             val === 'a' ||
//             val === 'e' ||
//             val === 'i' ||
//             val === 'o' ||
//             val === 'u'
//         ) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(arrowFindVowel("aei"));




// let arr=[1,2,3,4,5];
// arr.forEach((val) => {
//     console.log(val);
// });



// let arrElement=[2,4,5,7,3];

// let calculate=(val) =>{
//     console.log(val*val);

// };

// arrElement.forEach(calculate);



let colors=["red", "black", "white"];

let newArray=colors.map((val)=>{
    return colors;

});

console.log(newArray);