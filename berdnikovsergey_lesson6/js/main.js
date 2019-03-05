//Task #1

var products = [
	{   id: 1,
		title: 'Смартфон Apple iPhone SE 32GB Space Grey',
		price: 19990,
		count: 0,
		path: 'smartfon_apple_iphone_se_32gb_space_grey'
	},
	{   id: 2,
		title: 'Цифровой зеркальный фотоаппарат Canon EOS 4000D Kit 18-55 III DC',
		price: 22490,
		count: 0,
		path: 'tsifrovoy_fotoapparat_canon_eos_4000d_kit_18_55_iii_dc_778956'
	},
	{   id: 3,
		title: 'Холодильник Liebherr Cef 4025',
		price: 39990,
		count: 0,
		path: 'liebherr_cef_4025_402443'
	},
	{   id: 4,
		title: 'Ресивер AV Yamaha RX-V385, черный',
		price: 20990,
		count: 0,
		path: 'resiver_av_yamaha_rx_v385_chernyy_873739'
	},
];

var cart = { 
  	products: [], 
  	count: 0, 
  	price: 0, 
  	addToCart: function(id, count) {
  		var item = getProductById(id);
  	  	if(item) { 
  	  		for (var i = 0; i < cart.products.length; i++) {
  	  			if (cart.products[i].id == id){
						cart.products[i].count += count;
					} 
  	  		}
  	  	}
        else {
        	this.products.push(products[id - 1]);
        	products[id - 1].count += count;
        }
        this.sumCart();
  	},
  	sumCart: function() { 
  		this.count = 0;
 		this.price = 0;
    	for (var i = 0; i < this.products.length; i++) {
    		this.price += this.products[i].count * this.products[i].price;
    		this.count += this.products[i].count;
    	}
  	},
  	clearCart: function(e) { 
  		clearPrintToCart(e);
  		this.count = 0;
  		this.price = 0;
		for (var i = this.products.length; i > 0; i--) {
			this.products.pop();
		}  	
		for (var i = 0; i < products.length; i++) {
			products[i].count = 0;
		} 	
  	}
};

var h1 = document.getElementsByTagName('h1');
var bigPic = document.getElementById('big-pic');
var smallPic1 = document.getElementById('small-pic-1');
var smallPic2 = document.getElementById('small-pic-2');
var smallPic3 = document.getElementById('small-pic-3');

function printProducts(e) {
	var divProducts = document.createElement('div');
	var productsH1 = document.createElement('h1');
	divProducts.className = 'products';
	productsH1.innerHTML = 'Каталог товаров';
	document.body.appendChild(divProducts);
	divProducts.appendChild(productsH1);
	for (var i = 0; i < products.length; i++) {
		var h2 = document.createElement('h2');
		var img = document.createElement('img');
		var price = document.createElement('p');
		var form = document.createElement('form');
		var button = document.createElement('button');
		h2.innerHTML = products[i].title;
		img.src = 'img/' + products[i].path  + '_' + '1' + '.jpg';
		price.innerHTML = 'Цена: ' + products[i].price + ' p.';
		button.innerHTML = 'купить';
		button.onclick = onButtonClick;
		button.className = products[i].id;
		divProducts.appendChild(h2);
		divProducts.appendChild(img);
		divProducts.appendChild(price);
		divProducts.appendChild(button);
	}
	var divCart = document.createElement('div');
	var cartH1 = document.createElement('h1');
	divCart.className = 'cart';
	cartH1.innerHTML = 'Корзина';
	document.body.appendChild(divCart);
	divCart.appendChild(cartH1);
	printCart(e);
}


var count = document.createElement('h5');
var sum = document.createElement('h5');
var button = document.createElement('button');
var cartH1 = document.getElementsByTagName('h1');
var title = document.getElementsByTagName('h6');


function printCart(e) {
	count.innerHTML = 'Всего товаров в корзине: ' + cart.count;
	sum.innerHTML = 'Стоимость корзины: ' + cart.price;
	button.innerHTML = 'очистить';
	button.onclick = onButtonClear;

	cartH1[1].appendChild(count);
	cartH1[1].appendChild(sum);
	cartH1[1].appendChild(button);
}

function getProductById(id) {
	for (var i = 0; i < cart.products.length; i++) {
			if (cart.products[i].id == id){
				return (true);
			} 
	}
	return false;
}

function clearPrintToCart(e) {
	var cartH1 = document.getElementsByTagName('h1');
	var h6 = document.getElementsByTagName('h6');
	
		for (var i = h6.length - 1; i >= 0; i--) {
			cartH1[1].removeChild(h6[i]);
		}
	
}

function addPrintToCart(e) {
    clearPrintToCart(e);
    console.log(cart.products);
	var cartH1 = document.getElementsByTagName('h1');
	for (var i = 0; i < cart.products.length; i++) {
		var h6 = document.createElement('h6');
		var count = document.createElement('h6');
		h6.innerHTML = cart.products[i].title;
		count.innerHTML = 'Кол-во: ' + cart.products[i].count;
		cartH1[1].appendChild(h6);
		cartH1[1].appendChild(count);
	}
}

function onButtonClear(e) {
	cart.clearCart(e);
	printCart(e);
}

function onButtonClick(e) {
	cart.addToCart(e.target.className, 1);
	printCart(e);
	addPrintToCart(e);
}

function printImg() {
  	for (var i = 0; i < products.length; i++) {
  		h1.innerHTML = products[i].title;
  	 	bigPic.src = products[i].path + '_' + '1' + '.jpg';
  	 	smallPic1.src = products[i].path + '_' + '1' + '.jpg';
  	 	smallPic2.src = products[i].path + '_' + '2' + '.jpg';
  	 	smallPic3.src = products[i].path + '_' + '3' + '.jpg';	 	
  	}
};

window.onload = printProducts;