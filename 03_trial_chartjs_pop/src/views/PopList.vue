// template
<template>
  <div class="PopList">
    <h1>市町村別人口一覧</h1>
    <div v-if="get_error">
      {{ err_message }}
    </div>
    <div v-else>
     <div>
        <p>各市町村の情報（集計年月：{{ get_month }}）：</p>
        <ol>
          <li v-for="(city,key) in city_info" :key="key">
            <span>{{ city.city_name }}</span>：
            <span>{{ city.area_name }}地域</span>：
            <span>{{ city.population.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }}（人）</span>
            <span>（先月からの増減＝{{ city.change_pop.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,') }}（人））</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
// 
// style
<style lang="scss">
  .PopList {
    display: block;
    margin: 0 auto;
  }
</style>
//
<script>
import axios from 'axios'
//
var base_url = 'https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/';
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
//
export default {
  name: 'PopList',
  data () {
    return {
      get_error: false,
      err_message: "データ取得に失敗しました。",
      get_month: "202108",
      get_info: [],
      pref_info: [],
      city_info: [],
    }
  },
  created () {
    var self = this;
    let get_url = base_url + 'jinkotosetai_' + self.get_month + '.json';
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
  },
}
</script>
