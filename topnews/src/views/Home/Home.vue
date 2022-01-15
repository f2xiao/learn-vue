<template>
  <div class="home-container">
    <van-nav-bar title="Top News" fixed />

<van-pull-refresh v-model="refreshing" @refresh="onRefresh" loosing-text="release to refresh" loading-text="loading">    
<van-list
  v-model="loading"
  :finished="finished"
  finished-text="Sorry no more stories!"
  loading-text="Loading"
  @load="onLoad"
>
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
</van-list>
</van-pull-refresh>
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
      stories: [],
      storiesIdArr: [],
      page:1,
      limit: 20,
      loading: true,
      finished: false,
      refreshing: false,
    };
  },

  created() {
    this.initStories();
  },
  methods: {
    async initStories() {
      let { data: res } = await getTopStoriesAPI();
      this.storiesIdArr = res;
      this.stories=await this.loadStories(this.page,this.limit);
      this.loading = false;
    },

    async loadStories(page, limit){
      const start = (page-1)*limit;
      const end = page*limit;
      let dataArr=[];
      let promises = this.storiesIdArr.slice(start,end).map(function (id) {
        return getTopStoryAPI(`${id}`).then((result) => {
          return result;
        });
      });

      let results = await Promise.all(promises).then((results) => results);

      results.forEach((item) => {
        dataArr.push(item.data);
      });

      return dataArr;
    },
    async onLoad(){
       this.page++;
      let moreStories = await this.loadStories(this.page, this.limit);
      setTimeout(() => {
        /* moreStories.forEach(item=>{
          this.stories.push(item)
        }) */

        if (this.refreshing) {
          this.stories = [];
          this.refreshing = false;
        }
        this.stories = [... this.stories, ...moreStories]
        this.loading = false;

        if (this.stories.length >= this.storiesIdArr.length) {
          this.finished = true;
        }
      }, 1000);
  },
  onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  }
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
