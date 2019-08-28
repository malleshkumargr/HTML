//properties & methods
//firstName & lastName
function Person(data) {
    this.firstName = data.fName;
    this.lastName = data.lName;

    //instance method
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName;
    }
}

//static method
Person.staticMethod = function() {
    return 'this is a static method'
}

const p1 = new Person({fName: 'virat', lName:'kohli'});
console.log(p1.fullName());
console.log(Person.staticMethod());