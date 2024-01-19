function sumOfVowels(input) {

    let text=input[0];
    let sum=0;

    for(let i=0; i<text.length; i++) 
    {
        // let ch=text[i];
        let ch=text.charAt(i)
         
         if (ch=="a") {

            sum+=1;
         }
         else if (ch=="e") {

            sum+=2;
         }
         else if (ch=="i") {

            sum+=3;
         }
         else if (ch=="o") {

            sum+=4;
         }
         else if (ch=="u") {

            sum+=5;
         }
    }
    console.log(sum);
}
sumOfVowels(["bamboo"])