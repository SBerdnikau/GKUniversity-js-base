//Task #2

var goods = [
    { id: 1, name: 'Майки', price: 8000, count: 0},
    { id: 2, name: "Штаны", price: 1200, count: 0},
    { id: 3, name: "Носки", price: 1600, count: 0}
];

var cart = {

    good: goods,

    cost: function(){

        var result = [];

        for( var i = 0; i < cart.good.length; i++ ){
            result.push( cart.good[i].price  * cart.good[i].count ) ;
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

    display: function() {
        console.log( 'Общая сумма заказа: ' + this.countBasketPrice() );
    }

};


var item_1 = cart;

item_1.good[0].count = 2;
item_1.good[1].count = 4;
item_1.good[2].count = 5;

item_1.display();

// [16000, 4800, 8000]
// 28800

var item_2 = cart;

item_2.good[0].count = 3;
item_2.good[1].count = 5;
item_2.good[2].count = 8;

item_2.display();

// [24000, 6000, 12800]
// 42800


