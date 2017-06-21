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
    
    var contentMessage = "In your cart, you have ";
    for (var i in cart){
    for (var item in cart[i])
    if (i == 0)
      contentMessage += `${item} at $${cart[i][item]}`;
    else if (i > 0 && i < cart.length - 1)
      contentMessage += `, ${item} at $${cart[i][item]}`;
    else if (i == cart.length - 1 && cart.length == 2)
      contentMessage += ` and ${item} at $${cart[i][item]}`;
      else contentMessage += `, and ${item} at $${cart[i][item]}`;
     }
     
     console.log(contentMessage + ".");
}
  





// The total() function accepts no arguments, iterates through the cart array, and returns the current total value of the items in the cart.
function total() {
  // write your code here
  let totalPrice = 0
  for (var i = 0; i < cart.length; i++){
       for (var item in cart[i]){
           totalPrice += cart[i][item]
       }
  }
  return totalPrice
}

function removeFromCart(item) {
     console.log("That item is not in your cart.")
     return cart
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
     console.log('Sorry, we don\'t have a credit card on file for you.');
     return false;
  }
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
  

cart.length = 0;
}