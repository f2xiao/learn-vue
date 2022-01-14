<template>
  <li class="news-item">
    <span class="score">{{ score }}</span>
    <span class="title">
      <template v-if="url">
        <a :href="url" target="_blank" rel="noopener">{{ title }}</a>
      </template>
    </span>
    <br />
    <span class="meta">
      <span v-if="type !== 'job'" class="by"> by {{ by }} </span>
      <span v-if="type !== 'job'" class="comments-link">
        | {{ descendants }} comments
      </span>
    </span>
  </li>
</template>

<script>
export default {
  name: "Story",
  props: {
    title: {
      type: String,
      default: "",
    },
    by: {
      type: String,
      default: "",
    },
    score: {
      type: Number,
    },
    time: {
      type: Number,
    },
    url: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    descendants: {
      type: Number,
    },
  },
};
</script>

<style lang="less" scoped>
li {
  list-style: none;
}
.news-item {
  background-color: #fff;
  padding: 20px 30px 20px 80px;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
  .score {
    color: rgb(13, 160, 209);
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
  }
  .meta,
  .host {
    font-size: 0.85em;
    color: #828282;
  }
  a {
    color: #828282;
    text-decoration: none;
    &:hover {
      color: rgb(13, 160, 209);
    }
  }
}
</style>
