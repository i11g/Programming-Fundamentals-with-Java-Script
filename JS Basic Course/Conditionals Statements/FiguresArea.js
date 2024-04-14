function figuresArea(input) {
    
    let type=input[0];
    

    if(type=="square") {

        let side=Number(input[1]);

        let areaOfSquare=side*side;
    }
    else if(type=="rectangle") {
        let sideA=Number(input[1]);
        let sideB=Number(input[2]);

        let areaOfRectangle=side*sideB;
    }
    else if(type=="circle") {
        let radius=Number(input[2]);

        let areaOfCirle=2*Math.PI*radius
    }
    else {

        let sideA=Number(input[1]);
        let heigth=Number(input[2]);

        let areaOfTriangle =(sideA*heigth)/2;
        console.log(areaOfTriangle);

    }
}

figuresArea(["triangle","6","4"]);