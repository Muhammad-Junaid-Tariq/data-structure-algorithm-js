function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.greet = () => {
    console.log(this.firstName,this.lastName)
}

Person.prototype.sayHi = function(){
    console.log("Hi");
}

const john = new Person("John", "Doe");
john.__proto__.fuckDani = function(){
    console.log("Dani love")
}

john.greet();
console.log("John Proto",john.__proto__);
console.log("Person",Person.__proto__);