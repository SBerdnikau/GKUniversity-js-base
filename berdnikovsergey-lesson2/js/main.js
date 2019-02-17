
//1. Почему код дает именно такие результаты?

var a = 1 , b = 1 , c, d;
c = ++a; alert(c); // 2  - возврвщается значеие уже инкрементируемое при префиксктной форме
d = b++; alert(d); // 1 -  возврвщается текущее значеие при постфикстной форме
c = ( 2 + ++a); alert(c); // 5 - поскольку мы инкрементиковали 'a(2)' в первом выражении,
//то второй префикстный инкремент даст нам в инкременте 'a(3)' и сумма '2 + a(3) = 5'
d = ( 2 + b++); alert(d); // 4 - поскольку мы инкрементировали 'b++(2)' то сумма 2 + 'b++(2) = 4',
//постфикстный инкремент в текущем выражении не участвует
alert(a); // 3 - переменая 'a' инкрементировалась 3 раза, возвратил текущее число инкрементов при префикстной форме
alert(b); // 3 - переменая 'b' инкрементировалась 3 раза, но возвратил на 1 инкремент меньше, постфикстная форма


//2. Чему будет равен x ?

 var a = 2 ;
 var x = 1 + (a *= 2 ); // x = 1 + ( a = 2 * 2) = 5

/*
3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные
значения. Затем написать скрипт, который работает по следующему принципу:
o если a и b положительные, вывести их разность;
o если а и b отрицательные, вывести их произведение;
o если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.

 */

var result = function calc( a, b ) {
       if ( (a >= 0) && (b >= 0) )
           return a - b;
       else if( (a < 0) && (b < 0) )
           return a * b;
       else
           return a + b;
}
alert( result( -5, 1 ) );

/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch
организовать вывод чисел от a до 15.
 */

var a = prompt('Введите число: ');
if (a > 0 && a < 15) {
    switch (a) {
        case '0' :
            console.log(0);
        case '1' :
            console.log(1);
        case '2' :
            console.log(2);
        case '3' :
            console.log(3);
        case '4' :
            console.log(4);
        case '5' :
            console.log(5);
        case '6' :
            console.log(6);
        case '7' :
            console.log(7);
        case '8' :
            console.log(8);
        case '9' :
            console.log(9);
        case '10' :
            console.log(10);
        case '11' :
            console.log(11);
        case '12' :
            console.log(12);
        case '13' :
            console.log(13);
        case '14' :
            console.log(14);
        case '15' :
            console.log(15);
    }
}else console.log('Значение не в диавазоне');

/*
5. Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return .
*/

var a, b;

a = +prompt('Введите число а: ');
b = +prompt('Введите число b: ');

if(!isNaN(a) && !isNaN(b)){
    function summa(a, b) {
        return a + b;
    }

    function subtraction(a, b) {
        return a - b;
    }

    function devision(a, b) {
        if (b === 0) {
            alert('Деление на нуль, запрещено!!!');
        } else {
            return a / b;
        }
    }

    function multiply(a, b) {
        return a * b;
    }

    var summ = summa(a,b);
    var subtr = subtraction(a,b);
    var dev = devision(a,b);
    var mult =  multiply(a,b);


    alert( a + ' + ' + b + ' = ' + summ  +
        '\n' +  a + ' - ' + b + ' = ' + subtr +
        '\n' +  a + ' * ' + b + ' = ' + mult  +
        '\n' +  a + ' / ' + b + ' = ' + dev);


}else alert('Введите число!! Ошибка ввода');

/*
6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 — значения аргументов, operation — строка с названием операции. В © geekbrains.ru 11
зависимости от переданного значения выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (применить switch ).
*/

var a,b,operation;
a =  +prompt('Введите число А: ');
b =  +prompt('Введите число В: ');
operation =  prompt('Введите математическое действие ( + - * / ): ');

if( !isNaN(a) && !isNaN(b)){
    function mathOperation( arg1, arg2, operation ) {
        switch (operation){
            case '+': return arg1 + arg2; break;
            case '-': return arg1 - arg2; break;
            case '*': return arg1 * arg2; break;
            case '/': if(arg2 === 0){
                alert('Деление на нуль, запрещено!!!');
            }else{
                return arg1 / arg2;
            };  break;
            default: alert('Такой оператор отсутствует');
        }
    }
}else{
    alert('Введите число!!!')
}

var result = mathOperation(a,b,operation);
alert( 'Результат математической операции ' + a + operation + b + ' = ' + result );

/*
7. * Сравнить null и 0 . Объяснить результат.
*/

if(null === 0 )
    alert(true + '\n' + typeof(null) + ' равен ' + typeof(0));
else
//тк типы разные, будет false
    alert(false + '\n' + typeof(null) + ' неравен ' + typeof(0));

if( +(null) === 0 )
// при явном приведении типа NULL
// к Number, будет true (0 === 0)
    alert(true + '\n' + typeof( +(null) ) + ' равен ' + typeof(0));
else
    alert(false + '\n' + typeof( +(null) ) + ' неравен ' + typeof(0));

/*
8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function
power(val, pow), где val — заданное число, pow –— степень.
*/

var val, pow;

val = +prompt("Введите число для возведения в степень: ");
pow = +prompt("Введите степень числа: ");

function power(val, pow){
    if( pow !== 1 ){
        return val * power(val, pow - 1);
    }else{
        return val;
    }
}

alert( val + " в степени " + pow + " = "  +  power(val,pow) );