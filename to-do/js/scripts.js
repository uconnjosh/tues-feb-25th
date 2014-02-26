var List = {
};

$(document).ready(function() {
  var newList = Object.create(List);
   newList.things = [];

  $("button#submit").click(function() {  
    var current = $("input.addToDo").val();
    newList.things.push(current);
    $("ul#toDoList").text("");

    newList.things.forEach(function(index) {
      $("ul#toDoList").append("<li>" + index + "</li>");
      
    });


      event.preventDefault();
  });
});
