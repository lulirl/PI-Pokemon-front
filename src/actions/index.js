import axios from "axios";
export const GET_POKE = "GET_POKE";
export const SEARCH_POKE = "SEARCH_POKE";
export const SORT_POKE = "SORT_POKE";
export const SORT_ATTACK = "SORT_ATTACK";
export const FILTER_TYPE = "FILTER_TYPE";
export const FILTER_CREATOR = "FILTER_CREATOR";
export const GET_DETAILS = "GET_DETAILS";
export const SEARCH_TYPES = "SEARCH_TYPES";
export const POST_POKE = "POST_POKE";
export const CLEAR_POKE = "CLEAR_POKE";
export const RESET_POKE = "RESET_POKE";
export const GO_BACK = "GO_BACK";
export const TOGGLE_MODE = "TOGGLE_MODE";

export function getPoke() {
  return function (dispatch) {
    axios
      .get(`/api/pokemon`)
      .then((pokemons) => {
        dispatch({
          type: GET_POKE,
          payload: pokemons.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function searchPoke(search) {
  return function (dispatch) {
    axios
      .get(`query?name=` + search)
      .then((pokemon) => {
        dispatch({
          type: SEARCH_POKE,
          payload: pokemon.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SEARCH_POKE,
          payload: [],
        });
      });
  };
}

export function sortPoke(payload) {
  return {
    type: "SORT_POKE",
    payload,
  };
}
export function sortAttack(order) {
  return {
    type: "SORT_ATTACK",
    payload: order,
  };
}

export function filterType(payload) {
  return {
    type: "FILTER_TYPE",
    payload,
  };
}

export function filterByCreator(payload) {
  return {
    type: "FILTER_CREATOR",
    payload,
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
      await axios.get(`/api/pokemon/` + id).then((pokemon) => {
        dispatch({
          type: "GET_DETAILS",
          payload: pokemon.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function searchTypes() {
  return function (dispatch) {
    try {
      axios.get(`/api/types`).then((types) => {
        dispatch({
          type: "SEARCH_TYPES",
          payload: types.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postPoke(payload) {
  return function (dispatch) {
    try {
      axios.post(`/api/pokemon`, payload).then((newPoke) => {
        dispatch({
          type: "POST_POKE",
          payload: newPoke.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function clearPoke() {
  return {
    type: "CLEAR_POKE",
  };
}
export function resetPoke() {
  return {
    type: "RESET_POKE",
  };
}
export function goToPageOne(payload) {
  return {
    type: "GO_BACK",
    payload,
  };
}
export function toggleMode() {
  return {
    type: "TOGGLE_MODE",
  };
}
