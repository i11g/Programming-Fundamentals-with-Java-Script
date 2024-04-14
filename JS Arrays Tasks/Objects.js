//Object creation 
//By Object literal
let person = {name:'Peter', age:20, height:183};

//Define an empry object and add properties later
let person1={};
//person.name1='Sofia';
//person.age1=30
person.adress='Tsar Osvoboditel';
person.work='engineer';

person['lastname']='Own';
console.log(person)
//Methods of Objects
//Functions within a JS are called methods
let person2={
    sayHello() {
        console.log('Hi, Sofia !');
    }
}
person2.sayHello();
let person3={age:20,name:'Peter',adress:'Sofia'};
person.sayHello=()=>console.log('Hi');
person.sayHello();

//Buid-in Method Library
let cat= 
{
    name:'tom', 
    age: 5,
    sayHello() {
        console.log('Hi, guys')
    }
};
console.log(Object.keys(cat));
console.log(Object.values(cat));
console.log(Object.entries(cat).toString());

