import {
  ALL_THREADS,
  NEW_THREAD,
  UPDATE_THREAD,
  DELETE_THREAD,
} from "./threads.types";

export const threads = (state = [], action) => {
  switch (action.type) {
    case ALL_THREADS:
      return { ...state, threads: action.threads };
    case NEW_THREAD:
      return { ...state, threads: action.threads };
    case UPDATE_THREAD:
      return { ...state, threads: action.thread };
    case DELETE_THREAD:
      return { ...state, threads: action.thread };
    default:
      return state;
  }
};
