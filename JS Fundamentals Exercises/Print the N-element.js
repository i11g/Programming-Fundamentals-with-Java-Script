function print(array,step) {
    let result=" ";

    for(let i=0; i<=array.length; i+=step) {
        
        ;
        result+=array[i] +" ";

    } 

    console.log(result);
}
print(['1', '2', '3', '4', '5'], 6  );