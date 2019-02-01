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
}
