<template>
  <div class="article-container">
      <!-- title -->
      <div class="header-box">
          <slot name="title"></slot>
      </div>
      <!-- content -->
      <div class="content-box"><slot name="content"></slot></div>
      <!-- author -->
      <div class="footer-box"><slot name="author"></slot></div>
  </div>
</template>

<script>
export default {
    name: 'MyArticle',
}
</script>

<style lang="less" scoped>
.article-container{
    width: 300px;
    margin: 0 auto;
}
.header-box{
    height: 50px;
    background: pink;
}
.content-box{
    height: 450px;
    background: lightblue;
}
.footer-box{
    height: 50px;
    background: orange;
}
</style>