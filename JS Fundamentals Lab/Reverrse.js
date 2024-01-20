function reverse (num, array) {

    let newArray=[]; 

    for(let i=0; i<num; i++) {

        newArray.push(array[i]) ;
    } 

   let reverseArray=""; 

    for(let i=newArray.length-1; i>=0; i-- ) {

        reverseArray+=(newArray[i]) + " ";
    }
    
    console.log(reverseArray);
} 

reverse(3, [10, 20, 30, 40, 50] )