import request from "@/utils/request.js";

export const getTopStoriesAPI = function () {
  return request.get("/topstories.json?print=pretty");
};
