import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (data) => API.post("/auth/signin", data);
export const signUp = (data) => API.post("/auth/signup", data);
export const fetchAllThreads = () => API.get("/threads");
export const createNewThread = (data) => API.post("/threads", data);
export const updateThread = (data, id) => API.patch(`/threads/${id}`, data);
export const deleteThread = (id) => API.delete(`/threads/${id}`);
export const findUser = (id) => API.get(`/users/${id}`);
