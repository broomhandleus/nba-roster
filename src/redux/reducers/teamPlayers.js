import { SET_PLAYER_LIST } from "../actionTypes";
const initialState = [];

const teamPlayers = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYER_LIST: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default teamPlayers;
