function names(array) {

    let sortedArray=array.sort((a,b) => a.localeCompare(b)); 
    
    for(let i=1; i<=sortedArray.length; i++) {

        console.log (`${i}. ${sortedArray[i-1]}`);
    }


}
names(["John", "Bob", "Christina", "Ema"]);