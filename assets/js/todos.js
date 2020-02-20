//check off specific todos
$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on x to delete todo
$('ul').on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });

    // to stop the  event from bubbling
    event.stopPropagation();
});

//creating to do
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grab new to do value from the input
        var newTodo = $(this).val();
        //clear the input after tou grab the value;
        $(this).val("");

        //create a new li and add to ul
        $("ul").append("<li><span>X</span> " + newTodo + "</li>");
    }
})