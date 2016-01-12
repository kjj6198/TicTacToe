import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TicTacToe from '../actions/TicTacToeAction';

import ChessBoard from '../components/ChessBoard';



export default class App extends React.Component {
  static propTypes = {
    
  };

  constructor(props) {
    super(props);
   
  }

  render() {
  	const baseStyle = {
      width: `70%`,
      margin: `1rem auto`
    }
    const {step, cur, next} = this.props;

    return (
      
      <div style={baseStyle} >
        <ChessBoard step={step} cur={cur} next={next} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    step: state.TicTacToe.step,
    cur: "CROSS",
    next: state.TicTacToe.shape
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TicTacToe,dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)