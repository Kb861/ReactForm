import reducer from "./reducer";
import { create } from "redux-react-hook";
import { Action } from "./actions";
import { createStore, Store } from "redux";
import User from "../model/User";

export interface IState {
  users: User[];
}

export const INITIAL_STATE: IState = {
  users: [
    {
      firstName: "Jan",
      lastName: "Kowalski",
      email: "test@tp.pl",
      age: 22,
      phone: "555333222",
    },
    {
      firstName: "Adam",
      lastName: "Nowak",
      email: "atest@test.pl",
      age: 62,
      phone: "222333444",
    },
  ],
};

export function makeStore(): Store<IState, Action> {
  return createStore(reducer, INITIAL_STATE);
}

export const { StoreContext, useDispatch, useMappedState } = create<
  IState,
  Action,
  Store<IState, Action>
>();
