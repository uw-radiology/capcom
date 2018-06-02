var images = ["one","two","three","four","five","six","seven"];
var learning_arrays = [];

function drawGrid() {

  var previousGrid = document.getElementById('grid');
  var form = document.getElementById('form');
  var clicked_array = [];
  var output = document.getElementById('output');

  if(previousGrid){
    var clicked = previousGrid.querySelectorAll(".clicked");
    clicked.forEach(function(element){
      clicked_array.push(element.id);
    })
    learning_arrays.push(clicked_array);

    var output_text = document.createTextNode(clicked_array);
    output.appendChild(output_text);
    output.appendChild(document.createElement("br"));

    form.removeChild(previousGrid); 
  }

  var grid = clickableGrid(4,4,function(el,row,col,i){
      //ifnotclicked
      if (el.className==='') {
        el.className='clicked';
      }
      else if (el.className==='clicked'){
        el.className='';
      }
  });

  grid.id = 'grid';
  form.appendChild(grid); 
}

function show_learning_array(){
  return learning_arrays;
}

export {
  drawGrid,
  show_learning_array
}


function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';

    var index = Math.floor(Math.random()*images.length);
    grid.classList.add(images[index]);

    var grid_i=0;
    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.id=i++;
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

