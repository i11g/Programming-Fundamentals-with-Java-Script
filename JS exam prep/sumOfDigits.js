function sumOfDigits(number) {

    let numberAsString=number.toString();
    let totalSum=0;
    
    for (let index=0; index<numberAsString.length; index++) {
        let currentNumber=numberAsString[index];
        totalSum+=parseInt(currentNumber);

    }
    console.log(totalSum);
    

}
sumOfDigits(123456)