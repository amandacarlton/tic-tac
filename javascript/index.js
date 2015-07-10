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

var logger = function(index) {
  return function(){
    console.log("you clicked region number " + index);
    if(counter%2 === 0) {
      alert('x')
    }
    else {
      alert('o')
    }
    counter++
  };
};


for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", logger(i));
}
