import { FETCH_NBA_PLAYERS } from "../actionTypes";
const initialState = [];

const nbaPlayers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_PLAYERS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default nbaPlayers;
