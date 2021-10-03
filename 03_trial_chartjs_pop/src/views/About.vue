<template>
  <div class="container">
    <h1>about this page</h1>
    <div>This page shows Population information of Kanagawa Prefecture.</div>
    <main>
      <div>Data source : <a href="https://www.pref.kanagawa.jp/docs/x6z/tc30/jinko/kohyosiryo.html" target="_blank">神奈川県人口統計調査（月報）</a></div>
    </main>
    <div>
      <span>Contents source : <a href="https://github.com/sgtao/kanagawa_population_info" target="_blank">GitHub</a></span>、
      <span>Copyright: 2021<a href="mailto:sg.tao.so@gmail.com">@sgtao</a></span>
    </div>
  </div>
</template>
<style lang="scss">
  .container {
    display: block;
    main {
      width: 90%;
      margin: 0 0 200px 0;
    }
  }
</style>
<script>
  export default {
    name: 'About',
  }
</script>
