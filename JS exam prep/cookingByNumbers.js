function cooking(number, oper1, oper2, oper3, oper4, oper5) {
    let num=parseInt(number);
    let result=0;

    if(oper1==="chop") {
        result=num/2;
        console.log(result);
    }
    else if(oper1==="dice") {
        result=Math.sqrt(num) ;
        console.log(result);
    }
    else if(oper1==="spice") {
        result=num+1 ;
        console.log(result);
    }
    else if(oper1==="bake") {
        result=(num*3) ;
        console.log(result);
    }
    else if(oper1==="fillet") {
        result=(num-num*0.2) ;
        console.log(result);
    }
    
    if(oper2==="chop") {
        result=result/2;
        console.log(result);
    }
    else if(oper2==="dice") {
        result=Math.sqrt(result) ;
        console.log(result);
    }
    else if(oper2==="spice") {
        result=result+1 ;
        console.log(result);
    }
    else if(oper2==="bake") {
        result=(result*3) ;
        console.log(result);
    }
    else if(oper2==="fillet") {
        result=(result-result*0.2) ;
        console.log(result);
    }
    if(oper3==="chop") {
        result=result/2;
        console.log(result);
    }
   else if(oper3==="dice") {
        result=Math.sqrt(result) ;
        console.log(result);
    }
    else if(oper3==="spice") {
        result=result+1 ;
        console.log(result);
    }
    else if(oper3==="bake") {
        result=(result*3) ;
        console.log(result);
    }
    else if(oper3==="fillet") {
        result=(result-result*0.2) ;
        console.log(result);
    }
    if(oper4==="chop") {
        result=result/2;
        console.log(result);
    }
    else if(oper4==="dice") {
        result=Math.sqrt(result) ;
        console.log(result);
    }
    else if(oper4==="spice") {
        result=result+1 ;
        console.log(result);
    }
    else if(oper4==="bake") {
        result=(result*3) ;
        console.log(result);
    }
    else if(oper4==="fillet") {
        result=(result-result*0.2) ;
        console.log(result);
    }
    if(oper5==="chop") {
        result=result/2;
        console.log(result);
    }
    else if(oper5=="dice") {
        result=Math.sqrt(result) ;
        console.log(result);
    }
    else if(oper5==="spice") {
        result=result+1 ;
        console.log(result);
    }
    else if(oper5==="bake") {
        result=(result*3) ;
        console.log(result);
    }
    else if(oper5==="fillet") {
        result=(result-result*0.2) ;
        console.log(result);
    }
    
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet' )