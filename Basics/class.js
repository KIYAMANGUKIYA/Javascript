// JS CLASSESC:

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encryptpassword() {
//         return `${this.password}abc`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const coffee = new User("coffee", "coffee@gmail.com", "123")
//console.log(coffee);
// console.log(coffee.encryptpassword());
// console.log(coffee.changeUsername());

// User.prototype.encryptpassword = function() {
//     return `${this.password}abc`
// }

// const tea = new User("tea", "tea@gmail.com", "123")
// console.log(tea);
// console.log(tea.encryptpassword());
// console.log(tea.changeUsername());

//JS Inheritance :
// class User {
//     constructor(username) {
//         this.username = username;
//     }
//     logMe() {
//         console.log(`Username is ${this.username}`);
//     }
// }
// class Teacher extends User {
//     constructor(username, email, password) {
//         super(username)
//         this.email = email;
//         this.password = password;
//     }
//     addCourse() {
//         console.log(`A new course was added by ${this.username}`);
//     }
// }
// const chai = new Teacher("chai", "chai@gmail.com", "123");
// chai.addCourse();
// const masalachai = new User("masalachai");
// masalachai.logMe();
// console.log(chai instanceof User);

//staticprop
class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    createId(){
        return `123`
    }
}
const hetvi=new User("hetvi");
console.log(hetvi)
//console.log(hetvi.createId())

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone = new Teacher("iphone","iphone@google.com")
console.log(iphone.createId());