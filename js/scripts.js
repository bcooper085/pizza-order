//Business Logic
function Pizza(size) {
  this.pizzaSize = size;
  this.pizzaToppings = [];
}
Pizza.prototype.price = function() {
  var price = 0;
  if (this.pizzaSize === "Small") {
    price += 10;
  } else if (this.pizzaSize === "Medium") {
    price += 13;
  } else {
    price += 15;
  }
  for (var i = 0; i < this.pizzaToppings.length; i++) {
    price++;
  }
  price = "$" + price.toFixed(2);
  return price;

}
Pizza.prototype.order = function() {
  return (this.pizzaSize + " " + this.pizzaToppings.join(', '));
}


//User Logic
$(function() {
  $('.order-form').submit(function() {
    event.preventDefault();
    $('.pizza-here').fadeIn(5000);
    var inputtedSize = $('input[name=pizzaSize]:checked').val();
    var newPizza = new Pizza(inputtedSize);
    $('input[name=pizzaToppings]:checked').each(function() {
      var inputtedToppings = $(this).val();
      newPizza.pizzaToppings.push(inputtedToppings);
      $("input[type=radio]").prop("checked", false);
      $("input[type=checkbox]").prop("checked", false);
    });
    $('#output-order').append('<li>' + newPizza.order() + " " + newPizza.price() + '</li>');
  });
});
