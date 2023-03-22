import { BASE_URL } from "./urls.js";
import Axios from "axios";

const TOKEN = "fM2WFtriYrY=erfan"; // 

const Headers = (extra_headers = {}) => {
    let headers = {
        "accept": "application/json",
        "Content-Type": "application/json",
        "x-hasura-user-id": TOKEN //It should be read from state but for the sake of the simplicity I hard coded it
    }
    if (extra_headers) {
        headers = Object.assign(headers, extra_headers);
    }
    return headers;
}
export function Url(path) {
    let url = BASE_URL + path;
    return url;
}

const ReturnAxiosInstance = () => {
  return Axios.create({
    baseURL: BASE_URL,
    headers: Headers(),
  });
}

export const Get = async(url = "", params = {}, headers = {}) => {
    const axios = ReturnAxiosInstance();
    return axios.get(Url(url), params=params, headers=Headers(headers));
}

export const Post = async(url = "", data = {}, params = {}, headers = {}) => {
    const axios = ReturnAxiosInstance();
    return axios.post(Url(url), data=data, params=params, headers=Headers(headers));
}