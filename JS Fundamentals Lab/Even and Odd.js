function solve(arr) {

    let sumEven=0;
    let sumOdd=0; 
    let difference=0;

    for(let i=0; i<arr.length; i++) 
    {
        let currentNumber=Number(arr[i]) ;
        
        if(currentNumber%2===0) {
            sumEven+=currentNumber;
        }
        else if(currentNumber%2!=0) {
            sumOdd+=currentNumber
        }
    }
    difference=(sumEven-sumOdd);
    console.log(difference);
    
}
solve([1,2,3,4,5,6] )