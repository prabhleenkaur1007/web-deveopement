$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
 $(this).parent().fadeOut(500, function(){
 $(this).remove();
 });
event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
if(event.which === 13){
//grabbing text from input
var todo =$(this).val();
$(this).val("");
//inc a li
$("ul").append("<li><span>X</span>" +todo+ "</li>");

}
});