import { combineReducers } from "redux";

// We'll use this reducer to store our nba player data.
import nbaPlayers from "./nbaPlayers";

// Feel free to add anymore reducers that you may need.
import nbaTeams from "./nbaTeams";
import teamPlayers from "./teamPlayers";
import stats from "./stats";

export default combineReducers({ nbaPlayers, nbaTeams, teamPlayers, stats });
