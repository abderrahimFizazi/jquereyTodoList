$(document).ready(function(){
    var i=1, 
        uncompleted = $(".uncompleted"),
        completed = $(".completed"),
        add = $(".add");
$(".AddButton").click(function(){
    var addVal = add.val();
    if(addVal!=''){
    uncompleted.prepend("<div class='uncompletedStyle task"+i+"'></div>");
    var task = $(".task"+i);
        task.hide().slideDown();
        task.html("<span>"+addVal+"</span>"+"<button class='taskDelete'>Delete</button><button class='taskComlete'>Compele</button>");
    add.val("");
        i++;
        add.attr("autofocus");
    }
    $(".taskDelete").click(function(){
    $(this).parent().remove();
        i--;
        });
    $(".taskComlete").click(function(){
        var a = $(this).parent();
      console.log(a);

    });
});
});