var madeSelection = false;
var defenderSelection = false;
var villainsLeft = 3;
var hero;
var villain;
var heroHP;
var villainHP;
var heroDiv;
var villainDiv;

var character1 = {
  name: "Matt",
  healthPoints: 100,
  attackPower: 10,
  baseAttackPower: 10,
  counterAttackPower: 15,
  hpID: "hp1",
  div: function(){
    $("#char1").append("<div class='thumbnail' >" + "<h5 class='text-center'>" + character1.name + "</h5>" +
        "<img src='http://placehold.it/242x200'>" +
        "<h5 id='hp1' class='text-center'>HP " + character1.healthPoints + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char1").is(':visible')){
      $("#char1").toggle();
    }
  },
  redo: function() {
    this.healthPoints = 100;
    this.attackPower = 10;
    this.baseAttackPower = 10;
    this.counterAttackPower = 15;
    if($("#char1").is(':hidden')){
      $("#char1").toggle();
    }
    $("#char1").removeClass("enemy selected").appendTo("#choose-char");
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
    $("#char2").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character2.name + "</h5>" +
        "<img src='http://placehold.it/242x200'>" +
        "<h5 id='hp2' class='text-center'>HP " + character2.healthPoints + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char2").is(':visible')){
      $("#char2").toggle();
    }
  },
  redo: function() {
    this.healthPoints = 150;
    this.attackPower = 20;
    this.baseAttackPower = 20;
    this.counterAttackPower = 20;
    if($("#char2").is(':hidden')){
      $("#char2").toggle();
    }
    $("#char2").removeClass("enemy selected").appendTo("#choose-char");
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
    $("#char3").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character3.name + "</h5>" +
        "<img src='http://placehold.it/242x200'>" +
        "<h5 id='hp3' class='text-center'>HP " + character3.healthPoints + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char3").is(':visible')){
      $("#char3").toggle();
    }
  },
  redo: function() {
    this.healthPoints = 130;
    this.attackPower = 11;
    this.baseAttackPower = 11;
    this.counterAttackPower = 25;
    if($("#char3").is(':hidden')){
      $("#char3").toggle();
    }
    $("#char3").removeClass("enemy selected").appendTo("#choose-char");
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
    $("#char4").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character4.name + "</h5>" +
        "<img src='http://placehold.it/242x200'>" +
        "<h5 id='hp4' class='text-center'>HP " + character4.healthPoints + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char4").is(':visible')){
      console.log("clear ran");
      $("#char4").toggle();
    }
  },
  redo: function() {
    this.healthPoints = 170;
    this.attackPower = 17;
    this.baseAttackPower = 17;
    this.counterAttackPower = 21;
    if($("#char4").is(':hidden')){
      $("#char4").toggle();
    }
    $("#char4").removeClass("enemy selected").appendTo("#choose-char");
    $("#hp4").html("HP " + this.healthPoints);
  }
}

function setData(){
  $("#char1").data(character1);
  $("#char2").data(character2);
  $("#char3").data(character3);
  $("#char4").data(character4);
}

function createDivs(){
  character1.div();
  character2.div();
  character3.div();
  character4.div();
}

function callRedo(){
  character1.redo();
  character2.redo();
  character3.redo();
  character4.redo();
}

function heroAttack(){
  villainDiv.effect("shake");
  villain.healthPoints -= hero.attackPower;
  hero.attackPower += hero.baseAttackPower;
  villainHP.html("HP " + villain.healthPoints);
  if(villain.healthPoints <= 0){
    villainDied();
  } else if(hero.healthPoints > 0){
    setTimeout(villainAttack, 1000);
  }
}

function villainAttack(){
  heroDiv.effect("shake");
  hero.healthPoints -= villain.attackPower;
  heroHP.html("HP " + hero.healthPoints);
  if(hero.healthPoints <= 0){
    heroDied();
   }  
}

function heroDied(){
  alert("You lose!");
  hero.clear();
  callRedo();
  setData();
  madeSelection = false;
  defenderSelection = false;
}

function villainDied(){
  console.log("villain died");
  villain.clear();
  villainsLeft--;
  defenderSelection = false;
  $("#fight").prop('disabled', true);
}

function winCondition(){
  alert("You win!");
  madeSelection = false;
  defenderSelection = false;
  villainsLeft = 3;
  hero.clear();
  callRedo();
  setData();
}

$( document ).ready(function() {

  createDivs();
  setData();

  $(".char").on("click", function(){

    if(madeSelection === false){
      console.log(".char ran");
      var siblings = $(this).siblings(".char");
      siblings.addClass("enemy");
      siblings.appendTo($("#to-attack"));
      $(this).appendTo($("#your-char")).addClass("selected");
      hero = $(this).data();
      heroHP = $(this).find(`[id*="hp"]`);
      heroDiv = $(this);
      madeSelection = true;
    }

  })

 $("#to-attack").on("click", ".char.enemy", function(){

   if (defenderSelection === false) {
      console.log("to-attack ran");
      $(this).appendTo($("#defender"));
      villain = $(this).data();
      defenderSelection = true;
      villainHP = $(this).find('[id*="hp"]');
      villainDiv = $(this);
      $("#fight").prop('disabled', false);
   }

 })

 $("#fight").on("click", function(){

   heroAttack();

   if(villainsLeft === 0){
    winCondition();
   }

 })
  

})
