import { combineReducers } from 'redux';


const initialState = {
	shape: "CIRCLE",
	cur: "CROSS",
	next: "CROSS",
  step: []	
}

export function TicTacToe(state = initialState, action) {

	switch (action.type) {
		case "NEXT_TURN":
			return state;
	}

	return state;


}


const TicTacToeApp = combineReducers({TicTacToe});

export default TicTacToeApp;