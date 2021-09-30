<template>
  <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
    <v-list>
      <v-list-item>
        <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
        <v-list-item-content>
          <v-list-item-title>Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in items" :key="index" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer></template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      // icon の参照情報は、"https://pictogrammers.github.io/@mdi/font/2.0.46/"を参照して選択
      items: [
        { title: 'ホーム', icon: 'mdi-home', link: { name: 'Home'} },
        { title: '人口一覧', icon: 'mdi-home', link: { name: 'PopList'} },
        { title: 'サイトについて', icon: 'mdi-information-outline', link: { name: 'About' } }
      ]
    }
  },
  methods: {
    ...mapActions(['toggleSideMenu'])
  }
}
</script>
