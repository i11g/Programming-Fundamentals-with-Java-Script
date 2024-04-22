function sub(string,startingindex,count) {
    let result; 
    //result=string.substring(startingindex,count+1);
    result=string.substring(startingindex,startingindex+count);
    console.log(result);

}
sub('SkipWord', 4, 7 )