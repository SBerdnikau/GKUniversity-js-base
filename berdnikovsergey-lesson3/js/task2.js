//Task #2

var goods = [
    ['Майка', 200, 2],
    ['Шорты', 130, 1],
    ['Кепка', 50, 2],
    ['Носки', 12, 4]
];

var i = 0;
var sum = 0;
var result = [];

while( i < goods.length ){
    result.push( goods[i][1] * goods[i][2] );
    sum +=  result[i];
    i++;
}

console.log( result );

//[ 400, 130, 100, 48 ]

console.log( sum );

//678




