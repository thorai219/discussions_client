import * as API from "../../api";
import { AUTH, SIGN_OUT } from "./auth.types";

export const signIn = (userData, history) => async (dispatch) => {
  try {
    const { data } = await API.signIn(userData);

    dispatch({ type: AUTH, data });

    history.push("/threads");
  } catch (e) {
    console.log(e);
  }
};

export const signUp = (userData, history) => async (dispatch) => {
  try {
    const { data } = await API.signUp(userData);

    dispatch({ type: AUTH, data });

    history.push("/");
  } catch (e) {
    console.log(e);
  }
};

export const signOut = (history) => async (dispatch) => {
  try {
    dispatch({ type: SIGN_OUT });
    history.push("/");
  } catch (e) {
    console.log(e);
  }
};
