let grid = [];
let size = 50;
let numRows = 6;
let numCols = 5;


function setup() {
  createCanvas(400, 400);
  setGrid();
  console.log(grid.length)
}

function draw() {
  background(220);
  displayGrid()
}

function setGrid(){
  for(var i = 0; i<numRows; i++){
    for(var j = 0; j<numCols; j++){
      grid.push(new Cell(j*size,i*size,size,200,false))
    }
  }
}


function displayGrid(){
  for(var i = 0; i<grid.length; i++){
    
    grid[i].display();
    
  }
}
