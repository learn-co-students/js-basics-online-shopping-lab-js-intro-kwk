var cart;

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart(){
  return cart
}
function addToCart(item1){
  var newItem=new Object({})
  newItem[item1]=Math.floor(100*Math.random())
  cart[cart.length]=newItem
  console.log(`${item1} has been added to your cart.`)
  return cart
}

function viewCart(){
  if (cart.length==0){console.log("Your shopping cart is empty.");return}
  var string1=`In your cart, you have `
  for (var i = 0; i < cart.length; i++) {
    for (var item in cart[i]){
      string1=string1+`${item} at $${cart[i][item]}`
      if (i==cart.length-1){string1=string1+'.'}else{string1=string1+`, `}
    }
  }
  console.log(string1)

}

function removeFromCart(item){
  for (var i = 0; i < cart.length; i++) {
    if (cart[i][item]!=undefined){
        cart.splice(i,1)
        return cart
      }
  }
  console.log("That item is not in your cart.")
  return cart
}

function placeOrder(number){
  if (number==undefined){console.log("We don't have a credit card on file for you to place your order.")}
  console.log(`Your total cost is $${total()}, which will be charged to the card ${number}.`)
  cart=[]
}
