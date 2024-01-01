function rounding (num,precision) {
   
    if(precision<15) 
   {
    let number=num.toFixed(precision);
       
      console.log(parseFloat(number));
   } 
      
    else if(precision>15) 
    {
        number=num.toFixed(15)
        console.log(parseFloat(number));
    }

}
rounding(10.5, 3 );