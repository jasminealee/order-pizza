function Pizza() {
  this.pizzaId = 0;
  this.pizzaSize = 0;
  this.toppings = 0;
  this.toppingsId = 0;
  this.total = 0;
}

Pizza.prototype.newPizzaId = function() {
  this.pizzaId=+;
}

Pizza.prototype.addSize = function(size) {
  this.pizzaSize.push(size)
}

Pizza.prototype.addToppings = function(toppings) {
  this.pizzaToppings.push(toppings)
}

Pizza.prototype.assignToppingsId = function() {
  this.toppingsId +=1;
  return this.toppingsId;
}

function SizeCostToppings (size, cost, toppings)
  this.size = size,
  this.cost = cost,
  this.toppings = toppings,
}
Pizza.prototype.sizeCostToppings = function() {
    if (this.pizzaSize[0].size === "Small") {
        this.pizzaSize[0].cost = 5.00;
    } else if (this.pizzaSize[0].size === "Medium") {
        this.pizzaSize[0].cost = 7.00;
    } else if (this.pizzaSize[0].size === "Large") {
        this.pizzaSize[0].cost = 12.00;
    };
}

}
$(document function(event))
  ($("#order-pizza").submit(function(){
