var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
	var price = Math.floor(100 * Math.random()) + 1
	cart.push({[item] : price})
	console.log(`${item} has been added to your cart.`)
	return cart
}

function viewCart() {
	if (cart.length == 0) {
		console.log("Your shopping cart is empty.")
		return
	}
	var output = "In your cart, you have"
	var l = cart.length;
	for (var i = 0; i < cart.length; i++) {
            var key = Object.keys(cart[i])[0]
            var val = cart[i][key]
            output += ` ${key} at $${val}`
            if (i < cart.length - 1) {
                output += ','
            } else {
                output += '.'
            }
	}

	console.log(output)
	return output
}

function total() {
	var total = 0
	for (var i in cart) {
		var key = Object.keys(cart[i])
		total += cart[i][key]
	}
	return total
}

function removeFromCart(item) {
	if (cart.length == 0) {
		console.log("That item is not in your cart.")
		return cart
	}
	for (var i = 0; i < cart.length; i++) {
		if (Object.keys(cart[i])[0] == item) {
			cart.splice(i, 1)
			return cart
		}
	}
	return cart
}

function placeOrder(cardNumber) {
	if (cardNumber == null) {
		console.log("We don't have a credit card on file for you to place your order.")
		return cart
	}
	console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
	cart = []
	return cart
}
