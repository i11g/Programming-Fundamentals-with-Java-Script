function evenOdd(array) {
    let sumOdd=0;
    let sumEven=0;
  
   for (let i=0; i<array.length; i++) {
      array[i]=Number(array[i]);
    if(array[i]%2===0) {
        sumEven+=array[i];
    }
    else if(array[i]%2!==0) {
        sumOdd+=array[i];
    }     
    
   }

   difference=sumEven-sumOdd;
   console.log(difference);
}
evenOdd([1, 2, 3, 4, 5, 6] )