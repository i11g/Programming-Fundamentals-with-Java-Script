//Like Dictionary in C#
//Indexed by string keys
//Holds a set of pairs[key->value]

let assocArray= {
    'one': 1,
    'two': 2,
    'three': 3    
}

let entries=Object.entries(assocArray);
console.log(entries);
console.log(entries[0]);
console.log(entries[1]);
console.log(entries[2]);
//Destructuring

let obj={
    name:'a',
    age:'b',
    year:'c'}

let {name,age,year}=obj;
console.log(name);
console.log(obj.name);
//FUnctions
//A function is a named subprogram designed to perform a particular task
function printStars(count) {
    console.log('*'.repeat(count));
}
printStars(20);
function printName(nameArr) {
    console.log(nameArr[0]+' '+nameArr[1]);    

}
printName(['John','Smith']) 

function fullName(first,last) {
    return first+' ' + last;
}
 const fullName1=fullName('Ivan',"Smith")
 console.log(fullName1);
 //let total=getPrice()*quantity*1.20;
// multiply(getMax(5,10)*10);
 //Arrow Functions
 //Useful in functional programming
 let increment=x=>x+1;
 console.log(increment(10));
 let increment1=function(x) {
    return x+1;
 }
 console.log(increment1(20));
 let sum=(a,b)=>a+b;
 result=sum(5,6);
 console.log(result);
 //Higher-Order Functions
 //Can take other functions as arguments
 //Can return a function
 const num=[1,3,6,8,10];
 const numSqrt=num.map(num=>num*num);
 console.log(numSqrt);
 
 function greaterThan(n) 
 {
    return m => m > n;
 }
 let result=greaterThan(20);

 console.log(result(11));
 
