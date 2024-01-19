function accountBallance (input) {

    let index=0;
    let command=input[index];

    let total=0;
    
    while(command!="NoMoreMoney") 
    {
          let currentDeposit=Number(input[index]);
          total+=currentDeposit;
          console.log(`Inrcease: ${currentDeposit}`) 
          
          index++;
          command=input[index];
    }
    if(command=="NoMoreMoney") {
        console.log(`Total ${total}`);
    }

}
accountBallance(["5.51","69.42","100","NoMoreMoney"]);