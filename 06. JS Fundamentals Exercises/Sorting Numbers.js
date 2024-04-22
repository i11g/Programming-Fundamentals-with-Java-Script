function sorting(array) {

    let sortedArray=array.sort((a,b)=>a-b); 
    
    let newArray=[]; 

    while(sortedArray.length>0) 
    {
        firstElement=sortedArray.shift();
        secondElement=sortedArray.pop();
        newArray.push(firstElement);

        if(secondElement!=undefined) {
            newArray.push(secondElement);
        }
    }
    
    return newArray;
   
}

console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));