function Pizza() {
  this.pizzaId = 0,
  this.pizzaSize = 0,
  this.total = 0
}

Pizza.prototype.newPizzaId = function() {
  this.pizzaId +=;
}

Pizza.prototype.newPizza = function() {
    if (this.toppings.length >= 0) {
        this.toppingsId = 0;
        this.pizzaSize = [];
        this.total = 0;
    };

Pizza.prototype.addSize = function(size) {
  this.pizzaSize.push(size)
}

function SizeCostToppings (size, cost) {
  this.size = size,
  this.cost = cost
}

Pizza.prototype.sizeCostToppings = function() {
    if (this.pizzaSize.size === "Small") {
        this.pizzaSize.cost = 5.00;
    } else if (this.pizzaSize[0].size === "Medium") {
        this.pizzaSize[0].cost = 7.00;
    } else if (this.pizzaSize[0].size === "Large") {
        this.pizzaSize[0].cost = 12.00;
    } else {
      return "I'm sorry. I'm not able to finalize your order."
    }
    };
}

}
$(document function(event))
  ($("#order-pizza").submit(function(){
