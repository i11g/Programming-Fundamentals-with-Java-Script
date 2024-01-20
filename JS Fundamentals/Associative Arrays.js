//Associative Arrays 
//Indexed by string keys
//Hold a set of pairs [key->value]
//  - the key is a string;
//  - the value can be of any type  
// Associative array is an object and it can be declared dinamically

let assocArr= {

    'one': 1,
    'two': 2,
    'three': 3,
    ['four']: 6
};

assocArr['four'] =4;
assocArr.five=5
console.log(assocArr); 
//for in loop is used to iterate through the keys

let assocA={}; 
assocA['one']=1;
assocA['two']=2;
assocA['three']=3;

for (let key in assocA){
  
    console.log(key + "=" + assocA[key]);

}

let isFound=assocA.hasOwnProperty('four');
console.log(isFound); 

let entries=Object.entries(assocA);

console.log(entries);

console.log(entries[0]);
console.log(entries[1]);
console.log(entries[2]);
    

