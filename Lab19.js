var totalCost = 0;
var cart = [];
var items = ["Milk", "Eggs", "Coffee", "Lettuce"];
var itemCosts = [2.00, 2.00, 4.00, 1.50];

function addItem(itemID)
{
	cart.push(items[itemID] + " ($" + parseFloat(itemCosts[itemID]).toFixed(2) + ")");
	totalCost += itemCosts[itemID];
	refreshCart();
}

function refreshCart()
{
	$("#shoppingCart").empty();
	if (cart.length === 0)
	{
		$("#shoppingCart").append("<li>No items currently in cart!</li>");
		console.log("No items currently in cart!");
	}
	else
	{
		for(var i = 0; i < cart.length; i++)
		{
			$("#shoppingCart").append("<li>" + cart[i] + "</li>");
			console.log(cart[i]);
		}
	}
	
	$("#total").html("Total: $" + parseFloat(totalCost).toFixed(2));
	console.log("Total cost: $" + parseFloat(totalCost).toFixed(2));
}

function clearCart()
{
	cart = [];
	totalCost = 0;
	refreshCart();
}