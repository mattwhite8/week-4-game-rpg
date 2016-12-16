var madeSelection = false;
var defenderSelection = false;
var hero;
var villain;

var character1 = {
  name: "Matt",
  healthPoints: 100,
  attackPower: 10,
  counterAttackPower: 15,
  div: function(){
    $("#char1").append("<div class='thumbnail' data-char=" + character1 + ">" + "<h3 class='text-center'>" + character1.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp1' class='text-center'>HP " + character1.healthPoints + "</h3>" + "</div>")
  }
}

var character2 = {
  name: "Dave",
  healthPoints: 150,
  attackPower: 20,
  counterAttackPower: 20,
  div: function(){
    $("#char2").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character2.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp2' class='text-center'>HP " + character2.healthPoints + "</h3>" + "</div>")
  }
}

var character3 = {
  name: "Sam",
  healthPoints: 130,
  attackPower: 11,
  counterAttackPower: 25,
  div: function(){
    $("#char3").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character3.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp3' class='text-center'>HP " + character3.healthPoints + "</h3>" + "</div>")
  }
}

var character4 = {
  name: "Alex",
  healthPoints: 170,
  attackPower: 17,
  counterAttackPower: 21,
  div: function(){
    $("#char4").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character4.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp4' class='text-center'>HP " + character4.healthPoints + "</h3>" + "</div>")
  }
}

$( document ).ready(function() {

  character1.div();
  character2.div();
  character3.div();
  character4.div();
  
  $(".char").on("click", function(){
    if(madeSelection === false){
      var siblings = $(this).siblings(".char");
      siblings.addClass("enemy");
      siblings.appendTo($("#to-attack"));
      $(this).appendTo($("#your-char")).addClass("selected");
      madeSelection = true;
    }
  })

 $("#to-attack").on("click", ".char.enemy", function(){
   console.log($(this));
   if (defenderSelection === false) {
      $(this).appendTo($("#defender"));
      defenderSelection = true;
   }
 })

})