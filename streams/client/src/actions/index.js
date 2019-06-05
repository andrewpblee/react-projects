import { SIGN_IN, SIGN_OUT } from "./types";

export const signIn = user_Id => {
  return {
    type: SIGN_IN,
    payload: user_Id
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
