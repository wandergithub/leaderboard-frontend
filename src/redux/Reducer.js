import axios from "axios";

// Actions
const PLAYER_INDEX = "player/index";
// Reducer
const Reducer = (state = { players: [], groups: [] }, action = {}) => {
  switch (action.type) {
    case PLAYER_INDEX:
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

// Thunks
const BASE_URL = "http://localhost:3000";
export const fetchPlayers = () => async (dispatch) => {
  const response = await axios.get(`${BASE_URL}/users`);
  if (response) {
    dispatch(playersFetched(response.data));
  }
};
export default Reducer;
