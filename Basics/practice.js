//console.log("hello"); // simple statements

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

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 12354,
//     fullName: function() {
//         return this.firstName + " " + this.id;

//     }
// };
// console.log(person.fullName());

// STRINGS :--

// let text = "kiya mangukiya"; //string length
// let length = text.length;
// console.log(length);

// let text = "HELLO WORLD!"; //string charAt()
// let char = text.charAt(6);
// console.log(char);

// let text = "HELLO WORLD!"; //string charCodeAt()
// let char = text.charCodeAt(1);
// console.log(char);

// let text = "W3source"; //string at()
// let at = text.at(2);
// console.log(at);

// let text = "HELLO!" //property access[]
// let property = text[0];
// console.log(property);

// let text = "Laptop, Mobile, Tablet"; //string slice() *positive values
// let device = text.slice(0, 9);
// console.log(device);

// let text = "Laptop, Mobile"; //string slice() *Nagative values
// let device = text.slice(1, -5);
// console.log(device);

// let text = "Laptop, Mobile, Tablet"; //substring *positive values
// let device = text.substring(0, 9);
// console.log(device);

// let text = "Laptop, Mobile, Tablet"; //substring *Nagative values
// let device = text.substring(1, -5);
// console.log(device);

// let text = "Apple, Watermelon, Kiwi"; //substr()
// let fruits = text.substr(1,6);
// console.log(fruits);

// let text = "Kiya Mangukiya"; // string toUppercase()
// let txt = text.toUpperCase();
// console.log(txt);

// let text = "HETVI BHINGRADIYA"; //string toLowercase()
// let txt = text.toLowerCase();
// console.log(txt);

// let txt1 = "Hello"; //concat
// let txt2 = "World!";
// let txt3 = txt1.concat(" ", txt2);
// console.log(txt3); 

// let txt1 = "   HELLO WORLD!   "; //trim()
// let txt2 = txt1.trim();
// console.log(txt2);

// let txt1 = "   Hello!   "; //trimStart()
// let txt2 = txt1.trimStart(txt1);
// console.log(txt2);

// let txt1 = "   Hello!   "; //trimEnd()
// let txt2 = txt1.trimEnd(txt1);
// console.log(txt2);

// let number = "3"; //padStart()
// let padded = number.padStart(10, "0");
// console.log(padded);

// let number = "5"; //padEnd()
// let padded = number.padEnd(6, "x");
// console.log(padded);

// let text = "Hi Hetvi!"; // string repeat()
// let result = text.repeat(3);
// console.log(result);

// let text = "Heya Hetvii!"; // string replace()
// let newtxt = text.replace("Hetvii", "Kiya");
// console.log(newtxt);

// let text = "I love Cars. My Fav Car Is Porche.."; //string replaceAll()
// text = text.replaceAll("Cars", "cars");
// text = text.replaceAll("Fav", "favorite");
// console.log(text);

// let text = "Hello,kiya, mangukiya"; //string split()
// let str = text.split(",");
// console.log(str);

//string indexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.indexOf("locate");
// console.log(index);

//String lastIndexOf()
// let text = "Please locate where 'locate' occurs!";
// let index = text.lastIndexOf("locate");
// console.log(index);

//string search()
// let text = "Please locate where 'locate' occurs!";
// console.log(text.search('locate'));

//string match()
// let text = "The rain in SPAIN stays mainly in the plain";
// console.log(text.match('ain'));

//string matchAll()
// let txt = "The rain in SPAIN stays mainly in the plain";
// console.log(txt.matchAll('rain'));

// Adding number and strings:
// let a = 50
// let b = 40
// let c = "20"
// let result = a+b+c;
// console.log(result);

// NaN :
// let x = 20/"Apple";
// console.log(x);

// javascript EPSILON :
// let x = Number.EPSILON;
// console.log(x);

//javascript MAX_PROPERTY :
// let a = Number.MAX_VALUE;
// console.log(a);

//javascript MIN_PROPERTTY :
// let k = Number.MIN_VALUE;
// console.log(k);

//javascript MAX_SAFE_INTEGER :
// let p = Number.MAX_SAFE_INTEGER;
// console.log(p);

//javascript MIN_SAFE_INTEGER :
// let N = Number.MIN_SAFE_INTEGER;
// console.log(N);

//JavaScript POSITIVE_INFINITY / NAGATIVE_INFINITY :
// let c = Number.POSITIVE_INFINITY /* OR NAGATIVE_INFINITY */ ;
// console.log(c);

//JS Arrays
//Two ways to create array
const cars = ["BMW","Volvo","Mercedes"];
console.log(cars)
const fruits = new Array("Apple","kiwi","Peach","orange");
console.log(fruits)
const num =[1,2,3,4]
console.log(num)

//Accessing array elements
console.log(cars[2])
console.log(fruits[0])

//Changing array elements
console.log(cars[1]="Porsche")
console.log(cars)
console.log(fruits[2]="Berries")
console.log(fruits)

//Array Methods :
console.log("Array length:");
console.log(cars.length);
console.log(fruits.length);

console.log("CAR sort")
console.log(cars.sort());
console.log("Fruit sort")
console.log(fruits.sort());

console.log("toString:")
let c = cars.toString();
console.log(c, typeof c);
let n = num.toString();
console.log(n, typeof n);
console.log(fruits.toString());

console.log("At array:");
console.log(fruits.at(2));
let no = num.at(2);
console.log(no, typeof no);

console.log("Array join:");
console.log(cars.join(" * "), typeof cars); // It behaves just like tostring() soo we have used " * " as a separator between the elements

console.log("POP Method:");
console.log(fruits.pop()); // removes the last element
console.log(fruits);

console.log("PUSH Method:");
console.log(fruits.push("Mango")); // adds a new element at the end..
console.log(fruits, typeof fruits);

console.log("Shift Method:");
console.log(cars.shift()); //The shift() method removes the first array element and "shifts" all other elements to a lower index
console.log(cars, typeof cars);

console.log("Unshift Method:");
console.log(cars.unshift("Range-rover")); //The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
console.log(cars);

console.log("Delete:");
console.log(delete num[2]);
console.log(num);

console.log("Concat array:");
const arr1 = ["Hetvi"];
const arr2 = ["Patel"];
const arr3 = ["From SRKI"];
const person = arr1.concat(arr2, arr3);
console.log(person);

console.log("CopyWithIn");
const device = ["Laptop", "Mobile", "Tablat", "Ipad"];
console.log(device.copyWithin(2,0));

console.log("Reverse array:");
console.log(num.reverse());

console.log("splice:");
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);
//splice
let s2=[1012,22,23,99,55,34,29,100]
let deletedValues = s2.splice(2,2,88,77,66)
console.log(s2)
console.log(deletedValues)

//slice
console.log("Slice:");
console.log(s2.slice(3));

// Array search Methods:
let colors = ["Black","White","Blue","Purple","Blue","Pink"];
console.log(colors);

//indexof()
console.log("indexof:");
console.log(colors.indexOf("Purple"));

//lastindexOf()
console.log("lastIndexOf:");
console.log(colors.lastIndexOf("Blue"));

//includes()
console.log("Includes methods:");
console.log(colors.includes("Pink"));

//find
const number=[30, 40, 50, 60, 70];
console.log(number.find(myFunc))

function myFunc(val,index,array){
  
  return val>30
}

//findindexof
const number1=[10, 15, 20, 25, 30];
console.log(number1.findIndex(myifunc))

function myifunc(val,index,array){
    return val>15
}

//to reversed()/sorted()
console.log("toReversed:");
const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);
console.log("toSorted:");
const reversed1 = months.toSorted();
console.log(reversed1);

// Array Iteration Methods :--
// Map:
console.log("Map method:");
let arr = [14, 19, 24];
let a = arr.map((value, ) =>{
    console.log(value)
    return value + 1
})
console.log(a);

//Filter Method :
console.log("Filter Method:");
let a1 = [30, 32, 45, 50, 55, 60];
let a2 = a1.filter((a) =>{
    return a < 50
})
console.log(a2, a1);

//reduce
console.log("reduce:");
const numbers = [10,12,25,30];
let sum = numbers.reduce(myFunction);
console.log(sum);
function myFunction(total, value, index, array) {
  return total + value;
}

//for loop :
console.log("ForLoop:")
let nom=[2,4,6,8]
for(let i=0; i<nom.length; i++){
    console.log(nom[i])
}

//foreach
console.log("For each loop:")
nom.forEach((element) =>{
    console.log(element*element)
})

// Array keys :
console.log("Array key:")
const array1 = ["x","y","z"]
const iterator = array1.keys()
for(const key of iterator){
  console.log(key)
}

//Array entries :
console.log("Array entries:")
const iterator1 = array1.entries()
console.log(iterator1.next().value)
console.log(iterator1.next().value)
console.log(iterator1.next().value)

