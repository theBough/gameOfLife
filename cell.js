function Cell(x,y,size,col,alive){
  this.x = x
  this.y = y
  this.size = size
  this.col = col
  this.alive = alive
  
  this.display = function(){
    fill(col)
    rect(this.x,this.y,this.size,this.size);
  }
}
