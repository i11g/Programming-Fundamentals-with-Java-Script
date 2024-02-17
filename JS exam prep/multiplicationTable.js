function multiTable(number) {
  
    for (let index=1; index<=10; index+=1) {
        let multi=number*index;
        console.log(`${number}X${index} = ${multi}`)
    }
}
multiTable(8)