import request from "@/utils/request.js";

export const getTopStoriesAPI = function () {
  return request.get("/topstories.json?print=pretty");
};

export const getTopStoryAPI = function (id) {
  return request.get(`/item/${id}.json?print=pretty`);
};
