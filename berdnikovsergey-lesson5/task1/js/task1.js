//Task #1

var $borderBox = document.getElementById('boarders__box');

var $table = document.createElement('div');

$table.classList.add('board__2');

var flag = true;

var num = [1, 2, 3, 4, 5, 6, 7, 8];
var abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for(var i = 0; i < 10; i++){

    var $row = document.createElement('div');

    for(var j = 0; j < 10; j++){

        var $cell = document.createElement('div');

        $cell.classList.add('board__coll');

        if(j === 0){

            flag = !flag;

        }

        if(flag) {

            $cell.classList.add('board__black');

        } else {

            $cell.classList.add('board__white');

        }

        if( i === 0 || i === 9 ){

            $cell.classList.add('border__gray');

            $cell.textContent = num[j-1];


        }else if( j === 0 || j === 9  ){

            $cell.classList.add('border__gray');

                $cell.textContent =   abc[i-1] ;


        }

        $row.appendChild($cell);

        flag = !flag;

    }

    $table.appendChild($row);

}

$borderBox.appendChild($table);