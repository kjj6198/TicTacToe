import React from 'react';
import ReactDOM from 'react-dom';
import TicTacObject from '../components/TicTacObject';

export default class ChessBoard extends React.Component {
  static propTypes = {
    
  };

  static defaultProps = {
    chessBoard: [
    	[0,0,0],
    	[0,0,0],
    	[0,0,0]
    ]
  }

  constructor(props) {
    super(props);
  }

  render() {
  	const defaultStyle = {
  	  display: `inline-block`,
  		border: `2px solid #aaa`,
  		width: `33%`,
  		height: `150px`
  	}

  	const upperStyle = Object.assign({}, defaultStyle, {borderTop: `none`});
  	const lowerStyle = Object.assign({}, defaultStyle, {borderBottom: `none`});
  	const middleStyle = Object.assign({}, defaultStyle, {borderRight: `none`})
    return (
      <div>
        {this.props.chessBoard[0].map((value, index) => {
      	const step = [0, index];
        return (<TicTacObject key={index} step={step} />)
      })}
        {this.props.chessBoard[1].map((value, index) => {
        	const step = [1, index];
        return (<TicTacObject key={index} step={step} />)
      })}
        {this.props.chessBoard[2].map((value, index) => {
        const step = [2, index];
	      return (<TicTacObject key={index} step={step} />)
      })}
      </div>
    );
  }
}