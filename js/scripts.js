$(document).ready(function() {
  var items = [];
  $("#form").submit(function(event) {
    var userInput = $("input#item1").val();
    items.push(userInput);
    event.preventDefault();
  $("#button").click(function(event) {
    items.sort();
    var itemsUpper = items.map(function(item) {
      return item.toUpperCase();
    });
  $("#list").text(itemsUpper);
  });
  });
});
