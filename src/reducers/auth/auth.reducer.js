import { AUTH, SIGN_OUT } from "./auth.types";

export const auth = (state = null, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action.data }));
      return { ...state, authData: action.data.existingUser };

    case SIGN_OUT:
      localStorage.clear();
      return { ...state, authData: null };

    default:
      return state;
  }
};
