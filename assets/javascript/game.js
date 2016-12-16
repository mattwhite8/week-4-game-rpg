$( document ).ready(function() {
  var madeSelection = false;
  var defenderSelection = false;
  
  $(".char").click(function(){
    if(madeSelection === false){
      var siblings = $(this).siblings(".char");
      siblings.addClass("enemy");
      siblings.appendTo($("#to-attack"));
      $(this).appendTo($("#your-char")).addClass("selected");
      madeSelection = true;
    }
  })

 $("#to-attack").on("click", "div", function(){
   console.log($(this));
   if (defenderSelection === false) {
      $(this).appendTo($("#defender"));
      defenderSelection = true;
   }
 })
 
})