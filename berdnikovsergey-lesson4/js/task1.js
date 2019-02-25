//Task #1

function convertNumToObject(num){

    var obj = {
        hundreds: null,
        tens: null,
        units: null
    };

    if( isNaN(num) ){

        console.log('Вы ввели не число!');

    }else if( num > 0 && num < 999 ){

        function convertNumToHundreds(num) {
            return Math.floor( num / 100 );
        }

        function convertNumToTens(num) {
            return Math.floor( (num / 10) % 10 );
        }

        function convertNumToUnits(num) {
            return num % 10;
        }

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



