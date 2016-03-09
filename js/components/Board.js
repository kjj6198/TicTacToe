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
    gameover: false,
  };

  constructor(props) {
    super(props);
    this.moveTo = this.moveTo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.renderToBoard = this.renderToBoard.bind(this);
    this.showGameOverModal = this.showGameOverModal.bind(this);
  }

  componentDidUpdate() {
    if(this.state.gameover) {
      this.showGameOverModal();
      this.clearAll();
      this.setState({
        gameover: false,
        curTurn: 1,
        step: 0,
      });

      this.props.board = Board;
    }
  }

  showGameOverModal() {

  }

  clearAll() {
    this.props.board.clearPosition(1,0);
    this.props.board.clearPosition(1,1);
    this.props.board.clearPosition(1,2);
    this.props.board.clearPosition(2,0);
    this.props.board.clearPosition(2,1);
    this.props.board.clearPosition(2,2);
    this.props.board.clearPosition(3,0);
    this.props.board.clearPosition(3,1);
    this.props.board.clearPosition(3,2);
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
    


  }

  renderToBoard(shape) {
    if(shape === 0) { return "";}
    if(shape === 1) { return "O";}
    if(shape === 2) { return "X";}
  }
  

  handleClick(e) {
    const position = e.target.dataset["position"].split(',');
    
    this.moveTo(position[0], position[1], this.state.curTurn);

    if(this.props.board.isWin()) {
      this.setState({gameover: true});
    }

    this.nextTurn();
  }

  render() {
    const style = {
      width: `150px`,
      height: `150px`,
      lineHeight: `150px`,
      fontSize: `6rem`,
      textAlign: `center`,
      flexWrap: `wrap`,
      border: `1px solid #aaa`,
      transition: `all ease 0.4s`
    };

    const topStyle    = Object.assign({}, style, {border:`none`,borderTop: `1px solid #aaa`});
    const bottomStyle = Object.assign({}, style, {border:`none`,borderBottom: `1px solid #aaa`});

    const flexStyle = {
      display: 'flex',
    }

    const gameOverModal = {};

    return (
      <div style={{display: 'flex', flexWrap: 'wrap', width: `50%`, margin: ' 1rem auto'}}>
        <div  style={flexStyle}>
          <span style={topStyle} onClick={this.handleClick} data-position="1,0">{this.renderToBoard(this.props.board.line1[0])}</span>
          <span style={topStyle} onClick={this.handleClick} data-position="1,1">{this.renderToBoard(this.props.board.line1[1])}</span>
          <span style={topStyle} onClick={this.handleClick} data-position="1,2">{this.renderToBoard(this.props.board.line1[2])}</span>  
        </div>

        <div style={flexStyle}>
          <span style={style} onClick={this.handleClick} data-position="2,0">{this.renderToBoard(this.props.board.line2[0])}</span>
          <span style={style} onClick={this.handleClick} data-position="2,1">{this.renderToBoard(this.props.board.line2[1])}</span>
          <span style={style} onClick={this.handleClick} data-position="2,2">{this.renderToBoard(this.props.board.line2[2])}</span>  
        </div>
        
        <div style={flexStyle}>
          <span style={bottomStyle} onClick={this.handleClick} data-position="3,0">{this.renderToBoard(this.props.board.line3[0])}</span>
          <span style={bottomStyle} onClick={this.handleClick} data-position="3,1">{this.renderToBoard(this.props.board.line3[1])}</span>
          <span style={bottomStyle} onClick={this.handleClick} data-position="3,2">{this.renderToBoard(this.props.board.line3[2])}</span>
        </div>

        <div style={gameOverModal} >

        </div>
        
      </div>     
    );
  }
}

ReactDOM.render(
  <TicTaeToc />, document.getElementById('container')

)