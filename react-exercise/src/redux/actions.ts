import User from "../model/User";
export type Action =
  | {
      type: "ADD_USER";
      user: User;
    }
  | {
      type: "DELETE_USER";
      items: string[];
    };
