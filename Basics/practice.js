console.log("hello"); // simple statements

// VARIABLES :
console.log("VARIABLES :");
const accountId = 987456;
let emailId = "hetvi@gmail.com";
var password = "hetvi@123";
let city = "surat";

emailId = "kiya@gmail.com";
password = "kiya123";
city = "Pune";
console.table([accountId, emailId, password, city]);

// ARITHMETIC OPERATORS :
console.log("ARITHMETIC OPERATORS :");
let a = 20;
let b = 10;
console.log("a =",a, "& b =",b);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// UNARY OPERATORS  :
console.log("UNARY OPERATORS :");
let p = 5;
let q = 3;
console.log("P =",p, "& Q =",q);
console.log("P-- =", p--);
console.log("P =",p);
console.log("++q =", ++q);
console.log("q =", q);

//  ASSIGNMENT OPERATORS :
console.log("ASSIGNMENT OPERATORS:");
let x = 5;
let y = 7;
x += 4;
console.log("x =", x);
x *= 4;
console.log("y =", y);
x %= 2;
console.log("x =", x);
y **= 3;
console.log("y =", y);

// COMPARISON OPERATORS :
console.log("COMPARISON OPERATORS :");
console.log("a==b =" ,a==b);
console.log("a!=b =" ,a!=b);
console.log("a===b =" ,a===b);
console.log("a!==b =", a!==b);
console.log("a>b =",a>b);
console.log("a>=b" ,a>=b);
console.log("a<b =",a<b);
console.log("a<=b =" ,a<=b);

// LOGICAL OPERATORS :
console.log("LOGICAL OPERATORS :");
let m = 8;
let n = 2;
console.log("cond1 && cond2 =", x < y && x===8);
console.log("cond1 || cond2 =", x < y || x===8);
console.log("!(8 < 2) = ", !(x < y));