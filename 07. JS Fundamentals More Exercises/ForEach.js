function sample() {

    const array=['num1', 'num2', 'num3', 'num4']; 
    
    const copy=[];

    //for Loop 

   for (let index = 0; index < array.length; index++) {
        
      copy.push(array[index]);
        
   }
    //console.log(copy);

    array.forEach(num=>{copy.push(num);});
    
    console.log(copy);
        
}

sample();