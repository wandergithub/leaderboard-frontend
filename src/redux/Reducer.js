import axios from "axios";

// Actions
const PLAYER_INDEX = "player/index";
const PLAYER_CREATE = "player/create";
const RACE_STATS_ADD = "race_stats/add";
// Reducer
const Reducer = (state = { players: [], groups: [] }, action = {}) => {
  switch (action.type) {
    case PLAYER_INDEX:
      return { ...state, players: action.payload };
    case PLAYER_CREATE:
      return { ...state, players: [...state.players, action.payload] };
    case RACE_STATS_ADD:
      return { ...state, players: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const playersFetched = (players) => ({
  type: PLAYER_INDEX,
  payload: players,
});

export const playerCreated = (player) => ({
  type: PLAYER_CREATE,
  payload: player,
});
// Added new race stats update players
export const raceStatsAdded = (players) => ({
  type: RACE_STATS_ADD,
  payload: players,
});

// Thunks
const BASE_URL = "http://localhost:3000";
export const fetchPlayers = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/users`);
  if (response) {
    dispatch(playersFetched(response.data));
  }
};

export const createPlayer = (name) => async (dispatch) => {
  const data = { name: name };
  const response = await axios.post(`${BASE_URL}/users`, data);
  if (response) {
    dispatch(playerCreated(response.data));
  }
};

export const addRaceStats = (list) => async (dispatch) => {
  // Takes a list of race results send to db to be updated and retrieve updated elo list
  const data = { list };
  const response = await axios.post(`${BASE_URL}`, data);
  if (response) {
    // Response should be a new list of players with new calculated elo
    dispatch(raceStatsAdded(response.data));
  }
};

export default Reducer;
