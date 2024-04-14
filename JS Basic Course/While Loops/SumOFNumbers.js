function sumOfNumbers(input) {
    
    let index=0;
    let number=Number(input[index]);
    index++;
    let sum=0;

    while (sum<number) 
    {

        let currentNumber=Number(input[index]);
        index++;
        sum+=currentNumber;       
        
    }
    if(sum>=number) {
        console.log(sum);
    }
}
sumOfNumbers(["5","2","2","3","5"])