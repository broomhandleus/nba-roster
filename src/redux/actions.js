import { FETCH_NBA_PLAYERS } from "./actionTypes";

// This is just an example action, modify or add actions
// as you see fit.
export const fetchNbaPlayers = () => {
  return {
    type: FETCH_NBA_PLAYERS,
    payload: {
      nbaPlayers: []
    }
  };
};
