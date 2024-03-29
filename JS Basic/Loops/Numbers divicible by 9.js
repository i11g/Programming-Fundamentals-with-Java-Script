function numbersDivisibleby9 (input) {

    let startIndex=Number(input[0]);
    let endIndex=Number(input[1]);
    let sum=0;
    let logOfdivisibleNumbers="";

    for(let i=startIndex; i<=endIndex; i++) 
    {

        let currentNumber=i;

        if(currentNumber%9==0) 
        {
            let divisibleNumbers=currentNumber;
            logOfdivisibleNumbers+=divisibleNumbers+"\n";
            sum+=divisibleNumbers;
        }
        
    }
    console.log(sum);
    console.log(logOfdivisibleNumbers);
}
numbersDivisibleby9(["100","200"])