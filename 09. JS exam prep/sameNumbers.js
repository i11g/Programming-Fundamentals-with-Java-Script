function sameNumbers(number) {

    let sum=0; 
    let firstDigit=number%10; 
    let isTheSame=true;
    while(number>0) {
        let currentNumber=number%10;
        sum+=currentNumber;
        number=Math.floor(number/10); 

        if(firstDigit!=currentNumber) {
            isTheSame=false;           
    
        }      

    }
    
    console.log(sum);
    console.log(isTheSame); 
        
    


}
sameNumbers(23222)