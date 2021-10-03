// template
<template>
  <div class="PopList">
    <v-container text-xs-center justify-center>
      <v-layout row wrap>
        <v-flex xs12>
          <h1>市町村別人口一覧</h1>
          <div>（選択）地域：
            <span class="select_field">
              <select v-model="select_area">
                <option disabled value="">全域（選択して下さい）</option>
                <option v-for="area in area_categories" :value="area.name" :key="area.id" >
                  {{area.name}}
                </option>
              </select>
              <button @click="clear_category">×(clear)</button>
            </span>
          </div>
          <div>（選択）集計月：
            <span class="select_field">
              <select v-model="select_month">
                <option disabled value="">（選択して下さい）</option>
                <option v-for="month in month_list" :value="month.id" :key="month.id" >
                  {{month.label}}
                </option>
              </select>
            </span>
            <p>各市町村の情報（集計年月：{{ get_month }}）：</p>
          </div>
          <div v-if="get_error">
            {{ err_message }}
          </div>
          <div v-else>
            <v-flex xs12 mt-5 justify-center>
              <v-data-table :headers='headers' :items='search_list' color="primary" app lighten class="city_info">
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
    width: 100%;
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
  .select_field {
    select {
      // position: absolute;
      width:40%;
      background-color: white;
      padding:.5em 1em;
      border: 1px solid gray;
      border-radius: 5px;
      margin-bottom: 1em;;
    }
    button {
      // position: absolute;
      // width:10%;
      margin: 0 5px auto;
      text-align: right;
      border: 1px solid gray;
      border-radius: 5px;
      background-color: white;
      padding: 10px;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: white;
        background-color: gray;
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
function getByAxios(url, callback, callback_err) {
  // console.log("get from url : ", url);
  axios
    .get(url)
    .then(response => {
      // console.log(response.data[0]);
      callback(response.data[0]);
    })
    .catch(e => {
      console.log("Error occurred in API")
      console.log(e)
      callback_err(e);
    });
}
//
export default {
  name: 'PopList',
  data () {
    return {
      get_error: false,
      err_message: "データ取得に失敗しました。",
      get_month: "",
      response: "",
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
      select_area: '',
      area_categories: [
        {id: 11, name: '横浜'},
        {id: 12, name: '川崎'},
        {id: 13, name: '県央'},
        {id: 14, name: '横須賀三浦'},
        {id: 15, name: '湘南'},
        {id: 16, name: '県西'},
      ],
      select_month: '',
      month_list: [],
    }
  },
  created () {
    // push month labels to month_list
    this.get_month = "202109";
    let years = ['2021', '2020', '2019'];
    let months = ['12','11','10','09','08','07','06','05','04','03','02','01'];
    let flg_continue = true;
    for (let year of years) {
      for (let month of months) {
        if (year + month == this.get_month) {
          flg_continue = false;
        }
        if (flg_continue) { continue; }
        let child = { id: year + month, label: year + '年' + month + '月'};
        this.month_list.push(child);
      }
    }
    //
    this.getInfo(this.get_month);
  },
  methods: {
      clear_category: function () {
          this.select_area = '';
      },
      // get city_info by callback
      // refer Qiita : https://qiita.com/iwato/items/a1baf059c6ac1e2ab468
      setInfo: function(response){
        // this.info = info
        this.pref_info = App.helpers.filterPrefInfo(response);
        console.log(this.pref_info);
        this.city_info = App.helpers.filterCityInfo(response);
        console.log(this.city_info);
      },
      setError: function(response){
        this.get_error = response;
      },
      getInfo(get_month){
        let get_url = base_url + 'jinkotosetai_' + get_month + '.json';
        this.get_error = false;
        getByAxios(get_url, this.setInfo, this.setError);
      },
  },
  watch: {
    select_month() {
      console.log(this.select_month);
      this.get_month = this.select_month;
      // reload city_infomation
      this.getInfo(this.get_month);
    },
  },
  computed: {
    search_list(){
      // search from keyword
      let selectCategory = this.select_area.trim();
      // console.log(selectCategory);
      if (selectCategory === '') {
        return this.city_info;
      } else {
        return this.city_info.filter(item => {
          return (item.area_name.includes(selectCategory))
        });
      }
    },
  },
}
</script>
