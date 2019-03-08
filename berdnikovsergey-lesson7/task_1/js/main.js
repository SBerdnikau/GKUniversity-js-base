var products = [
    {
        cover: 'https://s.ek.ua/jpg_zoom1/916176.jpg',
        name: 'iPhone X',
        price: 70000,

    },
    {
        cover: 'https://s.ek.ua/jpg_zoom1/916176.jpg',
        name: 'iPhone XS',
        price: 80000,

    },
    {
        cover: 'https://s.ek.ua/jpg_zoom1/916176.jpg',
        name: 'iPhone X7',
        price: 150000,

    },
    {
        cover: 'https://s.ek.ua/jpg_zoom1/916176.jpg',
        name: 'iPhone X1',
        price: 2500,

    }
];

var cart = [];

var $cart = document.getElementById('cart');
var $catalog = document.getElementById('catalog');
var $list  = document.getElementById('list');
$catalog.addEventListener('click', handleBuyClick);
$list.addEventListener('click', handleInput);

$btnClear = document.querySelector('.btnClear');
$btnClear.addEventListener('click',handleClear);

function getProductByName(name) {
    var product = null;
    for(var i = 0; i < products.length; i++) {
        if (products[i].name === name) {
            product = products[i];
        }
    }

    return product;

}

function getProductIndex(name) {
    var idx = -1;
    for(var i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
        }
    }
    return idx;
}



function handleBuyClick(event) {
    if(event.target.tagName === 'BUTTON') {
        var $product = event.target.parentElement;
        var img = $product.querySelector('.photo').getAttribute('src');
        var name = $product.querySelector('.title').textContent;
        var price = +$product.querySelector('.price').textContent;

        var product = getProductByName(name);

        var idx = getProductIndex(name);
        if(idx === -1) {
            // товара в корзине еще нет
            cart.push({ cover: img, name: name, price: price, quantity: 1 });

        } else {

            cart[idx].quantity++;

        }
        console.log(cart);
        buildTotal(cart);
        buildList(cart);
    }
}

function handleInput(event) {
    if(event.target.tagName === 'INPUT') {
        var $product = event.target.parentElement;
        var name = $product.querySelector('.title').textContent;
        var idx = getProductIndex(name);
        cart[idx].quantity++;
        buildTotal(cart);
        buildList(cart);
    }
}

function handleClear(event) {
    if(event.target.className === 'clear-btn'){
        alert('Test clear button');
    }
}

function buildList(cart) {
    for(var i = 0; i < cart.length; i++) {
        var $templateList = document.getElementById('template-list').children[0].cloneNode(true);
        $templateList.querySelector('.photo').setAttribute('src',cart[i].cover);
        $templateList.querySelector('.title').textContent = cart[i].name;
        $templateList.querySelector('.price').textContent = cart[i].price;
        $templateList.querySelector('.quantity').textContent = cart[i].quantity;
        $templateList.querySelector('.check').setAttribute('value' , cart[i].quantity) ;
        $list.appendChild($templateList);
    }
}

function buildTotal(cart) {
    var sum = 0;
    var count = 0;

    for(var i = 0; i < cart.length; i++) {
        sum = sum + cart[i].price * cart[i].quantity;
        count = count + cart[i].quantity;
    }

    if(cart.length === 0) {
        $cart.textContent = 'Корзина пуста';
    } else {
        $cart.textContent = 'Сумма товаров в корзине: ' + sum + ' рублей,товаров всего '+ count;
        $list.innerHTML = '';
    }
}

function buildCatalog(products) {
    for(var i = 0; i < products.length; i++) {
        var $template = document.getElementById('template').children[0].cloneNode(true);
        $template.querySelector('.photo').setAttribute('src',products[i].cover);
        $template.querySelector('.title').textContent = products[i].name;
        $template.querySelector('.price').textContent = products[i].price;
        $template.querySelector('.quantity').textContent = products[i].quantity;
        $catalog.appendChild($template);
    }
}

buildCatalog(products);
buildTotal(cart);
