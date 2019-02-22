//Task #3

var goods = [
    ['Майка', 200, 2],
    ['Шорты', 130, 1],
    ['Кепка', 50, 2],
    ['Носки', 12, 4]
];

function cost() {

    var i = 0;

    var result = [];

    while( i < goods.length ){
        result.push( goods[i][1] * goods[i][2] ) ;
        i++;
    }

    return result;

}

function countBasketPrice() {

    var i = 0;

    var sum = 0;

    var bufer = cost();

    while ( i < bufer.length ){
        sum +=  bufer[i];
        i++;
    }

    return sum;

}

console.log( cost() );

//[ 400, 130, 100, 48 ]

console.log( countBasketPrice() );

// 678