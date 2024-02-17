function fruit(fruit,weigth,price) {

    let pay=((weigth*price)/1000).toFixed(2);
    let kilograms=(weigth/1000).toFixed(2);
    console.log(`I need ${pay} to buy ${kilograms} kilograms ${fruit}.`) 
    

}
fruit('apple',1563,2.35)
