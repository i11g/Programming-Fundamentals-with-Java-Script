//Objects in JS
//Contains values accessed by string keys
//  - Data values are called properties
//  - Function values are called methods
// Add or remove properties dynamically 

//use literal
let person = {name: 'Peter', age: 20, height: 183} ;

//use empty object 

let person1 = {} ;
person.name='Peter';
person.age=20;
person.height=190;
person.hairColor='black';
person['lastName'] ='ivanov'; 

//Functions within a JavaScript are called methods
//Methods can be define using several syntaxes

// with : 
let person ={
    sayHello:function() {
        console.log('Hi guys')
    }
}
//() 
let person={
    sayHello1() {
        console.log('Hi guys')
    } 
}

// add a method to an already defined object 
function car() {
let car={model:'Porshe', color:'green', year:'2014'} ;
car.tires=()=>console.log('four tires');
car.tires();
}
car();
