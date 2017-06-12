function Task (name, detail){
  this.name = name;
  this.detail = detail;
}

$(document).on("submit", "form#todo-list", function(){
  event.preventDefault();
  var newName = $("#new-item").val();
  var newDetail = $("#new-detail").val();
  var newTask = new Task(newName, newDetail);


  $("#printed-list").append("<li class='item'>"+ newTask.name + "<button type='submit' class='btn btn-danger btn-sm active remove-btn' >-</button><button type='submit' class='btn btn-sm active dash-btn'>✅</button><button type='submit' class='btn btn-primary btn-sm active show-btn'>show</button><p class='item-details'>" + newTask.detail + "</p></li>");
  $("#printed-list").show();

});

$(document).on("click", ".remove-btn",function() {
  event.preventDefault();
  $(this).parent().empty();
});

$(document).on("click", ".dash-btn",function() {
  event.preventDefault();
    $(this).parent("li").append("<p>DONE</p>");
});

$(document).on("click", ".show-btn",function() {
  event.preventDefault();
  $(this).siblings("p").toggle();
});
