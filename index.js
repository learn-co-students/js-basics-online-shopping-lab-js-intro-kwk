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
function viewCart() {
  // write your code here
  // if cart is empty 
  if(cart.length == 0){
   console.log("Your shopping cart is empty.")
    return
  }
 
  }
  for(var i = 0; i < cart.length; i++){
    var item = cart.item ;
    var price = cart.price;
    console.log(`In your cart, you have ${item} at ${price}.`);
    // iterate over every item(object) in cart and print:
 // 1 item — In your cart, you have bananas at $17.2 items — In your cart, you have bananas at $17 and pancake batter at $5.3+ items — In your cart, you have bananas at $17, pancake batter at $5, and eggs at $49.
 
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
}
