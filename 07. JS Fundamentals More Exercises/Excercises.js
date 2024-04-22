function start() {

    let array=[1,2,3,4,5,"String"]; 

    

    //elements in JS can be added dinamiclly

    array[6]=8;
    console.log(array);

    let array2=[];

   
    array2[0]=1;
    array2[1]=3;
    array2[2]=5;

    console.log(array2);
    console.log(array2[array2.length-1]);
}

start();