import axios from "axios";

// Actions
const PLAYER_INDEX = "player/index";
const PLAYER_CREATE = "player/create";
// Reducer
const Reducer = (state = { players: [], groups: [] }, action = {}) => {
  switch (action.type) {
    case PLAYER_INDEX:
      return { ...state, players: action.payload };
    case PLAYER_CREATE:
      return { ...state, players: [...state.players, action.payload] };
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

export default Reducer;
