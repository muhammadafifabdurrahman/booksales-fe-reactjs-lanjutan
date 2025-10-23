// src/_services/genres.js
import API from "../_api";

export const getGenres = async () => {
  const { data } = await API.get("/genres");
  // sesuai controller Laravel: response.data.data atau response.data.data?
  // di Laravel controller lo, response ada di data => genres. jadi:
  return data.data || [];
};

export const createGenre = async (payload) => {
  const { data } = await API.post("/genres", payload);
  return data.data;
};
