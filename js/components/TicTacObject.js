import React from 'react';
import ReactDOM from 'react-dom';



export default class TicTacObject extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
  	// set up your tic tac toe logic here.
  	// 
  }


  render() {
    return (
    	<span> </span>  
    );
  }
}