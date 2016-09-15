var cart = [];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 101);
  cart.push({[item]: price});
  console.log(item + ' has been added to your cart.');
  return cart;
}

function viewCart() {
  if(cart.length > 0) {
    var yourCart = 'In your cart, you have ';
    cart.forEach(function(item, i) {
      for(var price in item) {
          yourCart += price + ' at $' + item[price];
      }

      if(i === cart.length-1) {
        yourCart += '.';
      } else {
        yourCart += ', ';
      }
    });

    console.log(yourCart);
  } else {
    console.log('Your shopping cart is empty.');
  }
}

function removeFromCart(item) {
  cart.forEach(function(obj, i) {
    if(obj.hasOwnProperty(item)) {
      cart.splice(i, 1);
      return cart;
    }
  });
  console.log('That item is not in your cart.');
}

function placeOrder(cardNum) {
    if(!cardNum) {
      console.log("We don't have a credit card on file for you to place your order.");
    } else {
      var cost = total();
      console.log("Your total cost is $" + cost + ", which will be charged to the card " + cardNum + ".");

      cart = [];
    }
}
