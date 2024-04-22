function oddandeven(number) {

    let sumOdd=0;
    let sumEven=0; 

    while(number>0) {
        let currentNumber=number%10;
        number=Math.floor(number/10);
        if(currentNumber%2==0) {
            sumOdd+=currentNumber;
        }
        else if(currentNumber%2!=0) {
            sumEven+=currentNumber;
        }
    }

    console.log(sumEven)
    console.log(sumOdd)

}
oddandeven(1000435);