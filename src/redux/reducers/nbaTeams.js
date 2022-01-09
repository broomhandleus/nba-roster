import { FETCH_NBA_TEAMS } from "../actionTypes";
const initialState = [];

const nbaTeams = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NBA_TEAMS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default nbaTeams;
