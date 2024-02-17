function printandSum(num1,num2) {
    let sum=0;
    let message='';
    for (let index = num1; index <=num2; index++) {
        message+=`${index} `;
        sum+=index;
        
    }
    console.log(message.trimEnd());
    console.log(`Sum:${sum}`);       
      
    
}
printandSum(0,26)