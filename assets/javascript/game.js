var madeSelection = false;
var defenderSelection = false;
var hero;
var villain;
var heroHP;
var villainHP;

var character1 = {
  name: "Matt",
  healthPoints: 100,
  attackPower: 10,
  counterAttackPower: 15,
  hpID: "hp1",
  div: function(){
    $("#char1").append("<div class='thumbnail' >" + "<h3 class='text-center'>" + character1.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp1' class='text-center'>HP " + character1.healthPoints + "</h3>" + "</div>")
  },
  defeat: function(){
    $("#char1").removeClass("enemy").children().remove();
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
  },
  defeat: function(){
    $("#char2").removeClass("enemy").children().remove();
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
  },
  defeat: function(){
    $("#char3").removeClass("enemy").children().remove();
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
  },
  defeat: function(){
    $("#char4").removeClass("enemy").children().remove();
  }
}

$( document ).ready(function() {

  character1.div();
  character2.div();
  character3.div();
  character4.div();
  $("#char1").data(character1);
  $("#char2").data(character2);
  $("#char3").data(character3);
  $("#char4").data(character4);

  $(".char").on("click", function(){
    if(madeSelection === false){
      var siblings = $(this).siblings(".char");
      siblings.addClass("enemy");
      siblings.appendTo($("#to-attack"));
      $(this).appendTo($("#your-char")).addClass("selected");
      hero = $(this).data();
      heroHP = $(this).find(`[id*="hp"]`);
      madeSelection = true;
    }
  })

 $("#to-attack").on("click", ".char.enemy", function(){
   if (defenderSelection === false) {
      $(this).appendTo($("#defender"));
      villain = $(this).data();
      console.log(villain);
      defenderSelection = true;
      villainHP = $(this).find('[id*="hp"]')
   }
 })

 $("#fight").on("click", function(){
   villain.healthPoints -= hero.attackPower;
   hero.healthPoints -= villain.attackPower;
   console.log(villain.healthPoints);
   villainHP.html("HP " + villain.healthPoints);
   heroHP.html("HP " + hero.healthPoints);
   if(villain.healthPoints <= 0){
    villain.defeat();
    defenderSelection = false;
   }
 })

})