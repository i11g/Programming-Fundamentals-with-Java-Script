function rotation(array,number) { 

   let rotations=number%array.length; 
   
   let rotatedArray=array.slice(rotations).concat(array.slice(0,rotations)); 

   let result=" ";

   rotatedArray.forEach(element => {
    
       result+=element+" ";
       
   });

   console.log(result);

}
rotation([51, 47, 32, 61, 21], 2 ) 

function modul() 
{
    let modul=1%5;
    console.log(modul);
}
modul();
