function drawGrid() {
  var lastClicked;
  var grid = clickableGrid(4,4,function(el,row,col,i){
      console.log("You clicked on element:",el);
      console.log("You clicked on row:",row);
      console.log("You clicked on col:",col);
      console.log("You clicked on item #:",i);

      //ifnotclicked
      if (el.className==='') {
        el.className='clicked';
      }
      else if (el.className==='clicked'){
        el.className='';
      }
      lastClicked = el;
  });

  grid.id = 'grid';
  var previousGrid = document.getElementById('grid');
  var form = document.getElementById('form');
  if(previousGrid){
    form.removeChild(previousGrid); 
  }
  form.appendChild(grid); 
}
export {
  drawGrid
}



var images = ["one","two","three","four","five","six","seven"];

function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';

    var index = Math.floor(Math.random()*images.length);
    grid.classList.add(images[index]);

    for (var r=0;r<rows;++r){
        var tr = grid.appendChild(document.createElement('tr'));
        for (var c=0;c<cols;++c){
            var cell = tr.appendChild(document.createElement('td'));
            cell.addEventListener('click',(function(el,r,c,i){
                return function(){
                    callback(el,r,c,i);
                }
            })(cell,r,c,i),false);
        }
    }
    return grid;
}

