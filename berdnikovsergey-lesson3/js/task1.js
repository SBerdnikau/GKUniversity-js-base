//Task #1

function isPrime( n ) {

    if( n === 1 ){
        return false; // не простое
    }

    var d = 2; //делитель

    while( d * d <= n ){

        if( n % d === 0 ){
            return false; //составное
        }

        d++;

    }

    return true; //простое

}

var i = 1;

while ( i <= 100 ){

     if( isPrime( i ) === true ){
         console.log( i );
     }

     i++;

}

// 2
// 3
// 5
// 7
// 11
// 13
// 17
// 19
// 23
// 29
// 31
// 37
// 41
// 43
// 47
// 53
// 59
// 61
// 67
// 71
// 73
// 79
// 83
// 89
// 97

