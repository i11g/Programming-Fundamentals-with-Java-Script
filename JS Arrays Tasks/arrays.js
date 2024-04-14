function solve () {

    let array=[1,2,3,4,5]

    console.log(array);
    console.log(array[0]);

    let array2=[1,2,"string"]

    console.log(array2)

    //adding an element dinamically
    array[4]= 6;
    console.log(array);
    //creating an array 
    //using the array litteral
    let array3=["Jon","Petar",24, true]
    console.log(array3)
    //using empty array
    let myArray=[];
    myArray[0]=1;
    myArray[1]=3;
    myArray[2]=5;
    console.log(myArray)
    //ussing array constructor
    let myArray1=new Array("Sofia", "varna","plovdiv");
    console.log(myArray1)
    let firstElement=myArray[0];
    let lastElement=myArray[myArray.length-1];
    let undefined=console.log(myArray[5]);
    console.log(firstElement);
    console.log(lastElement);
    
}
solve ();