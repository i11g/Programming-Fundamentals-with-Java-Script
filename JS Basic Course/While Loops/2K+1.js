function twoKPlusone (input) 
{     
    let index=0;
    let numberK=input[index];
    index++
    let currentNumber=1;
    console.log(currentNumber);

    while(true) {
 
        currentNumber=currentNumber*2+1;
        
        if (currentNumber<=numberK) {
            console.log(currentNumber);
        }
        else {
            break;
        }
    }

}
twoKPlusone(["31"]);