var images = ["one","two","three","four","five","six","seven","eight",
"nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen",
"seventeen","eighteen","nineteen","twenty"];
var learning_arrays = {};

function drawGrid() {

  var previousGrid = document.getElementById('grid');
  var form = document.getElementById('form');
  var clicked_array = [];
  var output = document.getElementById('output');

      console.log(learning_arrays);
  if(previousGrid){
    var clicked = previousGrid.querySelectorAll(".clicked");
    clicked.forEach(function(element){
      clicked_array[element.id]=1;
    })
    if(learning_arrays[previousGrid.getAttribute('name')]===undefined){
      learning_arrays[previousGrid.getAttribute('name')]=clicked_array;
      learning_arrays[previousGrid.getAttribute('name')]['total']=1;
    }
    else {
      clicked.forEach(function(element){
        var key = element.id;
        console.log(key);
        console.log(learning_arrays[previousGrid.getAttribute('name')]);
          if(learning_arrays[previousGrid.getAttribute('name')][key]>0){
            learning_arrays[previousGrid.getAttribute('name')][key]++;
          }
          else {
            learning_arrays[previousGrid.getAttribute('name')][key]=1;
          }
          console.log(learning_arrays[previousGrid.getAttribute('name')][key]);
      })
      learning_arrays[previousGrid.getAttribute('name')]['total']+=1;
    }


    if(clicked_array===undefined||clicked_array.length == 0){
      clicked_array = "No Abnomalities";
    }
    var output_text = document.createTextNode(learning_arrays[previousGrid.getAttribute('name')]);
    output.appendChild(output_text);
    output.appendChild(document.createElement("br"));

    form.removeChild(previousGrid); 
  }
  else{
    var capcom_message = document.createElement("div");
    capcom_message.style.textAlign = 'center';
    capcom_message.appendChild(document.createTextNode("Verify you're a radiologist."));
    capcom_message.appendChild(document.createElement("br"));
    capcom_message.appendChild(document.createTextNode("Complete the Cap-Com below, selecting all squares with abnormalities"));
    form.appendChild(capcom_message);
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


export {
  drawGrid
}


function clickableGrid( rows, cols, callback ){
    var i=0;
    var grid = document.createElement('table');
    grid.className = 'grid';

    var index = Math.floor(Math.random()*images.length);
    grid.classList.add(images[index]);
    grid.setAttribute("name",images[index]);

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

