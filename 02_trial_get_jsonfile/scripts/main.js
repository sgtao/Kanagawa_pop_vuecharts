'use strict';

var get_url = 'https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/jinkotosetai_202108.json';

var App = Object.freeze({
  name: 'My App',
  version: '0.0.2',
  helpers: {
    filterPrefInfo: function (info_array) {
      let filtered_array = [];
      for (let info of info_array) {
        if (info.area_name == "県全域") {
          filtered_array.push(info);
        }
      }
      return filtered_array;
    },
    filterCityInfo: function (info_array) {
      let filtered_array = [];
      for (let info of info_array) {
        if ((info.code > 0) && (info.area_name != "県全域") && (info.city_type != "区")) {
          filtered_array.push(info);
        }
      }
      return filtered_array;
    }
  }
});

// Rootコンポーネント
const vm = new Vue({
  data: {
    get_error: false,
    err_message: "取得に失敗しました。",
    get_info : [],
    pref_info: [],
    city_info: [],
  },
  mounted: function () {
    var self = this;
    axios
      .get(get_url)
      .then(function (response) {
        // console.log(response.data);
        self.get_info = response.data[0];
        // console.log(self.get_info);
        self.pref_info = App.helpers.filterPrefInfo(self.get_info);
        console.log(self.pref_info);
        self.city_info = App.helpers.filterCityInfo(self.get_info);
        console.log(self.city_info);
      })
      .catch(function (error) {
        console.log(self.err_message, error);
        self.get_error = true;
      })
  }
});
vm.$mount('#app');