import { TOGGLE_SIDEBAR } from "./types";

export const ToggleSidebar = () => dispatch => {
  dispatch({
    type: TOGGLE_SIDEBAR,
    payload: null
  });
};
