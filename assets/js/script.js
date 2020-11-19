$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
    /*Varianta cu obiecte pentru adaugare
    $(this).css({
        color:"gray",
        textDecoration:"line-through"
    });
    */ 
});

$("ul").on("click", ".delete", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$('input[type="text"]').keypress( function(event){
    if(event.which === 13)
    {
        var toDoText=$(this).val();
        $(this).val("");
        $("ul").append("<li>"+"<span class='delete'><i class='fas fa-trash-alt'></i></span> "+toDoText+"</li>");
    }
});

$(".fa-plus").on("click", function(){ 
    $('input[type="text"]').fadeToggle();
});