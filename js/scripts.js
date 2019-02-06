//business logic//
function Pizza(topping, size){
  this.topping = topping,
  this.size = size
}

Pizza.prototype.pizzaCost = function(){
  var value = this.topping + this.size;

  if (value === 12) {
    return 20;
  }
  else if (value == 11) {
    return 10;
  }
  else if (value == 10) {
    return 9;
  }
  else if (value == 9) {
    return 8;
  }
  else {
    return 5;
  }
}

function Label(name){
  this.name = name
}

Label.prototype.customerName = function(){
  var name = this.name;

  if (name){
    return name + ", your";
  }
  else if (name == "") {
    return "Your";
  }
}


//interface logic//
$(document).ready(function() {
  $("#customizePizza").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var user = parseInt($("#userInput").val());
    var toppingInput = parseInt($("select#topping").val());
    var sizeInput = parseInt($("select#size").val());
    var pizza = new Pizza(toppingInput, sizeInput);
    var label = new Label(nameInput);

    $(".total").text(label.customerName() + " total is $" + pizza.pizzaCost() + ". Your pizza will be ready for pick up in 20 minutes.");
  });
});
