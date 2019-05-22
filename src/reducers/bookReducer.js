import { TOGGLE_SIDEBAR } from "../actions/types";

const initialState = {
  sidebarToggled: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { state, sidebarToggled: !state.sidebarToggled };

    default:
      return state;
  }
}
