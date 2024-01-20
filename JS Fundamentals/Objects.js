// Contains values accessed by string keys 
// - Data values are called properties
// - Function values are called methods
//Definition 
function obj () {
let human = {name:'Peter', age:20, height: 191}; 
console.log(human);
//define un empty object 

let person= {};
person.name='Petar';
person.age=20;
person.height=190;
person['haircolor']='black';
person.Hello = () => console.log ('Hi, buddy');
console.log(person)

person.Hello();

}
obj();