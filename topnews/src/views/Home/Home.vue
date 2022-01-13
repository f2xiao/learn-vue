<template>
  <div class="home-container">
    <van-nav-bar title="Top News" fixed />
  </div>
</template>

<script>
import { getTopStoriesAPI, getTopStoryAPI } from "@/api/topStoriesAPI.js";

export default {
  name: "Home",
  data() {
    return {
      stories: [],
    };
  },
  created() {
    this.initStoriesList();
  },
  methods: {
    async initStoriesList() {
      const { data: res } = await getTopStoriesAPI();

      let promises = res.map(function (id) {
        return getTopStoryAPI(`${id}`).then((result) => {
          return result;
        });
      });

      let results = await Promise.all(promises).then((results) => results);

      results.forEach((item) => {
        this.stories.push(item.data);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: rgb(13, 160, 209);
  }

  /deep/ .van-nav-bar__title {
    color: white;
  }
}
</style>
