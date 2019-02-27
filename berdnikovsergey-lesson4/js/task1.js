//Task #1

function convertNumToHundreds(value) {
    return Math.floor( value / 100 );
}

function convertNumToTens(value) {
    return Math.floor( (value / 10) % 10 );
}

function convertNumToUnits(value) {
    return value % 10;
}

function convertNumToObject(num){

    var obj = {
        hundreds: null,
        tens: null,
        units: null
    };

    if( isNaN(num) ){

        console.log('Вы ввели не число!');

    }else if( num > 0 && num < 999 ){

        obj.hundreds = convertNumToHundreds(num);
        obj.tens = convertNumToTens(num);
        obj.units = convertNumToUnits(num);

        return console.log(obj);

    }else{

        console.log('Число не в диапазоне от 0 до 999');
        return console.log(obj);
    }


}

var num = +prompt('Введите число от 0 до 999');

convertNumToObject(num);



