var madeSelection = false;
var defenderSelection = false;
var villainsLeft = 3;
var hero;
var villain;
var heroHP;
var villainHP;

var character1 = {
  name: "Matt",
  healthPoints: 100,
  attackPower: 10,
  baseAttackPower: 10,
  counterAttackPower: 15,
  hpID: "hp1",
  div: function(){
    $("#char1").append("<div class='thumbnail' >" + "<h3 class='text-center'>" + character1.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp1' class='text-center'>HP " + character1.healthPoints + "</h3>" + "</div>")
  },
  clear: function(){
    $("#char1").toggle();
  },
  redo: function() {
    this.healthPoints = 100;
    this.attackPower = 10;
    this.baseAttackPower = 10;
    this.counterAttackPower = 15;
    $("#char1").toggle().removeClass("enemy selected").appendTo("#choose-char");
    $("#hp1").html("HP " + this.healthPoints);
  }
}

var character2 = {
  name: "Dave",
  healthPoints: 150,
  attackPower: 20,
  baseAttackPower: 20,
  counterAttackPower: 20,
  div: function(){
    $("#char2").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character2.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp2' class='text-center'>HP " + character2.healthPoints + "</h3>" + "</div>")
  },
  clear: function(){
    $("#char2").toggle();
  },
  redo: function() {
    this.healthPoints = 150;
    this.attackPower = 20;
    this.baseAttackPower = 20;
    this.counterAttackPower = 20;
    $("#char2").toggle().removeClass("enemy selected").appendTo("#choose-char");
    $("#hp2").html("HP " + this.healthPoints);
  }
}

var character3 = {
  name: "Sam",
  healthPoints: 130,
  attackPower: 11,
  baseAttackPower: 11,
  counterAttackPower: 25,
  div: function(){
    $("#char3").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character3.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp3' class='text-center'>HP " + character3.healthPoints + "</h3>" + "</div>")
  },
  clear: function(){
    $("#char3").toggle();
  },
  redo: function() {
    this.healthPoints = 130;
    this.attackPower = 11;
    this.baseAttackPower = 11;
    this.counterAttackPower = 25;
    $("#char3").toggle().removeClass("enemy selected").appendTo("#choose-char");
    $("#hp3").html("HP " + this.healthPoints);
  }
}

var character4 = {
  name: "Alex",
  healthPoints: 170,
  attackPower: 17,
  baseAttackPower: 17,
  counterAttackPower: 21,
  div: function(){
    $("#char4").append("<div class='thumbnail'>" + "<h3 class='text-center'>" + character4.name + "</h3>" +
        "<img src='http://placehold.it/250x150'>" +
        "<h3 id='hp4' class='text-center'>HP " + character4.healthPoints + "</h3>" + "</div>")
  },
  clear: function(){
    $("#char4").toggle();
  },
  redo: function() {
    this.healthPoints = 170;
    this.attackPower = 17;
    this.baseAttackPower = 17;
    this.counterAttackPower = 21;
    $("#char4").toggle().removeClass("enemy selected").appendTo("#choose-char");
    $("#hp4").html("HP " + this.healthPoints);
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
      defenderSelection = true;
      villainHP = $(this).find('[id*="hp"]')
      $("#fight").prop('disabled', false);
   }
 })

 $("#fight").on("click", function(){
   villain.healthPoints -= hero.attackPower;
   hero.healthPoints -= villain.attackPower;
   hero.attackPower += hero.baseAttackPower;
   villainHP.html("HP " + villain.healthPoints);
   heroHP.html("HP " + hero.healthPoints);
   // if(hero.healthPoints <= 0){
   //  alert("You lose!");
   //  character1.redo();
   //  character2.redo();
   //  character3.redo();
   //  character4.redo();
   // }
   if(villain.healthPoints <= 0){
    villain.clear();
    villainsLeft--;
    defenderSelection = false;
    $("#fight").prop('disabled', true);
   }
   if(villainsLeft === 0){
    alert("You win!");
    madeSelection = false;
    defenderSelection = false;
    villainsLeft = 3;
    hero.clear();
    character1.redo();
    character2.redo();
    character3.redo();
    character4.redo();
   }
 })

})