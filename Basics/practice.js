console.log("hello"); // simple statements

// VARIABLES :
// console.log("VARIABLES :");
// const accountId = 987456;
// let emailId = "hetvi@gmail.com";
// var password = "hetvi@123";
// let city = "surat";

// emailId = "kiya@gmail.com";
// password = "kiya123";
// city = "Pune";
// console.table([accountId, emailId, password, city]);

// ARITHMETIC OPERATORS :
// console.log("ARITHMETIC OPERATORS :");
// let a = 20;
// let b = 10;
// console.log("a =",a, "& b =",b);
// console.log("a + b =", a + b);
// console.log("a - b =", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);

// UNARY OPERATORS  :
// console.log("UNARY OPERATORS :");
// let p = 5;
// let q = 3;
// console.log("P =",p, "& Q =",q);
// console.log("P-- =", p--);
// console.log("P =",p);
// console.log("++q =", ++q);
// console.log("q =", q);

//  ASSIGNMENT OPERATORS :
// console.log("ASSIGNMENT OPERATORS:");
// let x = 5;
// let y = 7;
// x += 4;
// console.log("x =", x);
// x *= 4;
// console.log("y =", y);
// x %= 2;
// console.log("x =", x);
// y **= 3;
// console.log("y =", y);

// COMPARISON OPERATORS :
// console.log("COMPARISON OPERATORS :");
// console.log("a==b =" ,a==b);
// console.log("a!=b =" ,a!=b);
// console.log("a===b =" ,a===b);
// console.log("a!==b =", a!==b);
// console.log("a>b =",a>b);
// console.log("a>=b" ,a>=b);
// console.log("a<b =",a<b);
// console.log("a<=b =" ,a<=b);

// LOGICAL OPERATORS :
// console.log("LOGICAL OPERATORS :");
// let m = 8;
// let n = 2;
// console.log("cond1 && cond2 =", x < y && x===8);
// console.log("cond1 || cond2 =", x < y || x===8);
// console.log("!(8 < 2) = ", !(x < y));

// Datatypes in js - Number,String,Boolean,Null,Undefined,BigInt,Symbol,object :

// console.log("Number Datatype :");
// let age =20;
// let price=200.13;
// console.log(age);
// console.log(typeof age);

// console.log("String datatype :");
// let name="kiya mangukiya";
// console.log(name);
// console.log(typeof name);

// console.log("Boolean datatype :");
// let isFollow=true;
// let x=5;
// let y=5;
// let z=7;
// console.log(x==y);
// console.log(x==z);
// console.log(typeof isFollow);

// console.log("Undefined!");
// let x;
// console.log(typeof x);

// console.log("Bigint datatype:");
// let a=BigInt(12345.00);
// console.log(typeof a);

// console.log("Symbol datatype:");
// let x=Symbol("Hello!@");
// console.log(x);
// console.log(typeof x);

//  console.log("Object datatype:");
// const student = {
//     name:"Hetvi Bhingradiya",
//     age:21,
//     cgpa:9.99,
//     isPass:true
// };
//  student["cgpa"]=9.7;
//  console.log(student["cgpa"]);
//  console.log(typeof student["isPass"]);
// console.log(student);

// console.log("object datatype:");
// const product = {
//     title:"laptop",
//     rating: 5,
//     offer :20,
//     price:85000
// };
//  product["title"]="Mobile";
//  console.log(product["title"]);
// console.log(product);
// console.log(typeof product);

//Functions in js :-

//Adding two numbers:
// function add(a,b){
//     console.log(a+b);
// }
// add(10,10);

//Multiply two numbers
// function mul(a,b){
//     console.log(a*b);
//     return a,b;
// }
// mul(3,4);

//Divide two numbers
// function divide(a,b){
//     console.log(a/b);
//     return a,b;
// }
// divide(20,2);


//Objects in JS :-
// const person = {
//     Firstname:"Kiya",
//     Lastname:"Mangukiya",
//     age:20,
//     city:"surat",
// };
//  console.log(person);

//  const x=person; //Create a copy
//  x.city="Mumbai";
//  x.nationality = "English";
//  x.Lastname="Mangukiya";
//  delete x.Lastname;
//  console.log(x);

//  console.log(x.Firstname + " " +"is" + " " + x.age+ " " + "years old");

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 12354,
    fullName: function() {
        return this.firstName + " " + this.lastName;

    }
};
console.log(person.fullName());