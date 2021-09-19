'use strict';

var get_url = 'https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/jinkotosetai_202108.json';

// Rootコンポーネント
const vm = new Vue({
  el: '#app',
  data: {
    pop_info: []
  },
  mounted: function () {
    var self = this;
    axios
      .get(get_url)
      .then(function (response) {
        // console.log(response.data);
        self.pop_info = response.data[0];
        console.log(self.pop_info);
        // self.vtuber = response.data.vtuber;
      })
      .catch(function (error) {
        console.log('取得に失敗しました。', error);
      })
  }
})
