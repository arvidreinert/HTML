var turn = "X"
var clear = ""
var turns = 0
var game_over = false
var win_conditions = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
document.getElementById("status").innerText = "Welcom, it's X's turn.";

var winconditioncheck = function (symbol) {
  var win = true;
  for (cond in win_conditions){
    win = true
    for (num in win_conditions[cond]){
      if (document.getElementById("b"+win_conditions[cond][num]).innerText !== symbol){
        win = false
      }
    }
    if (win === true){
      for (num in win_conditions[cond]){
        document.getElementById("b"+win_conditions[cond][num]).style = "color:red"
      }
      return [symbol,true];
    }
  }
  return [symbol,false];
}

var butonclick = function (id) {
  var bid = id;
  var x = function ( ) {
    var p = document.getElementById(bid);
    if (game_over === false) {
      if (p.innerText === clear){
        p.innerText = turn;
        console.log(winconditioncheck(turn)[1]);
        if (winconditioncheck(turn)[1] === true){
          document.getElementById("status").innerText = "Congrats, "+turn+" won this round!";
          game_over = true;
        }
        turn = (turn === "X") ? "O" : "X";
        turns = turns + 1
      }
      else {
        p.innerText = p.innerText;
      }
      if (game_over === false) {
        document.getElementById("status").innerText = "It's "+turn+"'s turn!";
      }
      if (turns === 9 && game_over === false){
        document.getElementById("status").innerText = "There is no winner this round!";
      }
    }
  };
  return x
};

var reset = function (){
 game_over = false
 turns = 0
 document.getElementById("status").innerText = "Hi again, it's "+turn+"'s turn.";
 document.getElementById("b1").innerText = clear;
 document.getElementById("b2").innerText = clear;
 document.getElementById("b3").innerText = clear;
 document.getElementById("b4").innerText = clear;
 document.getElementById("b5").innerText = clear;
 document.getElementById("b6").innerText = clear;
 document.getElementById("b7").innerText = clear;
 document.getElementById("b8").innerText = clear;
 document.getElementById("b9").innerText = clear;
 document.getElementById("b1").style = "color:black";
 document.getElementById("b2").style = "color:black";
 document.getElementById("b3").style = "color:black";
 document.getElementById("b4").style = "color:black";
 document.getElementById("b5").style = "color:black";
 document.getElementById("b6").style = "color:black";
 document.getElementById("b7").style = "color:black";
 document.getElementById("b8").style = "color:black";
 document.getElementById("b9").style = "color:black";
};

document.getElementById("b1").onclick = butonclick("b1");
document.getElementById("b2").onclick = butonclick("b2");
document.getElementById("b3").onclick = butonclick("b3");
document.getElementById("b4").onclick = butonclick("b4");
document.getElementById("b5").onclick = butonclick("b5");
document.getElementById("b6").onclick = butonclick("b6");
document.getElementById("b7").onclick = butonclick("b7");
document.getElementById("b8").onclick = butonclick("b8");
document.getElementById("b9").onclick = butonclick("b9");
document.getElementById("reset").onclick = reset;