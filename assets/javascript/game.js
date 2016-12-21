var madeSelection = false;
var defenderSelection = false;
var villainsLeft = 3;
var wins = 0;
var losses = 0;
var hero;
var villain;
var heroHP;
var villainHP;
var heroDiv;
var villainDiv;
const creatureDeath = $("#creatureDeath");
const hurt = $("#hurt");
const death = $("#death");

var character1 = {
  name: "Doom Guy",
  healthPoints: 100,
  attackPower: 15,
  baseAttackPower: 15,
  counterAttackPower: 20,
  hpID: "hp1",
  div: function(){
    $("#char1").append("<div class='thumbnail' >" + "<h5 class='text-center'>" + character1.name + "</h5>" +
        "<img src='http://rs61.pbsrc.com/albums/h57/Big_Lumpy_Tool/doomdance.gif~c200'>" +
        "<h5 id='hp1' class='text-center'>HP " + character1.healthPoints + " Attack " + character1.baseAttackPower + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char1").is(':visible')){
      $("#char1").toggle("fade");
    }
  },
  redo: function() {
    this.healthPoints = 100;
    this.attackPower = 15;
    this.baseAttackPower = 15;
    this.counterAttackPower = 20;
    if($("#char1").is(':hidden')){
      $("#char1").toggle("fade");
    }
    $("#char1").removeClass("enemy selected").appendTo("#choose-char");
    $("#hp1").html("HP " + this.healthPoints + " Attack " + this.baseAttackPower);
  }
}

var character2 = {
  name: "Machine Gun Dude",
  healthPoints: 150,
  attackPower: 10,
  baseAttackPower: 10,
  counterAttackPower: 30,
  div: function(){
    $("#char2").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character2.name + "</h5>" +
        "<img src='http://cdn.ebaumsworld.com/mediaFiles/picture/872200/81576284.gif'>" +
        "<h5 id='hp2' class='text-center'>HP " + character2.healthPoints + " Attack " + character2.baseAttackPower + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char2").is(':visible')){
      $("#char2").toggle("fade");
    }
  },
  redo: function() {
    this.healthPoints = 150;
    this.attackPower = 10;
    this.baseAttackPower = 10;
    this.counterAttackPower = 30;
    if($("#char2").is(':hidden')){
      $("#char2").toggle("fade");
    }
    $("#char2").removeClass("enemy selected").appendTo("#choose-char");
    $("#hp2").html("HP " + this.healthPoints + " Attack " + this.baseAttackPower);
  }
}

var character3 = {
  name: "Hell Knight",
  healthPoints: 130,
  attackPower: 20,
  baseAttackPower: 20,
  counterAttackPower: 35,
  div: function(){
    $("#char3").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character3.name + "</h5>" +
        "<img src='http://rs624.pbsrc.com/albums/tt323/dangerous327/3118.gif~c200'>" +
        "<h5 id='hp3' class='text-center'>HP " + character3.healthPoints + " Attack " + character3.baseAttackPower + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char3").is(':visible')){
      $("#char3").toggle("fade");
    }
  },
  redo: function() {
    this.healthPoints = 130;
    this.attackPower = 20;
    this.baseAttackPower = 20;
    this.counterAttackPower = 35;
    if($("#char3").is(':hidden')){
      $("#char3").toggle("fade");
    }
    $("#char3").removeClass("enemy selected").appendTo("#choose-char");
    $("#hp3").html("HP " + this.healthPoints + " Attack " + this.baseAttackPower);
  }
}

var character4 = {
  name: "Pain Elemental",
  healthPoints: 170,
  attackPower: 15,
  baseAttackPower: 15,
  counterAttackPower: 40,
  div: function(){
    $("#char4").append("<div class='thumbnail'>" + "<h5 class='text-center'>" + character4.name + "</h5>" +
        "<img src='http://66.media.tumblr.com/6029a122bab4e4b7a99467d2c41715d3/tumblr_mhtvqzI8W21rmu6i5o1_500.gif'>" +
        "<h5 id='hp4' class='text-center'>HP " + character4.healthPoints + " Attack " + character4.baseAttackPower + "</h5>" + "</div>")
  },
  clear: function(){
    if($("#char4").is(':visible')){
      $("#char4").toggle("fade");
    }
  },
  redo: function() {
    this.healthPoints = 170;
    this.attackPower = 15;
    this.baseAttackPower = 15;
    this.counterAttackPower = 40;
    if($("#char4").is(':hidden')){
      $("#char4").toggle("fade");
    }
    $("#char4").removeClass("enemy selected").appendTo("#choose-char");
    $("#hp4").html("HP " + this.healthPoints + " Attack " + this.baseAttackPower);
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
  hurt.get(0).play();
  villain.healthPoints -= hero.attackPower;
  hero.attackPower += hero.baseAttackPower;
  villainHP.html("HP " + villain.healthPoints + " Attack " + villain.baseAttackPower);
  if(villain.healthPoints <= 0){
    villainDied();
  } else if(hero.healthPoints > 0){
    setTimeout(villainAttack, 1000);
  }
}

function villainAttack(){
  console.log("villain attacks");
  hurt.get(0).play();
  heroDiv.effect("shake");
  hero.healthPoints -= villain.attackPower;
  heroHP.html("HP " + hero.healthPoints + " Attack " + hero.baseAttackPower);
  if(hero.healthPoints <= 0){
    heroDied();
   }  
}

function heroDied(){
  alert("You lose!");
  death.get(0).play();
  hero.clear();
  setTimeout(callRedo, 1000);
  setData();
  losses++;
  $("#winloss").html("Wins " + wins + " Losses " + losses);
  madeSelection = false;
  defenderSelection = false;
}

function villainDied(){
  console.log("villain died");
  creatureDeath.get(0).play();
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
  wins++;
  hero.clear();
  setTimeout(callRedo, 1000);
  setData();
  $("#winloss").html("Wins " + wins + " Losses " + losses);
}

$( document ).ready(function() {

  const startAudio = $("#startAudio");
  startAudio.get(0).play();

  createDivs();
  setData();

  $(".char").on("click", function(){

    if(madeSelection === false){
      console.log(".char ran");
      var siblings = $(this).siblings(".char");
      siblings.addClass("enemy");
      siblings.appendTo($("#to-attack"));
      $(this).appendTo($("#your-char"));
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
    setTimeout(winCondition, 3000);
   }

 })
  

})
