function array() {

    let array=[3,6,8,9,10] ;

    let [a, b, ...newarray]=array;

    console.log(a);
    console.log(b);
    console.log(newarray)
}
array();