var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random()*100);
  cart.push({[item] : price});
  console.log(`${item} has been added to your cart.`)
  return cart 
  
}

// In order to get to the key/value pair you first need to iterate over the Object after iterating over each object then you iterate ovet each objects key:value.~Sidhe

function viewCart() {
   // console.log(`In your cart, you have ${item} at ${price}.`);
    if (cart.length == 0) {
      console.log("Your shopping cart is empty.");
      return;
    }
    
    for (var i in cart){
    for (var item in cart[i])
    	console.log(`In your cart, you have ${item} at $${cart[i][item]}.`);
      if (cart.length > 1){
    	  console.log(`In your cart, you have ${item} at $${cart[i][item]} and ${item} at $${cart[i][i][item]} .`);
      }
}
  
}





// The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.
function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined) {
     console.log("We don't have a credit card on file for you to place your order.");
  
}
cart.length = 0;
}