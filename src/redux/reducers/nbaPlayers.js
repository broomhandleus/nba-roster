import { FETCH_NBA_PLAYERS } from "../actionTypes";
const initialState = {};

const nbaPlayers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_PLAYERS: {
      // This is just an example. Feel free to modify or add
      // additional actions.
      return state;
    }
    default: {
      return state;
    }
  }
};

export default nbaPlayers;
