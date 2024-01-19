function salary(input) 
{
      let index=0;
      let numberOfOpenPages=Number(input[index]); 
      index++; 
      let salary=Number(input[index]);
      index++
      let isLostSalary=false;

      for (let i = 0; i < numberOfOpenPages; i++) 
      { 
             let currentPage=input[index]; 
             index++;
             if(currentPage==="Facebook") {
                salary-=150
             }
             else if(currentPage==="Instagram") {
                salary-=100;
             }
             else if(currentPage==="Reddit") {
                salary-=100;
             }
             if(salary<=0) {
                console.log("Lost salary");
                isLostSalary=true;
                break
             } 
      } if(!isLostSalary) {
        console.log(salary);
      }
     
       
}

salary(["10","350","Facebook","Instagram","Facebook","Reddit","Facebook"]);