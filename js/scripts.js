$(document).on("submit", "form#todo-list", function(){
  event.preventDefault();
  var newElement = $("#new-item").val();
  $("#printed-list").append("<li class='item'>"+ newElement + "<button type='submit' class='btn btn-danger btn-sm active remove-btn' >-</button><button type='submit' class='btn btn-warning btn-sm active dash-btn'>x</button><button type='submit' class='btn btn-primary btn-sm active show-btn'>show</button></li>");
  $("#printed-list").show();

});

$(document).on("click", ".remove-btn",function() {
  event.preventDefault();
  $(this).parent().empty();
});

$(document).on("click", ".dash-btn",function() {
  event.preventDefault();
  $(this).parent().empty();
});

$(document).on("click", ".show-btn",function() {
  event.preventDefault();
  $(this).parent().empty();
});
