var cells = document.getElementsByClassName('cell');
// for(var i = 0; i < cells.length; i++) {
//   cells[i].addEventListener('click', function(i) {
//      alert("you clicked region number " + i);
//   });
// };


// i=2;
// cells[2].addEventListener('click', function(i) {
//   alert("you clicked region number " + i);
//   });

var counter = 0;
var winningCombo = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

var clearBoard = function() {
  for(var i =0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

var logger = function(index) {
  return function(){
    //console.log("you clicked region number " + index);
  if (cells[index].innerHTML.length===0){

    if(counter%2 === 0) {
      cells[index].innerHTML="X";
      //console.log(cells[3].innerHTML);
    }
    else {
      cells[index].innerHTML="O";
    }
    counter++;
  }

  var notEmpty = 0;
  for(var j=0; j<winningCombo.length; j++){
    if(cells[winningCombo[j][0]].innerHTML != "" && cells[winningCombo[j][1]].innerHTML !="" && cells[winningCombo[j][2]].innerHTML != ""){
      if(cells[winningCombo[j][0]].innerHTML===cells[winningCombo[j][1]].innerHTML && cells[winningCombo[j][0]].innerHTML===cells[winningCombo[j][2]].innerHTML) {
        var winner = cells[winningCombo[j][0]].innerHTML;
        alert(winner + "'s" + " Won");
        clearBoard();
        break;
      }
      else {
        notEmpty++;
        if(notEmpty === 8) {
          alert("Draw")
          clearBoard();
          break;
        }
      }
    }
  }
 };
};


for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", logger(i));



  }
