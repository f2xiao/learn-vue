import axios from "axios";

// Hack News API
const request = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
});

export default request;
