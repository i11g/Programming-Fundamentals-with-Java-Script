//Includes
//Determines whether an array contains a certain element, returning true or false as appropriate
let array=['a','b','c']
console.log(isTrue=array.includes('a'));
//forEach() 
//Executes a provided function one for each array element
const items=['item1','item2','item3','item4'];
const copy1=[];
const copy2=[];
const copy3=[];
;

//With For Loop
for(let index=0; index<items.length; index++) {
    copy1.push(items[index]);
}
console.log(copy1)

//With forEach
items.forEach(item=>{
    copy2.push(item);
})
console.log(copy2)
items.forEach(item=>{
    copy3.push(item='item*2')});
console.log(copy3);
//Map
//Creates a new array with the results of calling a provided function on every element in the calling array
let num=[1,10,20];
let roots=num.map(function(num) {

    return Math.sqrt(num);
})
console.log(roots);
let mappedArray=num.map(element=>{return element*2});
console.log(mappedArray);
//Find
//Returns the first found value in the array,is and element in the array satisfies the provided testing function
let array1=[3,5,8,10,100];
let found =array1.find(element=>{return element>4});
console.log(found);
//Filter