'use strict';

// var get_url = 'https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/jinkotosetai_202108.json';
var get_url = 'https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/jinkotosetai_202108.jso'; // wrong URL

// Rootコンポーネント
const vm = new Vue({
  el: '#app',
  data: {
    get_error: false,
    err_message: "取得に失敗しました。",
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
        console.log(self.err_message, error);
        self.get_error = true;
      })
  }
})
