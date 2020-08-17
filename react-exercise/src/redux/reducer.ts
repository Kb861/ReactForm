import { IState, INITIAL_STATE } from "./store";
import { Action } from "./actions";

export default function reducer(state: IState = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case "ADD_USER": {
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    }

    case "DELETE_USER": {
      const users = state.users.slice();
      const selectedItems = action.items.map((i) =>
        users.find((u) => i === u.email)
      );
      const result = users.filter(
        (u) => !selectedItems.find((s) => u.email === s?.email)
      );
      return { ...state, users: result };
    }

    default:
      return state;
  }
}
