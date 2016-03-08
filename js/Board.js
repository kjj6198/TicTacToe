Board.prototype.CIRCLE = 1;
Board.prototype.CROSS  = 2;

function Board() {
	this.line1  = [0,0,0];
	this.line2  = [0,0,0];
	this.line3  = [0,0,0];
	this.step   = 0;
	this.turn   = 0;
	this.record = [];

}

Board.prototype.clearPosition = function(x, y) {
  this["line" + x][y] = 0;
}

Board.prototype.moveTo = function(x, y, shape) {
	if (shape === undefined) { throw new Error("this point has been occuiped")};
  if(this["line" + x] && this["line" + x][y] !== 0) { throw new Error("this point has been occuiped")}

  this["line" + x][y] = shape;

	this.addStep();
	this.recordStep(x,y);
	return this;
}

Board.prototype.recordStep = function(x, y) {
	this.record.push([x,y]);
}

Board.prototype.nextTurn = function() {
  this.turn = this.turn === 0 ? 1 : 0;

  return this;
}

Board.prototype.addStep = function() {
	this.step++;

	return this;
}


// TODO: extract

Board.prototype.checkSlash = function(shape) {
  let rows1 = [];
  let rows2 = [];
  for(let i = 1; i <= 3; i++) {
    rows1.push(this["line" + i][i - 1]);
  }

  for(let i = 3; i >= 1; i--) {
    rows2.push(this["line" + i][i - 1]);
  }
  return rows1.every((val) => val === shape) || rows2.every(val => val === shape);

}

Board.prototype.checkCross = function(shape) {
  let rows = [];
  for(let i = 1; i <= 3; i++) {
    const isTheSame = this["line" + i].every(val => val === shape);

    if(isTheSame) { return true}
  }
  return false;
}

Board.prototype.checkHorizontal = function(shape) {
  for(let i = 0; i < 3; i++) {
    
    let horizontal = [];
    for(let j = 1; j <= 3; j++) {
      horizontal.push(this["line" + j][i] === shape);
    }
    
    if(horizontal.every((val) => val === true)) {
      return true;
    }
  }

  return false;
}


Board.prototype.isWin = function() {
  for(let i = 1; i <= 2; i++) {
    if(this.checkHorizontal(i) || this.checkCross(i) || this.checkSlash(i)) {
      return i;
    }
  }

  return false;
}

let tic = new Board();
module.exports = tic;