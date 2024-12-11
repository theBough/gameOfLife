let grid = [];
let size = 50;
let numRows = 6;
let numCols = 5;
let initialSet = [6,7,9,10,12,19]
let aliveCol = 50
let deadCol = 200

function setup() {
  createCanvas(400, 400);
  setGrid();
  setIteration(initialSet);
}

function draw() {
  background(220);
  displayGrid()
}

function setGrid(){
  for(var i = 0; i<numRows; i++){
    for(var j = 0; j<numCols; j++){
      grid.push(new Cell(j*size,i*size,size,deadCol,false))
    }
  }
}// end function

function displayGrid(){
  for(var i = 0; i<grid.length; i++){
    
    grid[i].display();
    
  }
}//end function

function clearGrid(){
  for(var i = 0; i<grid.length; i++){
    
    grid[i].col = deadCol;
    grid[i].alive = false;
    
  }
}

function setIteration(newSet){
  clearGrid()
  for(var i = 0; i<newSet.length; i++){
    liveCell = newSet[i]; //find index for alive cell
    grid[liveCell].col = aliveCol;//change cell to alive
    grid[liveCell].alive = true;
  }
}

function keyPressed(){
  if(key=='n'){
    makeNewSet();
  }
}

//function for key press
function makeNewSet(){
  let newSet = [];
  //make a new iteration of the game
  for(var i=0; i<grid.length; i++){
    let aliveNeighbours = findAliveNeighbours(i)
    if(aliveNeighbours == 2 || aliveNeighbours == 3){
      newSet.push(i);
    }
  }

  setIteration(newSet);
}

function findAliveNeighbours(cellNum){
  let aliveNeighbours = 0;

  //for all cells
  //check if cell is on the left edge
  aliveNeighbours += checkLeft(cellNum)
  //check if cell is on the right edge
  aliveNeighbours += checkRight(cellNum)
  //check if cell is on top
  aliveNeighbours += checkUp(cellNum)
  //check if cell is on the bottom
  aliveNeighbours += checkDown(cellNum)
  //return number of alive neighbours
  
  return aliveNeighbours;
}//end function

function checkLeft(cellNum){
  let isAlive = 0
  
  if(cellNum % numCols > 0){
    if(grid[cellNum - 1].alive){
      isAlive++;
    }
  }//end if
  
  return isAlive
}//end function

function checkRight(cellNum){
  let isAlive = 0
  
  if(cellNum % numCols < 4){
    if(grid[cellNum + 1].alive){
      isAlive++;
    }
  }//end if
  
  return isAlive
}//end function

function checkUp(cellNum){
  let isAlive = 0
  
  if(cellNum > 4){
    if(grid[cellNum - numCols].alive){
      isAlive++;
    }
  }//end if
  
  return isAlive
}//end function

function checkDown(cellNum){
  let isAlive = 0
  
  if(cellNum < 20){
    if(grid[cellNum + numCols].alive){
      isAlive++;
    }
  }//end if
  
  return isAlive
}//end function
