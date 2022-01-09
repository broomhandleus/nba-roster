import {
  FETCH_NBA_PLAYERS,
  FETCH_NBA_TEAMS,
  FETCH_STATS,
  SET_PLAYER_LIST,
} from "./actionTypes";
import ballDontLie from "../apis/ballDontLie";

/**
 * Grabbing all players when the page is loaded
 * Doing this because there is not a good way to to filter
 * the /players call by team or teamId like I wanted to do.
 * So, I grab them all at the beginning so i can filter down
 * on my own later.
 */
export const fetchNbaPlayers = () => async (dispatch) => {
  let page = 1;
  let totalPages = -1;
  let playersList = [];

  do {
    const response = await ballDontLie.get(
      `/players?page=${page}&per_page=100`
    );
    // set totalPages based on meta data so we can end the loop
    if (totalPages === -1) {
      totalPages = response.data.meta.total_pages;
    }
    playersList.push.apply(playersList, response.data.data);
    page++;
  } while (page <= totalPages);

  dispatch({ type: FETCH_NBA_PLAYERS, payload: playersList });
};

// Grabs all NBA Team data
export const fetchNbaTeams = () => async (dispatch) => {
  const response = await ballDontLie.get("/teams");
  dispatch({ type: FETCH_NBA_TEAMS, payload: response.data.data });
};

// Sets the current team list
export const setCurrentPlayerList = (players) => {
  return {
    type: SET_PLAYER_LIST,
    payload: players,
  };
};

// grab stats for the selected player
export const fetchStats = (id, playerName) => async (dispatch) => {
  const response = await ballDontLie.get(
    `/season_averages?seasons[]=2021&player_ids[]=${id}`
  );

  dispatch({
    type: FETCH_STATS,
    payload: { playerName, data: response.data.data[0] },
  });
};

export const resetStats = () => {
  return {
    type: FETCH_STATS,
    payload: {},
  };
};
