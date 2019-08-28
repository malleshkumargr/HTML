//properties & methods
//firstName & lastName
class Person {
    constructor(data) {
        this.firstName = data.fName;
        this.lastName = data.lName;
    }

    //instance method
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    //static method
    static staticMethod() {
        return 'this is a static method';
    }
}


const p1 = new Person({fName: 'virat', lName: 'kohli'})
console.log(p1.fullName());
console.log(Person.staticMethod());