import axios from 'axios';

// Actions
const PLAYER_INDEX = 'player/index';
const PLAYER_CREATE = 'player/create';
const PLAYER_DELETED = 'player/delete';
const RACE_STATS_ADD = 'race_stats/add';
// Reducer
const Reducer = (state = { players: [], groups: [] }, action = {}) => {
  switch (action.type) {
    case PLAYER_INDEX:
      return { ...state, players: action.payload };
    case PLAYER_CREATE:
      return { ...state, players: [...state.players, action.payload] };
    case PLAYER_DELETED:
      return {
        ...state,
        players: [
          ...state.players.filter((player) => player.id !== action.payload.id),
        ],
      };
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

export const raceStatsAdded = (players) => ({
  type: RACE_STATS_ADD,
  payload: players,
});

export const playerDeleted = (player) => ({
  type: PLAYER_DELETED,
  payload: player,
});

// Thunks
const BASE_URL = 'https://leaderboard-dn9d.onrender.com';
export const fetchPlayers = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/users`);
  if (response) {
    dispatch(playersFetched(response.data));
  }
};

export const createPlayer = (name) => async (dispatch) => {
  const data = { name };
  const response = await axios.post(`${BASE_URL}/users`, data);
  if (response) {
    dispatch(playerCreated(response.data));
  }
};

export const addRaceStats = (list) => async (dispatch) => {
  // Takes a list of race results send to db to be updated and retrieve updated elo list
  const data = { list };
  const response = await axios.post(`${BASE_URL}/race`, data);
  if (response) {
    // Response should be a new list of players with new calculated elo
    dispatch(raceStatsAdded(response.data));
  }
};

export const deletePlayer = (id) => async (dispatch) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`);
  if (response) {
    dispatch(playerDeleted(response.data));
  }
};

export default Reducer;
