import axios from "axios";

export function http() {
  return axios.create({
    baseURL: "http://localhost:9000/api",
  });
}
