function sumOfNumbers(input) 
{

    let num=input[0];

    //let text=String(input[0]);

    //let text=input[0]+" ";
    let text=input[0].toString();
    let sum=0;

    for(let i=0; i<text.length; i++) 
    {
        let currentNumber=Number(text.charAt(i));

        sum+=currentNumber;
        
    }
    console.log(`The sum of all numbers is ${sum}`);
}
sumOfNumbers(["467"]);