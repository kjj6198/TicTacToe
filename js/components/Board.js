import React from 'react';
import ReactDOM from 'react-dom';
import Board    from '../Board';


class TicTaeToc extends React.Component {
  static propTypes = {
    
  };

  static defaultProps = {
    board: Board
  };
  
  state = {
    step: 0,
    curTurn: 1,
  };

  constructor(props) {
    super(props);
    this.moveTo = this.moveTo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
  }

  nextTurn() {
    const turn = this.state.curTurn === 1 ? 2 : 1;
    this.setState({
      curTurn: turn
    });
  }

  moveTo(x,y, shape) {
    this.props.board.moveTo(x,y, shape);

    if(parseInt(this.props.board.step,10) >= 6) {
      const position = this.props.board.record.shift();
      
      this.props.board.clearPosition(position[0], position[1]);
    }
    this.forceUpdate();


  }

  

  handleClick(e) {
    const position = e.target.dataset["position"].split(',');
    
    this.moveTo(position[0], position[1], this.state.curTurn);

    if(this.props.board.isWin()) {
      alert(this.props.board.isWin());
    }

    this.nextTurn();
  }

  render() {
    const style = {
      display: `inline-block`,
      width: `33%`,
      border: `1px solid #aaa`,
    }

    return (
      <div>
        <span style={style} onClick={this.handleClick} data-position="1,0">{this.props.board.line1[0]}</span>
        <span style={style} onClick={this.handleClick} data-position="1,1">{this.props.board.line1[1]}</span>
        <span style={style} onClick={this.handleClick} data-position="1,2">{this.props.board.line1[2]}</span>
        <span style={style} onClick={this.handleClick} data-position="2,0">{this.props.board.line2[0]}</span>
        <span style={style} onClick={this.handleClick} data-position="2,1">{this.props.board.line2[1]}</span>
        <span style={style} onClick={this.handleClick} data-position="2,2">{this.props.board.line2[2]}</span>
        <span style={style} onClick={this.handleClick} data-position="3,0">{this.props.board.line3[0]}</span>
        <span style={style} onClick={this.handleClick} data-position="3,1">{this.props.board.line3[1]}</span>
        <span style={style} onClick={this.handleClick} data-position="3,2">{this.props.board.line3[2]}</span>
      </div>     
    );
  }
}

ReactDOM.render(
  <TicTaeToc />, document.getElementById('container')

)