function sum(number) {

    let sum=0; 
    while(number>0) {
        currentNumber=number%10;
        sum+=currentNumber;
        number=Math.floor(number/10);
    }
    console.log(sum);

}
sum(123458);