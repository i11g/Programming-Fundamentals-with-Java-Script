function grade(number) {

   if(number<3) {
    console.log('Fail (2)')
   }
   else if(number>=3&&number<3.50) {
    
    console.log(`Poor (${number.toFixed(2)})`);

   }
   else if(number>=3.50&&number<4.50) {

    console.log(`Good (${number.toFixed(2)})`);
   }

   else if(number>=4.50&&number<5.50) {
    console.log(`Very good (${number.toFixed(2)})`);
   }
   else if (number>=5.50) {
    console.log(`Excellent (${number.toFixed(2)})`);
   }

}
grade(4.50
    );