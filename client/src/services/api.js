import axios from "axios";
const BASE_URL = "http://localhost:8000/api";

export const addSkill = async (skill) => {
  return await axios.post(`${BASE_URL}/skills`, skill);
};

export const getSkill = async () => {
  return await axios.get(`${BASE_URL}/skills`);
};
export const deleteSkill = async (id) => {
  return await axios.delete(`${BASE_URL}/skills/${id}`);
};
