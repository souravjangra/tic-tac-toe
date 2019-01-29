// Restart Game button

document.addEventListener("DOMContentLoaded", function() {

var restart = document.querySelector("#bopo");

// Grab all the squares
var squares = document.querySelectorAll('td');

// Clear all the squares
function clearBoard(){
  //alert("sdfsd")
  for(var i=0;i<squares.length;i++){
    squares[i].textContent = '';
  }
}


//console.log(restart)
restart.addEventListener('click',clearBoard);

// Check the square marker
function changeMarker(){
  if(this.textContent === ''){
    this.textContent = 'X';
  }
  else if(this.textContent === 'X'){
    this.textContent = 'O';
  }
  else{
    this.textContent = '';
  }
}

for(var i = 0; i < squares.length;i++){
  squares[i].addEventListener('click',changeMarker);
}
//
// var cellOne = document.querySelector('#one')
// cellOne.addEventListener('click',function(){
//   if(cellOne.textContent === ''){
//     cellOne.textContent = 'X';
//   }
//   else if(cellOne.textContent === 'X')
//   {
//     cellOne.textContent = 'O';
//   }
//   else{
//
//     cellOne.textContent = '';
//   }
// })

});
