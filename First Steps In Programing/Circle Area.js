function circle (input) {

    let result; 

    let typeOfInput=typeof(input);

    if(typeOfInput==="number") 
    {
        result=Math.pow(input,2)*Math.PI;
        console.log(result.toFixed(2));
    }
    else 
    {
         console.log(`We can not calculate the circle area, because we received a ${typeOfInput}.`)
    }
}
circle('name')