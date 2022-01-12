<template>
  <div class="home-container">
    <van-nav-bar title="Top News" fixed />
  </div>
</template>

<script>
import { getTopStoriesAPI } from "@/api/topStoriesAPI.js";
export default {
  name: "Home",
  created() {
    this.initStoriesList();
  },
  methods: {
    async initStoriesList() {
      const { data: res } = await getTopStoriesAPI();
      console.log(res, res.length);
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
