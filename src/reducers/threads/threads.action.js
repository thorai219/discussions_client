import * as API from "../../api";
import {
  ALL_THREADS,
  NEW_THREAD,
  UPDATE_THREAD,
  DELETE_THREAD,
} from "./threads.types";

export const fetchAllThreads = () => async (dispatch) => {
  try {
    const response = await API.fetchAllThreads();
    const threads = response.data.response;
    dispatch({ type: ALL_THREADS, threads });
  } catch (e) {
    console.log(e);
  }
};

export const newThread = (data) => async (dispatch) => {
  try {
    const response = await API.createNewThread(data);
    const threads = response.data.threads;

    dispatch({ type: NEW_THREAD, threads });
  } catch (e) {
    console.log(e);
  }
};

export const updateThread = (data, id) => async (dispatch) => {
  try {
    const threads = await API.updateThread(data, id);
    dispatch({ type: UPDATE_THREAD, threads });
  } catch (e) {
    console.log(e);
  }
};

export const deleteThread = (id) => async (dispatch) => {
  try {
    const threads = await API.deleteThread();
    dispatch({ type: DELETE_THREAD, threads });
  } catch (e) {
    console.log(e);
  }
};
