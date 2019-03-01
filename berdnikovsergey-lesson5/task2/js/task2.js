//Task #2

var goods = [
    { id: 1, name: 'Майки', price: 8000, count: 0},
    { id: 2, name: "Штаны", price: 1200, count: 0},
    { id: 3, name: "Носки", price: 1600, count: 0}
];

var cart = {

    count: 0,

    product: goods,

    cost: function(){



        var result = [];

        for( var i = 0; i < cart.product.length; i++ ){
            result.push( cart.product[i].price  * cart.product[i].count ) ;

        }

        return result;

    },

    countBasketPrice: function (){

        var sum = 0;
        var bufer = this.cost();

        for(var i = 0; i < bufer.length; i++ ){
            sum +=  bufer[i];
        }

        return sum;

    },

    displayTotalSum: function() {
            var total = this.countBasketPrice() ;
            if(total > 0){
                return 'ИТОГО: ' +  total + ' рублей';
            }else{

                return 'Пустая корзина';
            }
    }

};


var item_1 = cart;

item_1.product[0].count = 1;
item_1.product[1].count = 2;
item_1.product[2].count = 1;


var $catalog = document.getElementById('catalog');
$catalog.classList.add('catalog');

var $name = document.createElement('div');
var $sum = document.createElement('div');

var $totalSum = document.createElement('div');
$totalSum.classList.add('totalSum');

if(cart.product[0].count!==0 || cart.product[1].count!==0 || cart.product[2].count!==0){
    $name.textContent = cart.product[0].name + ' x ' + cart.product[0].count + ';' + cart.product[1].name + ' x ' + cart.product[1].count + ';' + cart.product[2].name + ' x ' +cart.product[2].count ;
    $catalog.appendChild($name);
}else{
    $name.textContent = '';
    $catalog.appendChild($name);
}

if(cart.product[0].count!==0 || cart.product[1].count!==0 || cart.product[2].count!==0){
    $sum.textContent =   cart.cost();
    $catalog.appendChild($sum);
}else{
    $sum.textContent = '';
    $catalog.appendChild($sum);
}



$totalSum.textContent = item_1.displayTotalSum();
$catalog.appendChild($totalSum);