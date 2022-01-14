<template>
  <div class="home-container">
    <van-nav-bar title="Top News" fixed />

    <Story
      v-for="item in stories"
      :key="item.id"
      :title="item.title"
      :by="item.by"
      :time="item.time"
      :url="item.url"
      :score="item.score"
      :descendants="item.descendants"
    ></Story>
  </div>
</template>

<script>
import { getTopStoriesAPI, getTopStoryAPI } from "@/api/topStoriesAPI.js";
import Story from "@/components/Story/Story.vue";

export default {
  components: { Story },
  name: "Home",
  data() {
    return {
      totalStories: [],
    };
  },
  computed: {
    stories() {
      return this.totalStories.slice(0, 20);
    },
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
        this.totalStories.push(item.data);
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
