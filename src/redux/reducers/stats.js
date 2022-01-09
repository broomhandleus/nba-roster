import { FETCH_STATS } from "../actionTypes";
const initialState = {};

const stats = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATS: {
      if (action.payload === undefined) {
        return initialState;
      }
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default stats;
