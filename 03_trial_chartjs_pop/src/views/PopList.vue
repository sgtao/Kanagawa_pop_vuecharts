// template
<template>
  <div class="PopList">
    <v-container text-xs-center justify-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>市町村別人口一覧</h1>
          <div v-if="get_error">
            {{ err_message }}
          </div>
          <div v-else>
            <v-flex xs12 mt-5 justify-center>
              <p>各市町村の情報（集計年月：{{ get_month }}）：</p>
              <v-data-table :headers='headers' :items='city_info' color="primary" app lighten class="city_info">
              </v-data-table>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
// 
// style
<style lang="scss">
  $color-pack: false;
  .PopList {
    display: block;
    margin: 0 auto;
  }
  .city_info {
    width: 90%;
    margin: 0 auto;
    background-color: white;
    table {
      thead tr {
        background-color: #8C9EFF;
        th {
          border: 1px solid white;
          text-align: left;
          vertical-align: top;
        }
      }
      tbody {
        tr {
          border-radius: 25px;
          border: 0;
          &:nth-child(2n){
            background-color: #C8E6C9;
          }
          &:hover {
            background-color: #536DFE;
          }
        }
      }
    }
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
      headers: [
        { text: 'コード', value: 'code', class: 'px-0' },
        { text: '名称', value: 'city_name', class: 'px-0' },
        { text: '地域', value: 'area_name', class: 'px-0' },
        { text: '世帯数', value: 'household', class: 'px-0' },
        { text: '人口', value: 'population', class: 'px-0' },
        { text: '人口増減(先月比)', value: 'change_pop', class: 'px-0' },
        { text: '１世帯人数', value: 'pop_per_house', class: 'px-0' },
        { text: '人口密度', value: 'pop_per_area', class: 'px-0' },
      ],
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
