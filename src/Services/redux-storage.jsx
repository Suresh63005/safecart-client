import { createStore } from "redux";

export const store = createStore(reducer);

function reducer(state, action) {
  switch (action.type) {
    case "userdata":
      return { ...state, user: action.data };
  }
}
