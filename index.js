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
 var randomPrice = Math.random()
 cart.push({[item]: Math.floor(randomPrice * 10)})
 console.log(`${item} has been added to your cart.`)
 return cart
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    console.log("Your shopping cart is empty.")
  }
  else {
    var shoppingCart = []
    for(var i = 0; i < cart.length; i++){
      var cartItem = cart[i]
      var itemName = Object.keys(cartItem)[0]
      var itemPrice = cartItem[itemName]
      shoppingCart.push(`${itemName} at $${itemPrice}`)
    }
    if(shoppingCart.length <= 2){
      console.log(`In your cart, you have ${shoppingCart.join(' and ')}.`)
    }
    else {
      var last = shoppingCart.pop()
      console.log(`In your cart, you have ${shoppingCart.join(', ')}, and ${last}.`)
    }
  }
}

function total() {
  // write your code here
  var totalItems = 0;
  for(var i = 0; i < cart.length; i++){
    totalItems += cart[i][Object.keys(cart[i])]
  }
  return totalItems
}

function removeFromCart(item) {
  // write your code here
  var listObjects = {}
  for(var i = 0; i < cart.length; i++){
    var object = cart[i]
    Object.assign(listObjects, object)
  }
  if(listObjects.hasOwnProperty(item)){
    delete listObjects[item]
    cart = Object.keys(listObjects).map(function(key){
      var eachObject = {}
      eachObject[key] = listObjects[key]
      return eachObject
    })
    return cart
  }
  else {
    console.log("That item is not in your cart.")
  }
}
function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber > 0){
    var totalCost = []
    for(var i = 0; i < cart.length; i++){
      var cartObject = cart[i]
      var objectName = Object.keys(cartObject)[0]
      var objectPrice = cartObject[objectName]
      totalCost.push(objectPrice)
      cart.shift()
    }
    var cartTotal = totalCost.reduce(function(a, b){
      return a + b;
    }, 0)
    console.log(`Your total cost is $${cartTotal}, which will be charged to the card ${cardNumber}.`)
  }
  else {
    console.log("Sorry, we don't have a credit card on file for you.")
  }
}
